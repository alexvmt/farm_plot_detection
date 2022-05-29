/*
 * Function to mask clouds using the Sentinel-2 QA band
 * @param {ee.Image} image Sentinel-2 image
 * @return {ee.Image} cloud masked Sentinel-2 image
 */
 
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

var dataset = ee.ImageCollection('COPERNICUS/S2_SR')
                  // Set date range according to selected year below.
                  .filterDate('2020-04-01', '2020-04-30')
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
                  .map(maskS2clouds);

var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.setCenter(23.4, -16.5, 8);

// Sample Region Sioma
// var center = ee.Geometry.Point([23.55118, -16.64593]);
// Sample Region Mulele
// var center = ee.Geometry.Point([23.11159, -16.75169]);

// Map.centerObject(center, 14);

Map.addLayer(dataset.mean(), visualization, 'RGB');

var farm_plots = ee.FeatureCollection("users/alexvmt/farm_plots_locations")
                    // Filter year according to selected date range above.
                    .filter('year == 2020');

var farm_plots_vis = farm_plots.style({
  color: 'FF000088',
	pointSize: 3,
	fillColor: '00000000',
});

Map.addLayer(farm_plots_vis, null, 'Farm plots locations');