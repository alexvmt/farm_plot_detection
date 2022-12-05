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

// Sentinel-2 mean composite 2020
var s2_image = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range according to selected year below
	.filterDate('2020-01-01', '2020-12-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();

var vis_params = {
	min: 0.0,
	max: 0.3,
	bands: ['B4', 'B3', 'B2']
	};

// Select roi
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/NAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZIM_sites_bengo');

// Select pred
var pred = ee.Image('projects/ee-alexvmt/assets/NAM_sites_bengo_crop_map_2020');
//var pred = ee.Image('projects/ee-alexvmt/assets/ZAM_sites_bengo_crop_map_2020');
//var pred = ee.Image('projects/ee-alexvmt/assets/ZIM_sites_bengo_crop_map_2020');

// Visualize roi and pred for given threshold
var palette = require('users/gena/packages:palettes').cmocean.Speed[7];
Map.centerObject(roi, 8);
Map.addLayer(s2_image.clip(pred.geometry()), vis_params, 'Sentinel-2 mean composite 2020 RGB');
Map.addLayer(pred.clip(roi).gt(0.5), {min: 0, max: 1.0, palette: palette.slice(0,-2)}, 'Crop mask');
Map.addLayer(pred.clip(roi), {min: 0, max: 1.0, palette: palette}, 'Crop probability map');