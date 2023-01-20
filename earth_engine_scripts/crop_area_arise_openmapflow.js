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