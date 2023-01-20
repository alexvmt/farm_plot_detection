/*
 * Function to mask clouds using the Sentinel-2 QA band
 * @param {ee.Image} image Sentinel-2 image
 * @return {ee.Image} cloud masked Sentinel-2 image
 */
 
function maskS2clouds(image) {
	var qa = image.select('QA60');

	// Bits 10 and 11 are clouds and cirrus, respectively
	var cloudBitMask = 1 << 10;
	var cirrusBitMask = 1 << 11;

	// Both flags should be set to zero, indicating clear conditions
	var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
		.and(qa.bitwiseAnd(cirrusBitMask).eq(0));

	return image.updateMask(mask).divide(10000);
	};

// Load dataset used in OpenMapFlow
var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/OpenMapFlow_KAZABengoCrop2020Random2000');

// Load individual region of interest
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Binga');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Hwange');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mufunta');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mulobesi');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Sichifulo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Zambezi');

// Set start and end date
var start_date = '2020-04-01';
var end_date = '2020-04-30';

// Select Sentinel-2 images
var s2_images = ee.ImageCollection('COPERNICUS/S2_SR')
	// Filter date
	.filterDate(start_date, end_date)
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds);

// NDVI function
var addNDVI = function(image) {
	var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
	return image.addBands(ndvi);
	};

// Apply NDVI function to images and calculate mean
var s2_image = s2_images
	.map(addNDVI)
	.mean();

// Select bands and NDVI for classification
var bands = ['B2', 'B3', 'B4', 'B8', 'NDVI'];

// Train val test split
var train_points = kaza_bengo_crop_2020.filter('subset == "training"');
var val_points = kaza_bengo_crop_2020.filter('subset == "validation"');
var test_points = kaza_bengo_crop_2020.filter('subset == "testing"');

// Create train data
var train = s2_image
	.select(bands)
	.sampleRegions({
		collection: train_points,
		properties: ['crop'],
		scale: 10
	});

// Create val data
var val = s2_image
	.select(bands)
	.sampleRegions({
		collection: val_points,
		properties: ['crop'],
		scale: 10
	});

// Create test data
var test = s2_image
	.select(bands)
	.sampleRegions({
		collection: test_points,
		properties: ['crop'],
		scale: 10
	});
	
// Train classifier and get class predictions
var classifier = ee.Classifier.smileRandomForest(10)
	.train({
		features: train,
		classProperty: 'crop',
		inputProperties: bands
	});

// Print some info about the classifier
print('Random forest, explained', classifier.explain());

// Classify val set
var val_pred = val.classify(classifier);

// Classify test set
var test_pred = test.classify(classifier);

// Calculate train accuracy
var trainAccuracy = classifier.confusionMatrix();
print('Train accuracy: ', trainAccuracy.accuracy());

// Calculate val accuracy
var valAccuracy = val_pred.errorMatrix('crop', 'classification');
print('Val accuracy: ', valAccuracy.accuracy());

// Calculate test accuracy
var testAccuracy = test_pred.errorMatrix('crop', 'classification');
print('Test accuracy: ', testAccuracy.accuracy());

// Classify roi
var classified_image = s2_image
	.clip(roi)
	.select(bands)
	.classify(classifier);

// Set visualization parameters
var pred_params = {
	min: 0,
	max: 1,
	palette: ['beige', 'green']
	};

// Visualize roi and pred
Map.centerObject(roi);
Map.addLayer(classified_image, pred_params, 'Prediction');

// Compute roi area
var roi_area = roi
	.geometry()
	.area({'maxError': 1})
	.divide(1000*1000);

// Compute crop area
var crop = classified_image.eq(1);

var crop_area = crop
	.multiply(ee.Image.pixelArea())
	.divide(1000*1000);

var crop_area_sum = crop_area.reduceRegion({
	reducer: ee.Reducer.sum(),
	geometry: roi,
	scale: 10,
	maxPixels: 1e9
	});

print ('ROI area (km²)', roi_area);
print ('Predicted crop area (km²)', crop_area_sum);