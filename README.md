# Exploring and Detecting Farm Plots in the Kavango-Zambezi Transfrontier Conservation Area

Read more on KAZA [here](https://space-science.wwf.de/KAZAStory/).

## Farm plot locations

![Farm Plots Fixed Locations by Year](visualizations/farm_plots_fixed_locations_by_year.png 'Farm Plots Fixed Locations by Year')

## Years of data collection

![Histogram Years](visualizations/histogram_years.png 'Histogram Years')

## Farm plot areas

![Histogram Farm Plot Areas Category](visualizations/histogram_farm_plot_areas_category.png 'Histogram Farm Plot Areas Category')

There are mostly small farm plots which makes detection especially challenging.

## Sentinel-2 RGB composite for sample region Sioma (2020)

### Year

![Sample Region Sioma Yearly Composite](visualizations/sample_region_sioma_yearly_composite.png 'Sample Region Sioma Yearly Composite')

### Quarter

![Sample Region Sioma Quarterly Composite](visualizations/sample_region_sioma_quarterly_composite.png 'Sample Region Sioma Quarterly Composite')

### Month

![Sample Region Sioma Monthly Composite](visualizations/sample_region_sioma_monthly_composite.png 'Sample Region Sioma Monthly Composite')

February seems to be rather clouldy. March seems to be somewhat cloudy. July to November seem to be rather dry and barely vegetated. January, April, May, June and December seem to be the most promising months considering image quality and characteristics (April seems to be the most promising). The growing and harvesting seasons need to be considered as well. The planting usually takes place in November/December. The harvest takes place in April/May.

### Sample region Sioma with farm plot polygons (Sentinel-2 RGB Overlay April 2020)

![Sample Region Sioma](visualizations/sample_region_sioma.png 'Sample Region Sioma')

## Pixel-wise classification (sample region Sioma)

Landcover classes

- Green: vegetation
- Blue: water
- Yellow: farm_plots

### Hand-drawn points and Random Forest

![Classification Sioma using hand-drawn points](visualizations/classification_sioma_using_hand_drawn_points.png 'Classification Sioma using hand-drawn points')

### Polygons and Random Forest

![Classification Sioma using polygons](visualizations/classification_sioma_using_polygons.png 'Classification Sioma using polygons')

### Hand-drawn points and neural net with 3 hidden layers

![Sioma Classification Neural Net](visualizations/sioma_classification_neural_net.png 'Sioma Classification Neural Net')

While the classification of vegetation and water seems to show decent results, it is quite obvious that the same doesn't apply to farm plots.
Some farm plot pixels are correctly classified but bare soil, settlement areas and roads for example are also classified as farm plots.
A pixel-wise classification thus seems to be rather challenging when it comes to detecting farm plots in this scenario.

Using a more complex model, namely a neural net with 3 hidden layers, yields a better classification result.
The classified image can be further explored in a split panel in Earth Engine using [this](https://code.earthengine.google.com/8c8143278fec66f262ff87e0469cdab8) link to the Code Editor.
However, the issue of distinguishing farm plots, bare soil, settlements and roads remains.
Other landcover classes containing bare soil and human-influenced structures like settlements and roads could be helpful.
But getting such accurate labeled data is challenging due to similar spectral properties and too coarse resolution.
Instance segmentation, also considering the shape of objects, or leveraging the fact that a farm plot pixel looks differently throughout the year could be more promising paths.

## Requirements

Assuming `conda` is installed, do the following to run the exploratory notebooks:

- create environment: `conda env create --file=farm_plot_detection.yaml`
- activate environment: `conda activate farm_plot_detection`

## References and further information

#### Google Earth Engine

- https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR
- https://developers.google.com/earth-engine/guides/tf_examples
- https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-snic
- https://www.youtube.com/watch?v=2R0aTaMtYTY

#### GitHub

- https://github.com/artefactory/medium_satellite_imagery
- https://github.com/chrieke/InstanceSegmentation_Sentinel2
- https://github.com/sentinel-hub/field-delineation
- https://github.com/robmarkcole/satellite-image-deep-learning#segmentation---vegetation-crops--crop-boundaries
- https://github.com/nasaharvest/togo-crop-mask
- https://github.com/nasaharvest/crop-mask

#### Blogs

- https://medium.com/artefact-engineering-and-data-science/leveraging-satellite-imagery-for-machine-learning-computer-vision-applications-d22143f72d94
- https://medium.com/artefact-engineering-and-data-science/applying-machine-learning-algorithms-to-satellite-imagery-for-agriculture-applications-d505eb8df1b1
- https://towardsdatascience.com/farm-segmentation-from-satellite-images-using-holistically-nested-edge-detection-63454a24b164
- https://medium.com/radiant-earth-insights/detecting-agricultural-croplands-from-sentinel-2-satellite-imagery-a025735d3bd8
- https://soilmate.medium.com/%D1%81r%D0%BE%D1%80-field-boundary-detection-approaches-overview-and-main-challenges-53736725cb06
- https://medium.com/onesoil/60-million-fields-and-27-crops-how-we-made-the-onesoil-map-61fe5f3bbb00

#### Other

- https://sentinelsat.readthedocs.io/en/stable/api_overview.html#lta-products
- https://scihub.copernicus.eu/news/News00592
- https://scihub.copernicus.eu/news/News00382
- https://scihub.copernicus.eu/news/News00596
- https://scihub.copernicus.eu/userguide/
