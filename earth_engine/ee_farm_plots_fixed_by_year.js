var farm_plots = ee.FeatureCollection('users/alexvmt/farm_plots_fixed_locations');

var years = ee.Dictionary({
  2017: {color: 'green', fillColor: '00000000'},
  2018: {color: 'red', fillColor: '00000000'},
  2019: {color: 'blue', fillColor: '00000000'},
  2020: {color: 'orange', fillColor: '00000000'},
});

function map_style_to_years(feature) {
  return feature.set('style', years.get(feature.get('year')));
}

farm_plots = farm_plots.map(map_style_to_years);

var farm_plots_vis = farm_plots.style({
  styleProperty: 'style',
  neighborhood: 8,
});

Map.setCenter(23.4, -17, 9);
Map.addLayer(farm_plots_vis, null, 'Farm plots fixed locations by year');