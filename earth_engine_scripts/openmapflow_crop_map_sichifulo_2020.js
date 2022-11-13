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

// Select region of interest: Sioma
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Sichifulo');

// Sentinel-2 mean composite April 2020
var s2_image = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range according to selected year below
	.filterDate('2020-04-01', '2020-04-30')
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

// Prediction 2020
var image = ee.Image('users/alexvmt/openmapflow_crop_map_sichifulo_2020');
var palettes = require('users/gena/packages:palettes');
var palette = palettes.cmocean.Speed[7];

// Mapping
Map.centerObject(roi);
Map.addLayer(s2_image.clip(roi), vis_params, 'Sentinel-2 RGB');
Map.addLayer(image.clip(roi).gt(0.6), {min: 0, max: 1.0, palette: palette.slice(0,-2)}, 'Mask');
Map.addLayer(image.clip(roi), {min: 0, max: 1.0, palette: palette}, 'Map');