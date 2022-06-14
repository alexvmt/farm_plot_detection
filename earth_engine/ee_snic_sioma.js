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
}

// Sample region Sioma
var roi = ee.Geometry.Polygon(
  [[[23.533067806079163, -16.640625018221357],
  [23.533067806079163, -16.686260604618802],
  [23.61452112944342, -16.686260604618802],
  [23.61452112944342, -16.640625018221357]]], null, false);

var image = ee.ImageCollection('COPERNICUS/S2_SR')
              // Set date range according to selected year below
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

var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

// SNIC
var kernel = ee.Kernel.gaussian(3);

image = image.convolve(kernel);

var seeds = ee.Algorithms.Image.Segmentation.seedGrid(36);

var snic = ee.Algorithms.Image.Segmentation.SNIC({
  image: image,
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
  image: image, 
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
  image: image,
  compactness: 2,
  connectivity: 8,
  neighborhoodSize: 256,
  seeds: seeds
}).reproject({
  crs: 'EPSG:4326',
  scale: 10
});*/

Map.addLayer(image, visualization, 'RGB');
Map.addLayer(snic.randomVisualizer(), null, 'SNIC 10 m');