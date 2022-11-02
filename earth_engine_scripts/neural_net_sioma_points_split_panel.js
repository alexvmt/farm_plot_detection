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

// Load classified image
var classified_image = ee.Image('projects/ee-alexvmt/assets/neural_net_sioma_points');

// Load Sentinel-2 image
var s2_image = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-04-01', '2020-04-30')
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean()
	// Clip image
	.clip(classified_image.geometry());

// Set visualization parameters
var vis_params_s2 = {
	min: 0.0,
	max: 0.3,
	bands: ['B4', 'B3', 'B2']
	};

var vis_params_classification = {
	bands: 'prediction',
	min: 0,
	max: 2,
	palette: ['green', 'blue', 'yellow']
  };

// Create maps and add image layers
var leftMap = ui.Map();
var rightMap = ui.Map();
var rgb_img = ui.Map.Layer(s2_image, vis_params_s2);
var classification_img = ui.Map.Layer(classified_image, vis_params_classification);
var rgb_layer = leftMap.layers();
var classification_layer = rightMap.layers();
rgb_layer.add(rgb_img);
classification_layer.add(classification_img);

// Create and add labels
var rgb_label = ui.Label('Sentinel-2 RGB');
rgb_label.style().set('position', 'bottom-left');
var classification_label = ui.Label('Classification');
classification_label.style().set('position', 'bottom-right');
leftMap.add(rgb_label);
rightMap.add(classification_label);

// Remove controls
leftMap.setControlVisibility(false);
rightMap.setControlVisibility(false);

// Create split panel
var splitPanel = ui.SplitPanel({
  firstPanel: leftMap,
  secondPanel: rightMap,
  wipe: true,
  style: {stretch: 'both'}
});

ui.root.clear();
ui.root.add(splitPanel);

// Link maps
var linker = ui.Map.Linker([leftMap, rightMap]);

leftMap.centerObject(classified_image, 14);