// https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-snic
// https://www.youtube.com/watch?v=2R0aTaMtYTY
// https://docs.google.com/presentation/d/1p_W06MwdhRFZjkb7imYkuTchatY5nxb5aTRgh6qm2uU/view#slide=id.p

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

// Sample region Sioma
var roi = ee.Geometry.Polygon(
	[[[23.53433995098646, -16.638721269184682],
		  [23.53433995098646, -16.685015046593627],
		  [23.603948639340953, -16.685015046593627],
		  [23.603948639340953, -16.638721269184682]]], null, false);

var s2_image = ee.ImageCollection('COPERNICUS/S2_SR')
	// Set date range
	.filterDate('2020-04-01', '2020-04-30')
	// Filter bounds to roi
	.filterBounds(roi)
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	// Apply cloud mask
	.map(maskS2clouds)
	//Compute median
	.median()
	// Clip to roi
	.clip(roi)
	// Select bands
	.select(['B4', 'B3', 'B2']);

// Set visualization parameters
var vis_params = {
	min: 0.0,
	max: 0.3,
	bands: ['B4', 'B3', 'B2']
	};

// SNIC
var kernel = ee.Kernel.gaussian(3);

s2_image = s2_image.convolve(kernel);

var seeds = ee.Algorithms.Image.Segmentation.seedGrid(36);

var snic = ee.Algorithms.Image.Segmentation.SNIC({
	image: s2_image,
	compactness: 0,
	connectivity: 8,
	neighborhoodSize: 64,
	size: 3,
	seeds: seeds
	}).reproject({
	crs: 'EPSG:4326',
	scale: 10
	});

/*var snic = ee.Algorithms.Image.Segmentation.SNIC({
	image: s2_image, 
	size: 32,
	compactness: 5,
	connectivity: 8,
	neighborhoodSize: 256,
	seeds: seeds
	}).reproject({
	crs: 'EPSG:4326',
	scale: 10
	});*/

/*var snic = ee.Algorithms.Image.Segmentation.SNIC({
	image: s2_image,
	compactness: 2,
	connectivity: 8,
	neighborhoodSize: 256,
	seeds: seeds
	}).reproject({
  crs: 'EPSG:4326',
  scale: 10
  });*/

Map.centerObject(roi, 14);
Map.addLayer(s2_image, vis_params, 'RGB');
Map.addLayer(snic.randomVisualizer(), null, 'SNIC 10 m');