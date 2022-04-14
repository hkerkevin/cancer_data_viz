# Project video transcript

Topic: City of Hope Precision Medicine Dashboard 

Team name: Data Docs

Video link: https://youtu.be/Tzxxbylo1jE

Team members:

- Hanke Heun-Johnson (heunjohn@usc.edu)
- Carlin Cherry (ccherry@usc.edu)
- Kevin Tsang (kktsang@usc.edu)

## Introduction (0-30s)

Hello my name is Kevin Tsang and I am presenting on behalf of Team Data Docs. Here is a demo of the dashboard we made for the City of Hope Precision Medicine department to assist them with clinical research and management. This dashboard contains exploratory graphs by tumor and stage, demographics, and geographic location.

## Content
Tumor and Stage

Tumor and Stage tab focuses on displaying aggregated tumor information. Clinical researchers built a use-case for quick, at-a-glance summaries related to tumor size, shape, and cancer stage. We accordingly chose bar charts to display tumor and stage information. 

First, we have some descriptive statistics at the top for a quick glance . Below we have a series of D3 charts that are interactive and shows important information such as cancer stage cases, tumor area, smoothness, radius, etc. These data are all organized by tumor stage, from 1 to 4. When hover over the bars, we see the patient count for that stage in the tooltip. These are important information for researchers to take a deeper dive in studying the effect of stage to a tumor.

Demographics

For demographics, we focused on displaying data that shows the ancestral differences in tumor profiles. Often times, clinical researchers are interested in seeing the ancestral differences in tumor profiles which lead to more in-depth genome wide association studies. We chose to use the alluvial diagram to show the proportion of stage in relation to each race and ethnicity group and then to show the break down of benign and malignant cases. Here we have separated the tumor stage using a gradient of green from ColorBrewer and chose different colors for each race so that viewers can follow easily. The data sample is also summarized by a D3 animated bar chart, where one can see the total diagnosed case break down by race and ethnicity. There are three buttons on them for users to sort each bar by value, descending and ascending, or by name.

Geography

Our geography tab shows the information that is beneficial for City of Hope management in terms of geographical reach. First off, we have a Mapbox chart of the Greater Los Angeles region that shows the geographical distribution by cancer stage of patients receiving treatment at the hospital. The blue "H" marker shows the location of City of Hope in Duarte and the other markers show where the patients are located and what tumor stage they have. These markers can be filtered by benign or malignant cancers and by hovering over the markers, one can see the actual distance from that point to the hospital. 

Then we have a D3 chloropleth map that shows the cancer death rates per capita in the Greater Los Angeles region. With this information, zip codes with high cancer rates per capita should have higher treatment rates at the hospital; areas with relatively low treatment rates at the hospital could benefit from more outreach efforts.

Lastly we have a bubble chart indicates which zip codes in the area are underrepresented as patients. When hover over each circle, it shows the zipcode and the number of population in it. Any bubbles below the general trend line would benefit from outreach by the hospital in order to better overall survival rate

About Us

In conclusion, each design decision we made had the clinical cancer researcher in mind. We chose to display our data in the most effective way possible for researchers to view and explore their data. We hope that this dashboard helps aid in patient management and leads to clinical or population insights of cancer patients in Los Angeles. 

Pictured on this about us page is our team. We thank you for viewing our dashboard.
