// https://developers.google.com/earth-engine/guides/classification

// Polygons for vegetation and water classes
var vegetation = /* color: #22ff38 */ee.Geometry.Polygon(
        [[[23.52635384094239, -16.643377926342076],
          [23.528327946777353, -16.644611445848025],
          [23.530216221923837, -16.64395356976616],
          [23.531074528808603, -16.644775914515645],
          [23.533992772216806, -16.643377926342076],
          [23.53236198913575, -16.640746391530282],
          [23.527812962646493, -16.642062163452135]]]),
    water = /* color: #1a51ff */ee.Geometry.Polygon(
        [[[23.560943608398446, -16.643706865653254],
          [23.562660222167978, -16.645269319671613],
          [23.56463432800294, -16.645433787774646],
          [23.56935501586915, -16.6465028270038],
          [23.57132912170411, -16.643789100392837]]]);

// Select region of interest: Sioma
var roi = ee.Geometry.Point([23.56987, -16.6641]);

// Select Sentinel-2 image
var image = ee.Image(ee.ImageCollection('COPERNICUS/S2_SR')
                  // Filter bounds
                  .filterBounds(roi)
                  // Filter date
                  .filterDate('2020-04-01', '2020-04-30')
                  // Sort by cloud cover (ascending)
                  .sort('CLOUDY_PIXEL_PERCENTAGE')
                  // Select least cloudy image
                  .first());

var visualization = {
  min: 0.0,
  max: 3000,
  bands: ['B4', 'B3', 'B2'],
};

Map.centerObject(roi, 14);
Map.addLayer(image, visualization, 'RGB');

// Load farm plots
var farm_plots = ee.FeatureCollection("users/alexvmt/farm_plots_fixed_locations")
                    // Filter year according to selected date range above
                    .filter('year == 2020');

// Add class and select class property only
var farm_plots_processed = farm_plots
  .map(function(feature){
    return feature.set('class', 2);
  })
  .select('class');

// Merge vegetation, water and farm plots features
var features = ee.FeatureCollection([
  ee.Feature(vegetation, {'class': 0}),
  ee.Feature(water, {'class': 1}),
  ])
  .merge(farm_plots_processed);

// Select bands for classification
var bands = ['B2', 'B3', 'B4', 'B8'];

// Create training data
var training = image.select(bands).sampleRegions({
  collection: features,
  properties: ['class'],
  scale: 10
});

// Train classifier
var classifier = ee.Classifier.smileRandomForest(10).train({
  features: training,
  classProperty: 'class',
  inputProperties: bands
});

// Classify selected region
var classified = image.select(bands).classify(classifier);

// Display classification
Map.addLayer(classified, {min: 0, max: 2, palette: ['green', 'blue', 'yellow']}, 'Classification');

var farm_plots_vis = farm_plots.style({
  color: 'FF000088',
	fillColor: '00000000',
});

Map.addLayer(farm_plots_vis, null, 'Farm plots fixed locations');
Map.addLayer(vegetation, {color: 'darkgreen'}, 'Vegetation');
Map.addLayer(water, {color: 'darkblue'}, 'Water');