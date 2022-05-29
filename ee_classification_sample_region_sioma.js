// Create training data points for different landcover classes (vegetation, water, farm_plots)
var vegetation = /* color: #16d64d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.531761174316415, -16.661195343436308]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.53313446533204, -16.665882239293236]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.527469639892587, -16.669335668063322]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.504467015380868, -16.66884232491176]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.503608708496103, -16.657906225195877]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.49888802062989, -16.653054672669438]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.51244926940919, -16.64886085875175]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.515539174194345, -16.6727068122215]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.499231343383798, -16.679613361056266]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.528327946777353, -16.681175522038036]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.541545872802743, -16.67221347776228]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.558282857055673, -16.671720142030914]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55287552368165, -16.673117923299035]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.54961395751954, -16.68380650115773]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.620424275512704, -16.683313195330648]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64703178894044, -16.665306661772906]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.646688466186532, -16.657001707774718]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.640336995239267, -16.655110430270373]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.645915989990243, -16.64984764675657]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.627204899902353, -16.647133967514243]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.623943333740243, -16.64425578086784]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.614416127319345, -16.643762373102497]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.495283131713876, -16.66267542820973]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.51588249694825, -16.664319953425384]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.529701237792978, -16.652314594531834]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.564720158691415, -16.684546457511587]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.606948857421884, -16.684299805711873]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.51837158691407, -16.683477630747774]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.50987434875489, -16.68298432407211]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.495626454467782, -16.646805034085403]),
            {
              "landcover": 0,
              "system:index": "29"
            })]),
    water = /* color: #385eff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.562488560791024, -16.64244661285168]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.564205174560556, -16.644502484274167]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.568067555542, -16.643515668743493]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.581628804321298, -16.64326896406694]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.584375386352548, -16.64507812432059]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.636302952880868, -16.682737670256927]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63372803222657, -16.680353333638507]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.630123143310556, -16.6764067801125]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.627634053344735, -16.67361125542588]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.62523079406739, -16.669829009942926]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.620939259643563, -16.67081568988615]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.616390233154306, -16.673035701154205]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.614587788696298, -16.671144582069854]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.608407979125985, -16.673940142803648]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.600854878540048, -16.67517346543417]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.598709111328134, -16.67533790785075]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.590040211792, -16.671391250836617]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58609200012208, -16.671391250836617]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.5830879260254, -16.671144582069854]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57982635986329, -16.669829009942926]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.577680592651376, -16.667773410386694]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.574934010620126, -16.665964464511973]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.575534825439462, -16.658564053364035]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.578281407470712, -16.653136903397108]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.580942158813485, -16.65469928051537]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58283043395997, -16.655110430270373]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.585491185302743, -16.646558333643224]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.565235142822274, -16.644502484274167]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.56832504760743, -16.645242592587703]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.570899968261728, -16.64285778890034]),
            {
              "landcover": 1,
              "system:index": "29"
            })]),
    farm_plots = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.5391426135254, -16.645982698043014]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.542060856933603, -16.645489294723728]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.543262486572274, -16.645324826668325]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.549184804077157, -16.648696393590175]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.551759724731454, -16.64951871798635]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.550815587158212, -16.649025323772165]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.5501289416504, -16.65025880692519]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.54935646545411, -16.650916661359584]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.550214772338876, -16.651738976225776]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.545064931030282, -16.655357119699712]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.538713460083017, -16.657166165805442]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.536996846313485, -16.65749508144318]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.556909566040048, -16.65034103885303]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55785370361329, -16.651245587729644]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55836868774415, -16.656426103554953]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.560256962890634, -16.657001707774718]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.564033513183603, -16.673775699185455]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.562488560791024, -16.675255686660126]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.563518529052743, -16.67574901327369]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.561458592529306, -16.677804527134]),
            {
              "landcover": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.59604835998536, -16.670486797137094]),
            {
              "landcover": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.597507481689462, -16.668184532064483]),
            {
              "landcover": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.598880772705087, -16.663333239991392]),
            {
              "landcover": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.597679143066415, -16.66267542820973]),
            {
              "landcover": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.564462666625985, -16.676735662683626]),
            {
              "landcover": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.562145238037118, -16.678215627255046]),
            {
              "landcover": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.558454518432626, -16.680024457288802]),
            {
              "landcover": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.563432698364267, -16.663662145034536]),
            {
              "landcover": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.56008530151368, -16.657741767800726]),
            {
              "landcover": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.557252888793954, -16.657823996515948]),
            {
              "landcover": 2,
              "system:index": "29"
            })]);

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

// Merge landcover feature collections
var newfc = vegetation.merge(water).merge(farm_plots);

// Select bands
var bands = ['B2', 'B3', 'B4'];

// Create training data
var training = image.select(bands).sampleRegions({
  collection: newfc,
  properties: ['landcover'],
  scale: 10
});

// Train classifier
var classifier = ee.Classifier.smileRandomForest(10).train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});

// Classify selected region
var classified = image.select(bands).classify(classifier);

// Display classification
Map.addLayer(classified, {min: 0, max: 2, palette: ['green', 'blue', 'yellow']}, 'Classification');