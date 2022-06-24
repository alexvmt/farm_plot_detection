// https://developers.google.com/earth-engine/guides/image_edges

// Select region of interest: Sioma
var roi = ee.Geometry.Point([23.56987, -16.6641]);

// Select Sentinel-2 image
var s2_image = ee.Image(ee.ImageCollection('COPERNICUS/S2_SR')
	// Filter bounds
	.filterBounds(roi)
	// Filter date
	.filterDate('2020-04-01', '2020-04-30')
	// Sort by cloud cover (ascending)
	.sort('CLOUDY_PIXEL_PERCENTAGE')
	// Select least cloudy image
	.first());

// Set visualization parameters
var vis_params = {
	min: 0.0,
	max: 0.3,
	bands: ['B4', 'B3', 'B2']
	};

Map.centerObject(roi, 14);
Map.addLayer(s2_image, vis_params, 'RGB');

// Perform Canny edge detection and display the result
var canny = ee.Algorithms.CannyEdgeDetector({
	image: s2_image, threshold: 10, sigma: 1
	});

Map.addLayer(canny, {}, 'canny');