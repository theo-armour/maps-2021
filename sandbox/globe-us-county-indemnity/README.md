# [![](https://theo-armour.github.io/maps-2021/lib/assets/icons/mark-github.svg )](https://github.com/theo-armour/maps-2021/tree/main/sandbox/globe-us-county-indemnity "Source code on GitHub" ) [Maps 2021]( https://theo-armour.github.io/maps-2021/ "Home page" ) / [US County Indemnity Read Me]( https://theo-armour.github.io/maps-2021/#sandbox/globe-us-county-indemnity/README.md )


<!--@@@
<div class=iframe-resize ><iframe src=https://theo-armour.github.io/maps-2021/sandbox/globe-us-county-indemnity height=100% width=100% ></iframe></div>
_US County Indemnity in a resizable window. One finger to rotate. Two to zoom._
@@@-->


## Full Screen: [US County Indemnity]( https://theo-armour.github.io/maps-2021/sandbox/globe-us-county-indemnity/ )


## Concept

Display US crop insurance indemnities by county for 1979 to 2017. Losses due to declines in price, hail, and earthquakes, tornadoes, and hurricanes have been excluded from this accounting as having little to do with soil health or function.

You have many years experience looking at graphs on paper but only a few years experience looking at graphs on phones and tablets. Given that you are likely to increase your time looking at your phone in the future, we must consider the shape of the graphs to come.

Thus a particular motivation here is to display the data in a fun and lively manner in order to encourage you to manipulate the model and gain new insights.

A globe is a useful reminder that the US is just a small part of the earth and that future revisions could consider the numbers over the entire Earth.


## To Do / Wish List

This is a first pass at displaying the data. Further revisions might add more data

* $$ per acre as colors with legend
* Width of bar: total acres
* Legends and colors developed in more detail
* Rainfall or other weather difference with moving average is indicated
* Add slider bar for years
* Add functions that look for and report interesting data points
* Continue investigation into data sources
* Current year color indicates the difference with a moving averages of the data
* Crop types and acres of crop areas are indicated
* Popups display statistics such as average and total indemnity for the entire period and or decade
* Data for all states and territories is added
* Data is grabbed at load time from original sources
* Entire graphic design and user experience is ameliorated

## Issues

* 2021-07-21 ~ menu width has issues on tablets?

## Links of Interest

### Insurance References

Wikipedia

* https://en.wikipedia.org/wiki/Crop_insurance

> Crop insurance is purchased by agricultural producers, and subsidized by the federal government, to protect against either the loss of their crops due to natural disasters, such as hail, drought, and floods, or the loss of revenue due to declines in the prices of agricultural commodities. The two general categories of crop insurance are called crop-yield insurance and crop-revenue insurance. On average, the federal government subsidizes 62 percent of the premium.

* https://en.wikipedia.org/wiki/Group_Risk_Protection
* https://en.wikipedia.org/wiki/Group_Risk_Income_Protection
* https://en.wikipedia.org/wiki/Weather_insurance

Demographics

* https://en.wikipedia.org/wiki/GeoJSON
* https://en.wikipedia.org/wiki/List_of_United_States_FIPS_codes_by_county
* https://earthengine.google.com/
* https://openetdata.org/

USDA

* https://en.wikipedia.org/wiki/United_States_Department_of_Agriculture
* https://en.wikipedia.org/wiki/Risk_Management_Agency
* https://en.wikipedia.org/wiki/Federal_Crop_Insurance_Corporation


### USDA RMA

* https://www.rma.usda.gov/
* https://ftp.rma.usda.gov/

NASS

* https://www.nass.usda.gov/index.php
* https://www.nass.usda.gov/Research_and_Science/
* https://www.nass.usda.gov/Research_and_Science/Cropland/Release/
* https://quickstats.nass.usda.gov/


### Soil Carbon Coalition

* https://soilcarboncoalition.org/
* https://soilcarboncoalition.org/html/RMA_indemnities_1979_2017.html
* https://soilcarboncoalition.org/length-green-1/
* https://soilhealth.app/
* https://soilhealth.app/RMG-Montana/maps/1
* https://github.com/Soil-Carbon-Coalition/soilhealth.production
* https://atlasbiowork.com/
* https://soilcarboncoalition.org/atlasbiowork/
	* a framework or scaffold for a shared intelligence or user interface on landscape function

## Change Log

### 2021-07-21

Data
* New data for 2018-2020 added
* Cropland per county data added
* New combined csv with indemnity plus lat, lon & pop created
* Arable acres per county is added to data set; indemnity per acre is displayed

3D
* Bars set to 12 sides - up from five

Menu
* slider bar added: Scale bar width: $$ per acre
* Text scaled down so no scroll bar

Popup
* Number of acres in county added
* Items reordered
2D bar chart
* Has instant popup
* Hover effects added
* Adds $ per acre

Readme
* links added

### 2021-07-14

* Move folder
* Rename
* Add indemnity by year bar chrt to popup
* Add fips and total indemnity to popup
* Fix bug showing total indemnity not year indemnity in popup
* Update text in menu and popup

### 2021-07-11

* First commit
* Forked from https://github.com/pushme-pullyou/tootoo-2021/tree/main/lib-geo/glc-globe-csv

***

<center title="Hello! Click me to go up to the top" ><a class=aDingbat href=javascript:window.scrollTo(0,0);> ❦ </a></center>
