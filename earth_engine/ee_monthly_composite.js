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

var jan = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-01-01', '2020-01-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var feb = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-02-01', '2020-02-29')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var mar = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-03-01', '2020-03-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var apr = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-04-01', '2020-04-30')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var may = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-05-01', '2020-05-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var jun = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-06-01', '2020-06-30')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var jul = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-07-01', '2020-07-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var aug = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-08-01', '2020-08-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var sep = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-09-01', '2020-09-30')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var oct = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-10-01', '2020-10-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var nov = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-11-01', '2020-11-30')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
var dec = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-12-01', '2020-12-31')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean();
	
// Set visualization parameters
var vis_params = {
	min: 0.0,
	max: 0.3,
	bands: ['B4', 'B3', 'B2']
	};

// Create a map for each month and link them
var months = {
	'Jan': jan,
	'Feb': feb,
	'Mar': mar,
	'Apr': apr,
	'May': may,
	'Jun': jun,
	'Jul': jul,
	'Aug': aug,
	'Sep': sep,
	'Oct': oct,
	'Nov': nov,
	'Dec': dec
	};

var maps = [];

for (var month in months) {
	var map = ui.Map().setControlVisibility(false)
	map.addLayer(months[month], vis_params, 'RGB')
	map.add(ui.Label(month))
	maps.push(map);
	};

//ui.root.widgets().reset(maps);
var linker = ui.Map.Linker(maps);

// Show scale
maps[0].setControlVisibility({scaleControl: true});
maps[1].setControlVisibility({scaleControl: true});
maps[2].setControlVisibility({scaleControl: true});
maps[3].setControlVisibility({scaleControl: true});
maps[4].setControlVisibility({scaleControl: true});
maps[5].setControlVisibility({scaleControl: true});
maps[6].setControlVisibility({scaleControl: true});
maps[7].setControlVisibility({scaleControl: true});
maps[8].setControlVisibility({scaleControl: true});
maps[9].setControlVisibility({scaleControl: true});
maps[10].setControlVisibility({scaleControl: true});
maps[11].setControlVisibility({scaleControl: true});

// Create a grid of maps
var mapGrid = ui.Panel(
    [
		ui.Panel([maps[0], maps[1], maps[2]], null, {stretch: 'both'}),
		ui.Panel([maps[3], maps[4], maps[5]], null, {stretch: 'both'}),
		ui.Panel([maps[6], maps[7], maps[8]], null, {stretch: 'both'}),
		ui.Panel([maps[9], maps[10], maps[11]], null, {stretch: 'both'})
    ],
    ui.Panel.Layout.Flow('horizontal'), {stretch: 'both'});

// Sample Region Sioma
maps[0].setCenter(23.56987, -16.6641, 14);

// Sample Region Mulele
//maps[0].setCenter(23.11159, -16.75169, 14);

ui.root.widgets().reset([mapGrid]);
ui.root.setLayout(ui.Panel.Layout.Flow('vertical'));