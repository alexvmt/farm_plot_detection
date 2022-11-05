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

// Select dataset
var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/kaza_bengo_crop_2020_random_2000');
//var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/kaza_bengo_crop_2020_uniform_2000');
//var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/kaza_bengo_crop_2020_random_20000');
//var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/kaza_bengo_crop_2020_uniform_20000');

// Select region of interest
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Binga');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Hwange');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mufunta');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mulobesi');
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Sichifulo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Zambezi');

// Get points within roi
var points = kaza_bengo_crop_2020.filterBounds(roi)

// Select Sentinel-2 images
var s2_images = ee.ImageCollection('COPERNICUS/S2_SR')
	// Filter date
	.filterDate('2020-04-01', '2020-04-30')
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

// Train test split
var train_points = points.filter('subset == "train"');
var test_points = points.filter('subset == "test"');

// Create train data
var train = s2_image.clip(roi).select(bands).sampleRegions({
	collection: train_points,
	properties: ['crop'],
	scale: 10
	});

// Create test data
var test = s2_image.clip(roi).select(bands).sampleRegions({
	collection: test_points,
	properties: ['crop'],
	scale: 10
	});

// Train classifier
var classifier = ee.Classifier.smileRandomForest(10).train({
	features: train,
	classProperty: 'crop',
	inputProperties: bands
	});

// Print some info about the classifier
print('Random forest, explained', classifier.explain());

// Classify test set
var test_pred = test.classify(classifier);

// Print confusion matrix
var confusionMatrix = test_pred.errorMatrix('crop', 'classification');
print('Confusion Matrix', confusionMatrix);

// Calculate train accuracy
var trainAccuracy = classifier.confusionMatrix();
print('Train accuracy: ', trainAccuracy.accuracy());

// Calculate test accuracy
var testAccuracy = test_pred.errorMatrix('crop', 'classification');
print('Test accuracy: ', testAccuracy.accuracy());

// Classify roi
var classified_image = s2_image.clip(roi).select(bands).classify(classifier);

// Get roi bounding box
var bounding_box = roi.geometry().bounds();

// Return list of coordinates
var coordinates_list = ee.Array.cat(bounding_box.coordinates(), 1); 

// Get x and y coordinates
var x = coordinates_list.slice(1, 0, 1);
var y = coordinates_list.slice(1, 1, 2);

// Reduce arrays to find respective min and max value
var x_min = x.reduce('min', [0]).get([0,0]);
var x_max = x.reduce('max', [0]).get([0,0]);
var y_min = y.reduce('min', [0]).get([0,0]);
var y_max = y.reduce('max', [0]).get([0,0]);

// Create box
var box = ee.Geometry.Rectangle(x_min, y_min, x_max, y_max);

// Buffer box
var box_buffered = box.buffer({'distance': 1000});

// Set visualization parameters
var vis_params = {
	min: 0.0,
	max: 0.3,
	bands: ['B4', 'B3', 'B2']
	};

var pred_params = {
	min: 0,
	max: 1,
	palette: ['beige', 'green']
	};

// Visualize points and images
Map.centerObject(roi);
Map.addLayer(s2_image.clip(box_buffered), vis_params, 'RGB');
Map.addLayer(train_points, {color: 'orange'}, 'Train points');
Map.addLayer(test_points, {color: 'blue'}, 'Test points');
Map.addLayer(classified_image, pred_params, 'Classification');