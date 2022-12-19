// Bengo regions
var binga = ee.FeatureCollection('projects/ee-alexvmt/assets/Binga');
var hwange = ee.FeatureCollection('projects/ee-alexvmt/assets/Hwange');
var mufunta = ee.FeatureCollection('projects/ee-alexvmt/assets/Mufunta');
var mulobesi = ee.FeatureCollection('projects/ee-alexvmt/assets/Mulobesi');
var sichifulo = ee.FeatureCollection('projects/ee-alexvmt/assets/Sichifulo');
var zambezi = ee.FeatureCollection('projects/ee-alexvmt/assets/Zambezi');

// Arise sites
var nam = ee.FeatureCollection('projects/ee-alexvmt/assets/NAM_sites_bengo');
var zam = ee.FeatureCollection('projects/ee-alexvmt/assets/ZAM_sites_bengo');
var zim = ee.FeatureCollection('projects/ee-alexvmt/assets/ZIM_sites_bengo');

Map.centerObject(sichifulo, 7);

Map.addLayer(binga, {'color': 'blue'}, 'binga');
Map.addLayer(hwange, {'color': 'blue'}, 'hwange');
Map.addLayer(mufunta, {'color': 'blue'}, 'munfunta');
Map.addLayer(mulobesi, {'color': 'blue'}, 'mulobesi');
Map.addLayer(sichifulo, {'color': 'blue'}, 'sichifulo');
Map.addLayer(zambezi, {'color': 'blue'}, 'zambezi');

Map.addLayer(nam, {'color': 'red'}, 'nam');
Map.addLayer(zam, {'color': 'red'}, 'zam');
Map.addLayer(zim, {'color': 'red'}, 'zim');