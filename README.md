# Farm Plots in the Kavango Zambezi Conservation Area

![Farm Plots Fixed Locations in the Kavango Zambezi Conservation Area by Year](farm_plots_fixed_locations_by_year.png 'Farm Plots Fixed Locations in the Kavango Zambezi Conservation Area by Year')

Further information on KAZA: https://space-science.wwf.de/KAZAStory/

## Sample Regions

### Sample Region Sioma (Sentinel-2 RGB Overlay April 2020)

![Sample Region Sioma](sample_region_sioma.png 'Sample Region Sioma')

### Sample Region Mulele (Sentinel-2 RGB Overlay April 2020)

![Sample Region Mulele](sample_region_mulele.png 'Sample Region Mulele')

## Pixel-wise Classification

### Classification of sample region Sioma using hand-drawn points and Random Forest

![Classification Sioma using hand-drawn points](classification_sioma_using_hand_drawn_points.png 'Classification Sioma using hand-drawn points')

### Classification of sample region Sioma using polygons and Random Forest

![Classification Sioma using polygons](classification_sioma_using_polygons.png 'Classification Sioma using polygons')

Landcover classes:

- Green: vegetation
- Blue: water
- Yellow: farm_plots

While the classification of vegetation and water seems to show decent results, it is quite obvious that the same doesn't apply to farm plots. Some farm plots are correctly classified but urban areas and roads for example are also classified as farm plots. A pixel-wise classification thus seems to be rather challenging when it comes to identifying farm plots in this scenario.

## Requirements to download Sentinel-2 images from Copernicus Open Access Hub

- clone repository
- create environment: `conda env create -f farm_plots.yaml`
- activate environment: `conda activate farm_plots`
- create account at [Copernicus Open Access Hub](https://scihub.copernicus.eu/dhus/#/home)
- write username and password (`{"username": "XXXX", "password": "XXXX"}`) to json file in `secrets/sentinel_api_credentials.json`

## References and further information

- https://medium.com/artefact-engineering-and-data-science/leveraging-satellite-imagery-for-machine-learning-computer-vision-applications-d22143f72d94
- https://github.com/artefactory/medium_satellite_imagery
- https://medium.com/artefact-engineering-and-data-science/applying-machine-learning-algorithms-to-satellite-imagery-for-agriculture-applications-d505eb8df1b1
- https://sentinelsat.readthedocs.io/en/stable/api_overview.html#lta-products
- https://scihub.copernicus.eu/news/News00592
- https://scihub.copernicus.eu/news/News00382
- https://scihub.copernicus.eu/news/News00596
- https://scihub.copernicus.eu/userguide/
- https://towardsdatascience.com/farm-segmentation-from-satellite-images-using-holistically-nested-edge-detection-63454a24b164
- https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR
- https://github.com/chrieke/InstanceSegmentation_Sentinel2
- https://towardsdatascience.com/farm-segmentation-from-satellite-images-using-holistically-nested-edge-detection-63454a24b164