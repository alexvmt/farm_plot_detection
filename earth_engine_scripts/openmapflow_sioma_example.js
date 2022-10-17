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



// Farm plot polygons 2020

var farm_plots = ee.FeatureCollection("users/alexvmt/farm_plots_fixed_locations")
	// Filter year according to selected date range above
	.filter('year == 2020');

var farm_plots_vis = farm_plots.style({
	color: 'FF000088',
	fillColor: '00000000'
	});



// Prediction 2020

var image = ee.Image("users/alexvmt/openmapflow_sioma_example");
var palettes = require('users/gena/packages:palettes');
var palette = palettes.cmocean.Speed[7];



// Mapping

Map.setCenter(23.571, -16.669, 14);
Map.addLayer(s2_image, vis_params, 'Sentinel-2 RGB');
Map.addLayer(image.gt(0.5), {min: 0, max: 1.0, palette: palette.slice(0,-2)}, 'Mask');
Map.addLayer(image, {min: 0, max: 1.0, palette: palette}, 'Map');
Map.addLayer(farm_plots_vis, null, 'Farm plots');