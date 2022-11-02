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

// Sample region Sioma rectangle
var roi = ee.Geometry.Polygon(
	[[[23.53433995098646, -16.638721269184682],
		  [23.53433995098646, -16.685015046593627],
		  [23.603948639340953, -16.685015046593627],
		  [23.603948639340953, -16.638721269184682]]], null, false);

var s2_image = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-04-01', '2020-04-30')
	// Filter bounds
	.filterBounds(roi)
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	// Compute mean
	.mean()
	// Clip image
	.clip(roi);

var vis_params = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2']
  };

Map.centerObject(roi, 12);
Map.addLayer(s2_image, vis_params, 'RGB');

// Export image to Drive
/*Export.image.toDrive({
	image: s2_image,
	description: 'sample_region_sioma_april_2020',
	folder: 'farm_plot_detection',
	region: roi,
	scale: 10,
	maxPixels: 1e13,
	fileFormat: 'GeoTIFF'
	});*/

var image_export_options = {
    'patchDimensions': [256, 256],
    'maxFileSize': 104857600,
    'compressed': 'True'
    }

// Export image to Drive
Export.image.toDrive({
	image: s2_image,
	description: 'sample_region_sioma_april_2020',
	folder: 'farm_plot_detection',
	region: roi,
	scale: 10,
	maxPixels: 1e13,
	fileFormat: 'TFRecord',
	formatOptions: image_export_options
	});