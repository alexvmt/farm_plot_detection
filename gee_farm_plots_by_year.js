var farm_plots = ee.FeatureCollection("users/alexvmt/farm_plots");

Map.setCenter(23.4, -16.5, 8);

var years = ee.Dictionary({
  2017: {color: 'green', pointSize: 3, pointShape: 'circle'},
  2018: {color: 'red', pointSize: 3, pointShape: 'square'},
  2019: {color: 'blue', pointSize: 3, pointShape: 'diamond'},
  2020: {color: 'orange', pointSize: 3, pointShape: 'cross'},
});

farm_plots = farm_plots.map(function(feature) {
  return feature.set('style', years.get(feature.get('Year')));
});

var farm_plots_vis = farm_plots.style({
  styleProperty: 'style',
  neighborhood: 8
});

Map.addLayer(farm_plots_vis, null, 'Feature-specific style');