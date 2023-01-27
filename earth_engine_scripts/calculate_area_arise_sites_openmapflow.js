// Hack to get white map background
var start_date = '2020-04-01';
var end_date = '2020-04-30';

var s2_image = ee.ImageCollection('COPERNICUS/S2_SR')
	// Filter date
	.filterDate(start_date, end_date)
	// Pre-filter to get less cloudy granules
	.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
	.mean();

var vis_params = {
	min: 0.0,
	max: 0.3,
	bands: ['B4', 'B3', 'B2']
	};

// Select roi
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/NAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZIM_sites_bengo');

// Select pred
var pred = ee.Image('projects/ee-alexvmt/assets/NAM_sites_bengo_crop_map_2020');
//var pred = ee.Image('projects/ee-alexvmt/assets/ZAM_sites_bengo_crop_map_2020');
//var pred = ee.Image('projects/ee-alexvmt/assets/ZIM_sites_bengo_crop_map_2020');

// Visualize roi and pred
var palette = require('users/gena/packages:palettes').cmocean.Speed[7];
Map.centerObject(roi.filterBounds(pred.geometry()));
Map.addLayer(s2_image, vis_params, 'White background');
Map.addLayer(pred.clip(roi).gt(0.5), {min: 0, max: 1.0, palette: palette.slice(0,-2)}, 'Crop mask');

// Compute roi area
var roi_area = roi
	.filterBounds(pred.geometry())
	.geometry()
	.area({'maxError': 1})
	.divide(1000*1000);

// Compute crop area
var crop = pred
	.clip(roi)
	.gt(0.5);

var crop_area = crop
	.multiply(ee.Image.pixelArea())
	.divide(1000*1000);

var crop_area_sum = crop_area.reduceRegion({
	reducer: ee.Reducer.sum(),
	geometry: roi,
	scale: 10,
	maxPixels: 1e9
	});

print ('ROI area (km²)', roi_area);
print ('Predicted crop area (km²)', crop_area_sum);