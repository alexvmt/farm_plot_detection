var classified_image = ee.Image('projects/ee-alexvmt/assets/sentinel_2_sioma_classification_neural_net');

var vis_params = {
	bands: 'prediction',
	min: 0,
	max: 2,
	palette: ['green', 'blue', 'yellow']
  };

Map.centerObject(classified_image, 14);
Map.addLayer(classified_image, vis_params, 'Classification');