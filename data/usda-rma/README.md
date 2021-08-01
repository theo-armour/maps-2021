# [![](https://theo-armour.github.io/maps-2021/lib/assets/icons/mark-github.svg )](https://github.com/theo-armour/maps-2021/ "Source code on GitHub" ) [Maps 2021]( https://theo-armour.github.io/maps-2021/ "Home page" ) / [USDA Risk Management Agency Read Me]( https://theo-armour.github.io/maps-2021/#/data/usda-rma/README.md)


<!--
<div class=iframe-resize ><iframe src=https://theo-armour.github.io/maps-2021/ data/usda-rma/ height=100% width=100% ></iframe></div>
_"USDA Risk Management Agency" in a resizable window. One finger to rotate. Two to zoom._


### Full Screen: [USDA Risk Management Agency]( https://theo-armour.github.io/maps-2021/data/usda-rma/ )
-->


## Concept

* Download RMA sample data files from GitHub Page server using XMLHttpRequest. Files are typically4MB ZIP files.
* Decompress the files usin JSZip.js. Uncompressed files are typically 38 MB with over 125,000 lines of CSV-type data with 30 fields
* Parse the data into an array of arrays in JSON format
* Report file size, number of lines, time to load
* Display the first 30 lines of records

At run time, you can

* Click on a list of years to load, parse and display its data
Sample data files from here:
* Click on a list of all the field headings to display the data for that field
	* If the data is categorical (FIPs code of name of a state), find al the unique values and list their count
	* if the data is tabular * number of acres or size of indemnity, list the sum, average, minumn and maximum of all values
* Click a button to view a list of all the counties showing county name, state, FIPs code, acres planted, total liability and total indemnity.



* https://www.rma.usda.gov/en/Information-Tools/Summary-of-Business/Cause-of-Loss

><b>Cause of Loss Historical Data Files</b>
>Summarized participation information broken down by the causes of loss. Each link contains a ZIP file with compressed data containing pipe (|) delimited flat-files that can be imported into any standard spreadsheet and/or database for further analysis. Record description file located in each subfolder.

## To Do / Wish List

* It would be nice to be able to access the files directly off the USDA server

## Issues


## Links of Interest


## Change Log


### 2021-08-01

* Add 5 years more data
* First commit readme


***

<center title="Hello! Click me to go up to the top" ><a class=aDingbat href=javascript:window.scrollTo(0,0);> ❦ </a></center>
