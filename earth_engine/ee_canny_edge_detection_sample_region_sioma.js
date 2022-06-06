// https://developers.google.com/earth-engine/guides/image_edges

// Select region of interest: Sioma
var roi = ee.Geometry.Point([23.56987, -16.6641]);

// Select Sentinel-2 image
var image = ee.Image(ee.ImageCollection('COPERNICUS/S2_SR')
                  // Filter bounds
                  .filterBounds(roi)
                  // Filter date
                  .filterDate('2020-04-01', '2020-04-30')
                  // Sort by cloud cover (ascending)
                  .sort('CLOUDY_PIXEL_PERCENTAGE')
                  // Select least cloudy image
                  .first());

var visualization = {
  min: 0.0,
  max: 3000,
  bands: ['B4', 'B3', 'B2'],
};

Map.centerObject(roi, 14);
Map.addLayer(image, visualization, 'RGB');

// Perform Canny edge detection and display the result
var canny = ee.Algorithms.CannyEdgeDetector({
  image: image, threshold: 10, sigma: 1
});

Map.addLayer(canny, {}, 'canny');