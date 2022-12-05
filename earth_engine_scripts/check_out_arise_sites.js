var nam = ee.FeatureCollection('projects/ee-alexvmt/assets/NAM_sites_bengo');
var zam = ee.FeatureCollection('projects/ee-alexvmt/assets/ZAM_sites_bengo');
var zim = ee.FeatureCollection('projects/ee-alexvmt/assets/ZIM_sites_bengo');

Map.centerObject(nam, 7);
Map.addLayer(nam, null, 'nam');
Map.addLayer(zam, null, 'zam');
Map.addLayer(zim, null, 'zim');