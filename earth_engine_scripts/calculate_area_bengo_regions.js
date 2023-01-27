// Select and load ROI
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Binga');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Hwange');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mufunta');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mulobesi');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Sichifulo');
//var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/Zambezi');

// Visualize ROI
Map.centerObject(roi);
Map.addLayer(roi);

// Compute roi area
var roi_area = roi
	.geometry()
	.area({'maxError': 1})
	.divide(1000*1000);

print ('ROI area (km²)', roi_area);