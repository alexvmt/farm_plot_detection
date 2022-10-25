# Exploring and Detecting Farm Plots in the Kavango-Zambezi Transfrontier Conservation Area

This project is about monitoring agricultural practices in the [Kavango-Zambezi Transfrontier Conservation Area](https://space-science.wwf.de/KAZAStory/)
in collaboration with [WWF Germany's Space+Science Team](https://space-science.wwf.de/).
To do so, it is necessary to know where agricultural areas (i. e. farm plots) are and how their locations and properties change over time.
Satellite images (e. g. from Sentinel-2) can be used to identifiy cropland, applying different methods such as pixel-wise classification and instance segmentation.

There are two datasets to explore.
First, there is a dataset collected during a WWF field campaign, consisting of point coordinates that mark farm plots and spanning the period from 2017 to 2020.
These point coordinates have been used by WWF as the basis for manually drawing farm plot polygons using Google Earth in 2022.
[This](https://github.com/alexvmt/farm_plot_detection/blob/main/exploring_farm_plot_polygons_and_points.ipynb) notebook describes and explores the field campaign data in detail.
Second, there is the [KAZA Landcover 2020](https://space-science.wwf.de/KAZAlandcover/) dataset by WWF, constituting a landcover map for the entire KAZA complex with 18 distinct landcover classes, including cropland.
The data can be downloaded [here](https://panda.maps.arcgis.com/home/item.html?id=0bd9f1902e4c4b9389d8c1f473c76d04), including a link to the technical report that describes the dataset and its creation in detail.

To do

- finalize sampling from KAZA Landcover 2020
- test random forest and neural net using data sampled from KAZA Landcover 2020
- feed data sampled from KAZA Landcover 2020 into OpenMapFlow
- create crop probability maps for 6 Bengo regions of interest for 2020 and 2021



**Contents**

- [What does the region look like from space anyway?](#what-does-the-region-look-like-from-space-anyway)
- [Cropland classification using field campaign dataset](#cropland-classification-using-field-campaign-dataset)
- [Cropland classification using KAZA Landcover 2020 dataset](#cropland-classification-using-KAZA-Landcover-2020-dataset)
- [Requirements](#requirements)
- [References and further information](#references-and-further-information)



## What does the region look like from space anyway?

The following images show Sentinel-2 RGB composites at different temporal resolutions for the sample region of Sioma in 2020, created using Google Earth Engine.

### Yearly resolution

![Sample Region Sioma Yearly Composite](visualizations/sample_region_sioma_yearly_composite.png 'Sample Region Sioma Yearly Composite')

### Quarterly resolution

![Sample Region Sioma Quarterly Composite](visualizations/sample_region_sioma_quarterly_composite.png 'Sample Region Sioma Quarterly Composite')

### Monthly resolution

![Sample Region Sioma Monthly Composite](visualizations/sample_region_sioma_monthly_composite.png 'Sample Region Sioma Monthly Composite')

It is evident that the area is subject to significant variations throughout the seasons of a given year.
February seems to be rather clouldy.
March seems to be somewhat cloudy.
July to November seem to be rather dry and barely vegetated.
January, April, May, June and December seem to be the images showing the least amount of clouds and the most amount of vegetation.
The growing and harvesting seasons need to be considered as well. The planting usually takes place in November/December.
The harvest takes place in April/May.



## Cropland classification using field campaign dataset

The models are trained and applied to the sample region of Sioma, using Google Earth Engine.

The used landcover classes include:

- Green: vegetation
- Blue: water
- Yellow: farm_plots

The data for the vegetation and water classes consist of hand-drawn points while the farm_plots class represents the point coordinates from the mentioned field campaign dataset.

### Random forest

![Classification Sioma using hand-drawn points](visualizations/classification_sioma_using_hand_drawn_points.png 'Classification Sioma using hand-drawn points')

While the classification of vegetation and water seems to show decent results using random forest, it is quite obvious that the same doesn't apply to farm plots.
Some farm plot pixels are correctly classified but bare soil, settlement areas and roads for example are also classified as farm plots.

### Neural net with 3 hidden layers

![Sioma Classification Neural Net](visualizations/sioma_classification_neural_net.png 'Sioma Classification Neural Net')

Using a more complex model, namely a neural net with 3 hidden layers, yields a better classification result.
The classified image can be further explored in a split panel in Earth Engine using [this](https://code.earthengine.google.com/8c8143278fec66f262ff87e0469cdab8) link to the Code Editor.
However, the issue of distinguishing farm plots, bare soil, settlements and roads remains overall.
Other landcover classes containing bare soil and human-influenced structures like settlements and roads could be helpful (e. g. KAZA Landcover 2020).
Instance segmentation, considering the shape of objects, or leveraging the fact that a farm plot pixel looks differently throughout the year could also be more promising paths.



## Cropland classification using KAZA Landcover 2020 dataset

### Exemplary 2020 crop probability map for Sioma using [NASA Harvest's OpenMapFlow](https://github.com/nasaharvest/openmapflow)

NASA Harvest's OpenMapFlow takes into account that pixel values change throughout the year, uses more than just RGB bands and Sentinel-2 data and applies a pre-trained deep learning model,
that can be tuned using data from the respective region of interest, resulting in superior predictive performance compared to using data containing a single timestep.

![Crop Probability Map Sioma](visualizations/crop_probability_map_sioma.png 'Crop Probability Map Sioma')

The exemplary crop probability map above does not yet include any KAZA data but is created on the ground of data that comes with OpenMapFlow.
The map can be further explored in Earth Engine using [this](https://code.earthengine.google.com/27b9028bf982e8cd50f986c4d4002d24) link to the Code Editor.



## Requirements

Assuming `conda` is installed, do the following to run the notebooks:

- create environment: `conda env create --file=farm_plot_detection.yaml`
- activate environment: `conda activate farm_plot_detection`

The Earth Engine Python API notebooks are best run directly in Google Colab.



## References and further information

### Google Earth Engine

- https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR
- https://developers.google.com/earth-engine/guides/tf_examples
- https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-snic
- https://www.youtube.com/watch?v=2R0aTaMtYTY

### GitHub

- https://github.com/artefactory/medium_satellite_imagery
- https://github.com/chrieke/InstanceSegmentation_Sentinel2
- https://github.com/sentinel-hub/field-delineation
- https://github.com/robmarkcole/satellite-image-deep-learning#segmentation---vegetation-crops--crop-boundaries
- https://github.com/nasaharvest/togo-crop-mask
- https://github.com/nasaharvest/crop-mask
- https://github.com/nasaharvest/openmapflow

### Blogs

- https://medium.com/artefact-engineering-and-data-science/leveraging-satellite-imagery-for-machine-learning-computer-vision-applications-d22143f72d94
- https://medium.com/artefact-engineering-and-data-science/applying-machine-learning-algorithms-to-satellite-imagery-for-agriculture-applications-d505eb8df1b1
- https://towardsdatascience.com/farm-segmentation-from-satellite-images-using-holistically-nested-edge-detection-63454a24b164
- https://medium.com/radiant-earth-insights/detecting-agricultural-croplands-from-sentinel-2-satellite-imagery-a025735d3bd8
- https://soilmate.medium.com/%D1%81r%D0%BE%D1%80-field-boundary-detection-approaches-overview-and-main-challenges-53736725cb06
- https://medium.com/onesoil/60-million-fields-and-27-crops-how-we-made-the-onesoil-map-61fe5f3bbb00

### Other

- https://sentinelsat.readthedocs.io/en/stable/api_overview.html#lta-products
- https://scihub.copernicus.eu/news/News00592
- https://scihub.copernicus.eu/news/News00382
- https://scihub.copernicus.eu/news/News00596
- https://scihub.copernicus.eu/userguide/
