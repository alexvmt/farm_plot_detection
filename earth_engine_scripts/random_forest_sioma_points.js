// Create training data points for different landcover classes (vegetation, water, farm_plots)
var vegetation = /* color: #16d64d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.572909159296636, -16.64345313523553]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.573853296869878, -16.643535370083978]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.574883265131596, -16.643535370083978]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57582740270484, -16.64386430912495]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.577114863031987, -16.64394654379698]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.578488154047612, -16.644193247601358]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57857398473609, -16.645015591322434]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.574883265131596, -16.644275482132247]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.573681635492925, -16.644193247601358]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57505492650855, -16.645097825500457]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.580719751948003, -16.647235901743308]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.579861445063237, -16.64805823240762]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.580118937128667, -16.649291721786774]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58157805883277, -16.649785115314913]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.582093042963628, -16.64920948940855]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.583208841913823, -16.648304930918734]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.583981318110112, -16.647893766557097]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.583723826044682, -16.649291721786774]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58252219640601, -16.649785115314913]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.581835550898198, -16.650525203224667]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.580376429194096, -16.651511982656928]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57900313817847, -16.65192313925352]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.581921381586675, -16.651840908004807]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.582951349848393, -16.651758676720778]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.583723826044682, -16.65068966681635]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57582740270484, -16.650114043627756]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.576599878901128, -16.64945618643733]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.574969095820073, -16.64814046527994]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57453994237769, -16.647318134968558]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.574196619623784, -16.64814046527994]),
            {
              "landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.585869593256596, -16.65636357426083]),
            {
              "landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.585182947748784, -16.65578796812305]),
            {
              "landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.584839624994878, -16.655952427196095]),
            {
              "landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58355216466773, -16.656281344918494]),
            {
              "landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.582436365717534, -16.656445803567863]),
            {
              "landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57402495824683, -16.65480121071906]),
            {
              "landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57308082067359, -16.65430783011059]),
            {
              "landcover": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.574883265131596, -16.639341347829756]),
            {
              "landcover": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([23.577200693720464, -16.63950582101935]),
            {
              "landcover": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57754401647437, -16.64008147607173]),
            {
              "landcover": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([23.578659815424565, -16.640574893312255]),
            {
              "landcover": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([23.579088968866948, -16.639999239741517]),
            {
              "landcover": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([23.581148905390386, -16.640903837433715]),
            {
              "landcover": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([23.582436365717534, -16.64139725255754]),
            {
              "landcover": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([23.582951349848393, -16.6419729019301]),
            {
              "landcover": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57951812230933, -16.65241652600457]),
            {
              "landcover": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([23.580376429194096, -16.652087601645064]),
            {
              "landcover": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([23.581234736078862, -16.652005370466934]),
            {
              "landcover": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([23.582178873652104, -16.652334294967645]),
            {
              "landcover": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([23.5778015085398, -16.64460441990297]),
            {
              "landcover": 0,
              "system:index": "49"
            })]),
    water = /* color: #385eff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.55333976232398, -16.639834766975227]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.555399698847417, -16.639752530539173]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55703048192847, -16.639588057561227]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.558232111567143, -16.639752530539173]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.560377878779057, -16.639917003376006]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.562695307367925, -16.639834766975227]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.56509856664527, -16.639752530539173]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.56853179418433, -16.639999239741517]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57102088415015, -16.640245948626347]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.569990915888432, -16.64411101303519]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.566214365595464, -16.64460441990297]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.56355361425269, -16.64394654379698]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55960540258277, -16.642301843652533]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.563467783564214, -16.64073936544355]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.566986841791753, -16.640574893312255]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.572136683100346, -16.64082160145627]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.575913233393315, -16.641808430857207]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.580118937128667, -16.64246631430206]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.581835550898198, -16.64411101303519]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.5832946726023, -16.64485112286051]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.585182947748784, -16.64600239912989]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58303718053687, -16.65447229045462]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58106307470191, -16.65447229045462]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57582740270484, -16.6580903822935]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57453994237769, -16.66072167887531]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.574883265131596, -16.66581971308751]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.578230661982182, -16.667628660330443]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.579174799555425, -16.668533127539817]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.579947275751714, -16.670342049133385]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58252219640601, -16.670999834563794]),
            {
              "landcover": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.584839624994878, -16.67141094930939]),
            {
              "landcover": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.586899561518315, -16.67165761773273]),
            {
              "landcover": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58981780492652, -16.670917611508653]),
            {
              "landcover": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.591105265253667, -16.671164280568043]),
            {
              "landcover": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.59479598485816, -16.672726510558817]),
            {
              "landcover": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.599087519281987, -16.67502872097647]),
            {
              "landcover": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.594366831415776, -16.673384287791094]),
            {
              "landcover": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.577372355097417, -16.667875333629677]),
            {
              "landcover": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([23.556000513666753, -16.64115054515439]),
            {
              "landcover": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([23.56183700048316, -16.64369983967504]),
            {
              "landcover": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([23.565871042841557, -16.64139725255754]),
            {
              "landcover": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([23.569990915888432, -16.64139725255754]),
            {
              "landcover": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([23.568617624872807, -16.644439951088177]),
            {
              "landcover": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57308082067359, -16.64172619526783]),
            {
              "landcover": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([23.582178873652104, -16.655212360255238]),
            {
              "landcover": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([23.59951667272437, -16.67502872097647]),
            {
              "landcover": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58775786840308, -16.67165761773273]),
            {
              "landcover": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([23.585869593256596, -16.67165761773273]),
            {
              "landcover": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([23.583466333979253, -16.671246503517146]),
            {
              "landcover": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([23.580977244013432, -16.67042427243585]),
            {
              "landcover": 1,
              "system:index": "49"
            })]),
    farm_plots = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.597237260458694, -16.683622779058986]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.547125882820062, -16.644672249788623]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.593482697371687, -16.68006894673488]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.547910684605473, -16.64391605780586]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.54524860127656, -16.64173291053917]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.54396438017317, -16.641767089161554]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.543411451642545, -16.643531552263603]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.541681320433806, -16.641818357083707]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.542149526044415, -16.641890986616616]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55657471795232, -16.649179433890307]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.561502024616374, -16.652580044798615]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.54275150468663, -16.644723516933688]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.556704031882862, -16.646129085818576]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55994133924767, -16.64878212239629]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55735506063667, -16.646701563808012]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.557475456365115, -16.646513586149318]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.5579079891673, -16.64841471533529]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.557542342880915, -16.647910597523683]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.556093135038545, -16.647103151824698]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.555834507177448, -16.649974054406584]),
            {
              "landcover": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.556146644251186, -16.647876419996933]),
            {
              "landcover": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.557551261083024, -16.64788496437919]),
            {
              "landcover": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.541257705833733, -16.642429298767354]),
            {
              "landcover": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.542292217278128, -16.6432837593943]),
            {
              "landcover": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.557988252986256, -16.645791579336883]),
            {
              "landcover": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.542425990309734, -16.643659720863386]),
            {
              "landcover": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.54251963143185, -16.643958780596268]),
            {
              "landcover": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.545141582851283, -16.645539517146375]),
            {
              "landcover": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.558652659043222, -16.64555233387592]),
            {
              "landcover": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.575325237882055, -16.671487365398225]),
            {
              "landcover": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.575548192934733, -16.671833369903922]),
            {
              "landcover": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57059413166435, -16.665365972360917]),
            {
              "landcover": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.575004182606207, -16.670966221628387]),
            {
              "landcover": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.586633518153594, -16.67704899163522]),
            {
              "landcover": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58661568174938, -16.677040448554575]),
            {
              "landcover": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58710618286526, -16.67853975336608]),
            {
              "landcover": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.586936737025226, -16.67849703829196]),
            {
              "landcover": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.589861907316287, -16.679876730363276]),
            {
              "landcover": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([23.590472804160612, -16.680201362345148]),
            {
              "landcover": 2,
              "system:index": "38"
            })]);

// Select region of interest: Sioma
var roi = ee.Geometry.Polygon(
	[[[23.53433995098646, -16.638721269184682],
		  [23.53433995098646, -16.685015046593627],
		  [23.603948639340953, -16.685015046593627],
		  [23.603948639340953, -16.638721269184682]]], null, false);

// Select Sentinel-2 images
var s2_images = ee.ImageCollection('COPERNICUS/S2_SR')
	// Filter bounds
	.filterBounds(roi)
	// Filter date
	.filterDate('2020-04-01', '2020-04-30')
	// Sort by cloud cover
	.sort('CLOUDY_PIXEL_PERCENTAGE');

// Set visualization parameters
var vis_params = {
	min: 0.0,
	max: 3000,
	bands: ['B4', 'B3', 'B2']
	};

Map.centerObject(roi, 14);

// Visualize least cloudy image
Map.addLayer(s2_images.first().clip(roi), vis_params, 'RGB');

// Merge landcover feature collections
var newfc = vegetation.merge(water).merge(farm_plots);

// NDVI function
var addNDVI = function(image) {
	var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
	return image.addBands(ndvi);
	};

// Apply NDVI function to image collection and select least cloudy image
var s2_image = s2_images.map(addNDVI).first();

// Select bands and NDVI for classification
var bands = ['B2', 'B3', 'B4', 'B8', 'NDVI'];

// Create training data
var training = s2_image.select(bands).sampleRegions({
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

// Print some info about the classifier
print('Random forest, explained', classifier.explain());

// Classify selected region
var classified_image = s2_image.select(bands).classify(classifier);

// Display classification
Map.addLayer(classified_image.clip(roi), {min: 0, max: 2, palette: ['green', 'blue', 'yellow']}, 'Classification');

// Add column of random uniforms to training dataset
var withRandom = training.randomColumn('random');

// Train test split: 70% training, 30% testing
var split = 0.7;  
var trainingPartition = withRandom.filter(ee.Filter.lt('random', split));
var testingPartition = withRandom.filter(ee.Filter.gte('random', split));

// Train classifier on train set
var trainedClassifier = ee.Classifier.smileRandomForest(10).train({
	features: trainingPartition,
	classProperty: 'landcover',
	inputProperties: bands
	});

// Classify test set
var test = testingPartition.classify(trainedClassifier);

// Print confusion matrix
var confusionMatrix = test.errorMatrix('landcover', 'classification');
print('Confusion Matrix', confusionMatrix);

// Calculate train accuracy
var trainAccuracy = trainedClassifier.confusionMatrix();
print('Train accuracy: ', trainAccuracy.accuracy());

// Calculate test accuracy
var testAccuracy = test.errorMatrix('landcover', 'classification');
print('Test accuracy: ', testAccuracy.accuracy());