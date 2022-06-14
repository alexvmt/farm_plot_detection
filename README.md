# Farm Plots in the Kavango Zambezi Conservation Area

![Farm Plots Fixed Locations in the Kavango Zambezi Conservation Area by Year](visualizations/farm_plots_fixed_locations_by_year.png 'Farm Plots Fixed Locations in the Kavango Zambezi Conservation Area by Year')

Further information on KAZA: https://space-science.wwf.de/KAZAStory/

## Farm plot areas

![Histogram of Farm Plot Areas](visualizations/farm_plots_fixed_areas_histogram.png 'Histogram of Farm Plot Areas')

![Histogram of Farm Plot Areas by Category](visualizations/farm_plots_fixed_areas_histogram_category.png 'Histogram of Farm Plot Areas by Category')

## Sample regions

## Yearly, quarterly and monthly composites of sample region Sioma (Sentinel-2 RGB Overlay 2020)

![Sample Region Sioma Yearly Composite](visualizations/sample_region_sioma_yearly_composite.png 'Sample Region Sioma Yearly Composite')

![Sample Region Sioma Quarterly Composite](visualizations/sample_region_sioma_quarterly_composite.png 'Sample Region Sioma Quarterly Composite')

![Sample Region Sioma Monthly Composite](visualizations/sample_region_sioma_monthly_composite.png 'Sample Region Sioma Monthly Composite')

February seems to be rather clouldy. March seems to be somewhat cloudy. July to November seem to be rather dry and barely vegetated. January, April, May, June and December seem to be the most promising months considering image quality and characteristics (April seems to be the most promising). The growing and harvesting seasons need to be considered as well.

### Sample region Sioma (Sentinel-2 RGB Overlay April 2020)

![Sample Region Sioma](visualizations/sample_region_sioma.png 'Sample Region Sioma')

### Sample region Mulele (Sentinel-2 RGB Overlay April 2020)

![Sample Region Mulele](visualizations/sample_region_mulele.png 'Sample Region Mulele')

## Pixel-wise classification

### Classification of sample region Sioma using hand-drawn points and Random Forest

![Classification Sioma using hand-drawn points](visualizations/classification_sioma_using_hand_drawn_points.png 'Classification Sioma using hand-drawn points')

### Classification of sample region Sioma using polygons and Random Forest

![Classification Sioma using polygons](visualizations/classification_sioma_using_polygons.png 'Classification Sioma using polygons')

Landcover classes:

- Green: vegetation
- Blue: water
- Yellow: farm_plots

While the classification of vegetation and water seems to show decent results, it is quite obvious that the same doesn't apply to farm plots. Some farm plots are correctly classified but urban areas and roads for example are also classified as farm plots. A pixel-wise classification thus seems to be rather challenging when it comes to identifying farm plots in this scenario.

## Image segmentation

### Applying SNIC to sample region Sioma

![SNIC Sioma](visualizations/sample_region_sioma_snic.png 'SNIC Sioma')

Applying the SNIC clustering algorithm to a Sentinel-2 scene from April 2020 yields the result above. The river and some roads could be guessed but farm plots cannot be identified really. Perhaps the algorithm's parameters need some more tuning.

## Requirements

- create environment `conda env create -f farm_plots.yaml`
- activate environment: `conda activate farm_plots`

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
