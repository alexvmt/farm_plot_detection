var binga = ee.FeatureCollection('projects/ee-alexvmt/assets/Binga');
var hwange = ee.FeatureCollection('projects/ee-alexvmt/assets/Hwange');
var mufunta = ee.FeatureCollection('projects/ee-alexvmt/assets/Mufunta');
var mulobesi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mulobesi');
var sichifulo = ee.FeatureCollection('projects/ee-alexvmt/assets/Sichifulo');
var zambezi = ee.FeatureCollection('projects/ee-alexvmt/assets/Zambezi');

Map.setCenter(24, -17, 7);

Map.addLayer(binga, null, 'Binga');
Map.addLayer(hwange, null, 'Hwange');
Map.addLayer(mufunta, null, 'Mufunta');
Map.addLayer(mulobesi, null, 'Mulobesi');
Map.addLayer(sichifulo, null, 'Sichifulo');
Map.addLayer(zambezi, null, 'Zambezi');