// Select roi
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/NAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZAM_sites_bengo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/ZIM_sites_bengo');

// Select pred
var pred = ee.Image('projects/ee-alexvmt/assets/NAM_sites_bengo_crop_map_2020');
//var pred = ee.Image('projects/ee-alexvmt/assets/ZAM_sites_bengo_crop_map_2020');
//var pred = ee.Image('projects/ee-alexvmt/assets/ZIM_sites_bengo_crop_map_2020');

// Visualize roi and pred for given threshold
var palette = require('users/gena/packages:palettes').cmocean.Speed[7];
Map.centerObject(roi, 8);
Map.addLayer(pred.clip(roi).gt(0.5), {min: 0, max: 1.0, palette: palette.slice(0,-2)}, 'Mask');
Map.addLayer(pred.clip(roi), {min: 0, max: 1.0, palette: palette}, 'Map');