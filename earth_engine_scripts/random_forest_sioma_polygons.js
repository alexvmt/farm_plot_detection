// Polygons for vegetation and water land_cover classes
var vegetation = /* color: #22ff38 */ee.Geometry.Polygon(
        [[[23.582951349848393, -16.64814046527994],
          [23.581921381586675, -16.648716094398043],
          [23.581234736078862, -16.650360739491795],
          [23.579088968866948, -16.652252063895418],
          [23.582693857782964, -16.653567756814873],
          [23.58406714879859, -16.651018593576143],
          [23.58449630224097, -16.649045024546233],
          [23.58380965673316, -16.647235901743308]]]),
    water = /* color: #1a51ff */ee.Geometry.Polygon(
        [[[23.560943608398446, -16.643706865653254],
          [23.562660222167978, -16.645269319671613],
          [23.56463432800294, -16.645433787774646],
          [23.56935501586915, -16.6465028270038],
          [23.57132912170411, -16.643789100392837]]]);

// Select region of interest: Sioma
var roi = ee.Geometry.Polygon(
	[[[23.53433995098646, -16.638721269184682],
		  [23.53433995098646, -16.685015046593627],
		  [23.603948639340953, -16.685015046593627],
		  [23.603948639340953, -16.638721269184682]]], null, false);

// Select Sentinel-2 images
var s2_images = ee.ImageCollection('COPERNICUS/S2_SR')
	// Filter bounds
	.filterBounds(roi)
	// Filter date
	.filterDate('2020-04-01', '2020-04-30')
	// Sort by cloud cover
	.sort('CLOUDY_PIXEL_PERCENTAGE');

// Set visualization parameters
var vis_params = {
	min: 0.0,
	max: 3000,
	bands: ['B4', 'B3', 'B2']
	};

Map.centerObject(roi, 14);

// Visualize least cloudy image
Map.addLayer(s2_images.first().clip(roi), vis_params, 'RGB');

// Load farm plots
var farm_plots = ee.FeatureCollection('projects/ee-alexvmt/assets/farm_plots_fixed')
	// Filter year according to selected date range above
	.filter('year == 2020');

// Add class and select class property only
var farm_plots_processed = farm_plots
	.map(function(feature){
	return feature.set('land_cover', 2);
	})
	.select('land_cover');

// Merge vegetation, water and farm plots features
var features = ee.FeatureCollection([
	ee.Feature(vegetation, {'land_cover': 0}),
	ee.Feature(water, {'land_cover': 1})
	])
	.merge(farm_plots_processed);

// NDVI function
var addNDVI = function(image) {
	var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
	return image.addBands(ndvi);
	};

// Apply NDVI function to image collection and select least cloudy image
var s2_image = s2_images.map(addNDVI).first();

// Select bands and NDVI for classification
var bands = ['B2', 'B3', 'B4', 'B8', 'NDVI'];

// Create training data
var training = s2_image.select(bands).sampleRegions({
	collection: features,
	properties: ['land_cover'],
	scale: 10
	});

// Train classifier
var classifier = ee.Classifier.smileRandomForest(10).train({
	features: training,
	classProperty: 'land_cover',
	inputProperties: bands
	});

// Print some info about the classifier
print('Random forest, explained', classifier.explain());

// Classify selected region
var classified_image = s2_image.select(bands).classify(classifier);

// Display classification
Map.addLayer(classified_image.clip(roi), {min: 0, max: 2, palette: ['green', 'blue', 'yellow']}, 'Classification');

var farm_plots_vis = farm_plots.style({
	color: 'FF000088',
	fillColor: '00000000'
	});

Map.addLayer(farm_plots_vis, null, 'Farm plots fixed');
Map.addLayer(vegetation, {color: 'darkgreen'}, 'Vegetation');
Map.addLayer(water, {color: 'darkblue'}, 'Water');

// Add column of random uniforms to training dataset
var withRandom = training.randomColumn('random');

// Train test split: 70% training, 30% testing
var split = 0.7;  
var trainingPartition = withRandom.filter(ee.Filter.lt('random', split));
var testingPartition = withRandom.filter(ee.Filter.gte('random', split));

// Train classifier on train set
var trainedClassifier = ee.Classifier.smileRandomForest(10).train({
	features: trainingPartition,
	classProperty: 'land_cover',
	inputProperties: bands
	});

// Classify test set
var test = testingPartition.classify(trainedClassifier);

// Print confusion matrix
var confusionMatrix = test.errorMatrix('land_cover', 'classification');
print('Confusion Matrix', confusionMatrix);

// Calculate train accuracy
var trainAccuracy = trainedClassifier.confusionMatrix();
print('Train accuracy: ', trainAccuracy.accuracy());

// Calculate test accuracy
var testAccuracy = test.errorMatrix('land_cover', 'classification');
print('Test accuracy: ', testAccuracy.accuracy());