# Farm Plots in the Kavango Zambezi Conservation Area

![Farm Plot Locations in the Kavango Zambezi Conservation Area by Year](farm_plot_locations_by_year.png 'Farm Plot Locations in the Kavango Zambezi Conservation Area by Year')

Further information on KAZA: https://space-science.wwf.de/KAZAStory/

### Requirements to download Sentinel-2 images from Copernicus Open Access Hub

- clone repository
- create environment: `conda env create -f farm_plots.yaml`
- activate environment: `conda activate farm_plots`
- create account at [Coppernicus Open Access Hub](https://scihub.copernicus.eu/dhus/#/home)
- write username and password (`{"username": "XXXX", "password": "XXXX"}`) to json file in `secrets/sentinel_api_credentials.json`

### References and further information

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
