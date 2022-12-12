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



// Load data

//var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/kaza_bengo_crop_2020_random_2000');
var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/kaza_bengo_crop_2020_random_20000');

var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/NAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZIM_sites_bengo');

var openmapflow_crop_map_2020 = ee.Image('projects/ee-alexvmt/assets/NAM_sites_bengo_crop_map_2020');
//var openmapflow_crop_map_2020 = ee.Image('projects/ee-alexvmt/assets/ZAM_sites_bengo_crop_map_2020');
//var openmapflow_crop_map_2020 = ee.Image('projects/ee-alexvmt/assets/ZIM_sites_bengo_crop_map_2020');



// Export actual train and test labels within roi
var actual = kaza_bengo_crop_2020.filterBounds(roi);

Export.table.toDrive({
  collection: actual,
  description: 'export_actual_labels',
  folder: 'NAM',
  //folder: 'ZAM',
  //folder: 'ZIM',
  fileNamePrefix: 'actual_labels'
  fileFormat: 'CSV'
  });



// OpenMapflow model

// Define thresholds
var thresholds = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

// Export predicted labels for different thresholds within roi
thresholds.forEach(function (threshold) {
  
  var prediction = openmapflow_crop_map_2020
	.gt(threshold)
	.reduceToVectors({
		geometry: actual,
		scale: 10,
		geometryType: 'centroid',
		labelProperty: 'prediction',
		maxPixels: 100e9
		});
  
  var file_name = 'openmapflow_predictions_threshold_' + threshold.toString().replace('.', '_');
  
  Export.table.toDrive({
    collection: prediction,
    description: 'export_openmapflow_predictions',
    folder: 'NAM',
    //folder: 'ZAM',
    //folder: 'ZIM',
    fileNamePrefix: file_name,
    fileFormat: 'CSV'
    });

  });



// Random forest

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
var train_points = kaza_bengo_crop_2020.filter('subset == "train"');
var test_points = kaza_bengo_crop_2020.filter('subset == "test"');

// Create train data
var train = s2_image
  .select(bands)
  .sampleRegions({
    collection: train_points,
    properties: ['crop'],
    scale: 10
    });

// Create test data within roi
var test = s2_image
  .clip(roi)
  .select(bands)
  .sampleRegions({
    collection: test_points,
    properties: ['crop'],
    scale: 10
    });

// Train classifier
var classifier = ee.Classifier.smileRandomForest(10)
  .train({
    features: train,
    classProperty: 'crop',
    inputProperties: bands
    })
  .setOutputMode('PROBABILITY');

// Classify test set
var test_pred = test.classify(classifier);

// Export predicted class probabilities
Export.table.toDrive({
    collection: test_pred,
    description: 'export_random_forest_class_probabilities',
    folder: 'NAM',
    //folder: 'ZAM',
    //folder: 'ZIM',
    fileNamePrefix: 'random_forest_class_probabilities',
    fileFormat: 'CSV'
  });