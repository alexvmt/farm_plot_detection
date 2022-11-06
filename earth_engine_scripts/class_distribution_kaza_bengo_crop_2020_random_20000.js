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

var kaza_bengo_crop_2020 = ee.FeatureCollection('projects/ee-alexvmt/assets/kaza_bengo_crop_2020_random_20000');

var binga = ee.FeatureCollection('projects/ee-alexvmt/assets/Binga');
var hwange = ee.FeatureCollection('projects/ee-alexvmt/assets/Hwange');
var mufunta = ee.FeatureCollection('projects/ee-alexvmt/assets/Mufunta');
var mulobesi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mulobesi');
var sichifulo = ee.FeatureCollection('projects/ee-alexvmt/assets/Sichifulo');
var zambezi = ee.FeatureCollection('projects/ee-alexvmt/assets/Zambezi');

var roi = binga.geometry().union(hwange.geometry());
var roi = roi.union(mufunta.geometry());
var roi = roi.union(mulobesi.geometry());
var roi = roi.union(sichifulo.geometry());
var roi = roi.union(zambezi.geometry());

var crop = kaza_bengo_crop_2020.filter('crop == 1');
var non_crop = kaza_bengo_crop_2020.filter('crop == 0');

// Select Sentinel-2 images
var s2_image = ee.ImageCollection('COPERNICUS/S2_SR')
	// Filter date
	.filterDate('2020-04-01', '2020-04-30')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Calculate mean
	.mean();

// Get roi bounding box
//var bounding_box = roi.geometry().bounds();
var bounding_box = roi.bounds();

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

Map.centerObject(roi);
Map.addLayer(s2_image.clip(box_buffered), vis_params, 'RGB');
Map.addLayer(non_crop, {'color': 'beige'}, 'Non-crop');
Map.addLayer(crop, {'color': 'green'}, 'Crop');
  