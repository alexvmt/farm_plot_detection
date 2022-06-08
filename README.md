# Farm Plots in the Kavango Zambezi Conservation Area

![Farm Plots Fixed Locations in the Kavango Zambezi Conservation Area by Year](visualizations/farm_plots_fixed_locations_by_year.png 'Farm Plots Fixed Locations in the Kavango Zambezi Conservation Area by Year')

![Histogram of Farm Plot Areas](visualizations/farm_plots_fixed_areas_histogram.png 'Histogram of Farm Plot Areas')

![Histogram of Farm Plot Areas by Category](visualizations/farm_plots_fixed_areas_histogram_category.png 'Histogram of Farm Plot Areas by Category')

Further information on KAZA: https://space-science.wwf.de/KAZAStory/

## Sample Regions

### Sample Region Sioma (Sentinel-2 RGB Overlay April 2020)

![Sample Region Sioma](visualizations/sample_region_sioma.png 'Sample Region Sioma')

### Sample Region Mulele (Sentinel-2 RGB Overlay April 2020)

![Sample Region Mulele](visualizations/sample_region_mulele.png 'Sample Region Mulele')

## Pixel-wise Classification

### Classification of sample region Sioma using hand-drawn points and Random Forest

![Classification Sioma using hand-drawn points](visualizations/classification_sioma_using_hand_drawn_points.png 'Classification Sioma using hand-drawn points')

### Classification of sample region Sioma using polygons and Random Forest

![Classification Sioma using polygons](visualizations/classification_sioma_using_polygons.png 'Classification Sioma using polygons')

Landcover classes:

- Green: vegetation
- Blue: water
- Yellow: farm_plots

While the classification of vegetation and water seems to show decent results, it is quite obvious that the same doesn't apply to farm plots. Some farm plots are correctly classified but urban areas and roads for example are also classified as farm plots. A pixel-wise classification thus seems to be rather challenging when it comes to identifying farm plots in this scenario.

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

#### Blogs

- https://medium.com/artefact-engineering-and-data-science/leveraging-satellite-imagery-for-machine-learning-computer-vision-applications-d22143f72d94
- https://medium.com/artefact-engineering-and-data-science/applying-machine-learning-algorithms-to-satellite-imagery-for-agriculture-applications-d505eb8df1b1
- https://towardsdatascience.com/farm-segmentation-from-satellite-images-using-holistically-nested-edge-detection-63454a24b164
- https://medium.com/radiant-earth-insights/detecting-agricultural-croplands-from-sentinel-2-satellite-imagery-a025735d3bd8

#### Other

- https://sentinelsat.readthedocs.io/en/stable/api_overview.html#lta-products
- https://scihub.copernicus.eu/news/News00592
- https://scihub.copernicus.eu/news/News00382
- https://scihub.copernicus.eu/news/News00596
- https://scihub.copernicus.eu/userguide/
