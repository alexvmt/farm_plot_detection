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

var q1 = ee.ImageCollection('COPERNICUS/S2_SR')
            // Set date range
            .filterDate('2020-01-01', '2020-03-31')
            // Pre-filter to get less cloudy granules
            .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
            .map(maskS2clouds);

var q2 = ee.ImageCollection('COPERNICUS/S2_SR')
            // Set date range
            .filterDate('2020-04-01', '2020-06-30')
            // Pre-filter to get less cloudy granules
            .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
            .map(maskS2clouds);

var q3 = ee.ImageCollection('COPERNICUS/S2_SR')
            // Set date range
            .filterDate('2020-07-01', '2020-09-30')
            // Pre-filter to get less cloudy granules
            .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
            .map(maskS2clouds);

var q4 = ee.ImageCollection('COPERNICUS/S2_SR')
            // Set date range
            .filterDate('2020-10-01', '2020-12-31')
            // Pre-filter to get less cloudy granules
            .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
            .map(maskS2clouds);

// Set visualization parameters
var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

// Create a map for each quarter and link them
var quarters = {
  'Q1': q1,
  'Q2': q2,
  'Q3': q3,
  'Q4': q4
}

var maps = [];

for (var quarter in quarters) {
  var map = ui.Map().setControlVisibility(false)
  map.addLayer(quarters[quarter].mean(), visualization, 'RGB')
  map.add(ui.Label(quarter))
  maps.push(map);
}

// Show scale
maps[0].setControlVisibility({scaleControl: true});
maps[1].setControlVisibility({scaleControl: true});
maps[2].setControlVisibility({scaleControl: true});
maps[3].setControlVisibility({scaleControl: true});

ui.root.widgets().reset(maps);
var linker = ui.Map.Linker(maps);

// Sample Region Sioma
var center = ee.Geometry.Point([23.56987, -16.6641]);

// Sample Region Mulele
//var center = ee.Geometry.Point([23.11159, -16.75169]);

maps[0].centerObject(center, 14);