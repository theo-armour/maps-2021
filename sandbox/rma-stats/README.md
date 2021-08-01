# [![](https://theo-armour.github.io/maps-2021/lib/assets/icons/mark-github.svg )](https://github.com/theo-armour/maps-2021/tree/main/sandbox/rma-stats "Source code on GitHub" ) [Maps 2021]( https://theo-armour.github.io/maps-2021/ "Home page" ) / [USDA Risk Management Agency Historical Data Files Read Me]( https://theo-armour.github.io/maps-2021/#sandbox/rma-stats/README.md)


<!--@@@
<div class=iframe-resize ><iframe src=https://theo-armour.github.io/maps-2021/sandbox/rma-stats/ height=100% width=100% ></iframe></div>
_"RMA Stats" in a resizable window. One finger to rotate. Two to zoom._
@@@-->


## Full Screen: [RMA Stats]( https://theo-armour.github.io/maps-2021/sandbox/rma-stats/ )


## Concept


Load stats from USDA RMA

* https://www.rma.usda.gov/
* https://ftp.rma.usda.gov/
* https://www.rma.usda.gov/Information-Tools/Summary-of-Business/State-County-Crop-Summary-of-Business

This folder contains sample data files from here:

* https://www.rma.usda.gov/en/Information-Tools/Summary-of-Business/Cause-of-Loss

><b>Cause of Loss Historical Data Files</b>
>Summarized participation information broken down by the causes of loss. Each link contains a ZIP file with compressed data containing pipe (|) delimited flat-files that can be imported into any standard spreadsheet and/or database for further analysis. Record description file located in each subfolder.

### Names

https://www.rma.usda.gov/-/media/RMA/Cause-Of-Loss/Summary-of-Business-with-Month-of-Loss/colsommonth_allyears-pdf.ashx?la=en

Following variable created using data taken from "Cause of Loss Information – Summary of Business Data"

``` JavaScript

const elements = [
[ "Commodity Year Identifier", "The identifier that represents the year in which the crop commodity is normally harvested and indicates the policy year for which coverage was provided"],
[ "State Code", "The FIPS code that denotes the state in which the insured farm is located"],
[ "State Abbreviation", "USPS state abbreviation"],
[ "County Code", "The FIPS code that denotes the county in which the insured farm is located"],
[ "County Name","Name of the county"],
[ "Commodity Code","The Risk Management Agency (RMA) code that denotes the crop/commodity for which the policy is issued"],
[ "Commodity Name","Name of the crop/commodity""],
[ "Insurance Plan Code", "Code that denotes the type of insurance coverage is selected for the insured crop (e.g.APH, Revenue, Dollar, etc.)"],
[ "Insurance Plan Name Abbreviation", "Abbreviation of the Insurance Plan Name"],
[ "Average Category", "Code that identifies the category of coverage elected :A = Buyup ; C = CAT ; E = Existing Coverage Policy ; L = Limited Coverage""],
[ "Stage Code", "See Stage Code Listing"],
[ "Cause of Loss Code", "The RMA code tat identifies the peril that caused the loss on the crop"],
[ "Cause of Loss Description", "Description of the cause of loss"],
[ "Month of Loss", "Month when the loss occurred"],
[ "Month of Loss Name", "Name of the month when the loss occurred"],
[ "Year of Loss", "Year the loss occurred"],
[ "Policies Earning Premium", "Count of the number of crop policies with premium NOTE : Not available for years prior to 1989"],
[ "Policies Indemnified", "Count of the number of crop policies with a reported loss"],
[ "Net Planted Acres", "Number of acres planted to the crop after the insured’s share is applied"],
[ "Net Endorsed Acres", "Number of acres insured under an endorsement (e.g. SCO, STAX, Margin Protction)"],
[ "Liability", "The maximum dollar amount of insurance for the crop"],
[ "Total Premium", "Premium before application of any subsidies. In general, the base premium rates times liability (Also called the base premium)"],
[ "Producer Paid Premium", "Premium paid by the producer"],
[ "Subsidy", "Amount of subsidized premium"],
[ "State/Private Subsidy", "Subsidy provided by a state or private entity"],
[ "Additional Subsidy", "An additional subsidy from a program or other process. 2021 Additional subsidy represents Pandemic Cover Crop Program amount"],
[ "EFA Premium Discount", ""],
[ "Net Determined Acres", "Number of acres loss due to damage after the insured’s share is applied"],
[ "Indemnity Amount", "The total amount of the loss for the designated peril"],
[ "Loss Ratio", "Calculated: Indemnity / Total Premium"],
]

```

## To Do / Wish List

* 2021-08-01 ~ Present data by states then county
* 2021-08-01 ~ Use menu or display tag to show and hide data
* 2021-08-01 ~ Identify major crops by country, state & county
* 2021-08-01 ~ Identify major losses by country, state & county

## Issues


## Links of Interest


## Change Log

### 2021-08-01

* Good refactor
* Update readme
* Add: Display county data totals

### 2021-07-30

* Data collection beginning to work
* First commit this read me


***

<center title="Hello! Click me to go up to the top" ><a class=aDingbat href=javascript:window.scrollTo(0,0);> ❦ </a></center>
