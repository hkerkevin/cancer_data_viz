# Final presentation transcript

Topic: City of Hope Precision Medicine Dashboard 

Team name: Data Docs

Team members:

- Carlin Cherry <ccherry@usc.edu>
- Hanke Heun-Johnson <heunjohn@usc.edu> 
- Kevin Tsang <kktsang@usc.edu>

---

## Slide 0
Cover Slide

My name is Carlin Cherry, and I am presenting on behalf of Team Data Docs. Today I will discuss our data visualization dashboard for City of Hope.

## Slide 1
Intro 

Our team aimed to build an internal dashboard for City of Hope Medical Center. City of Hope is a hospital in Los Angeles specializing in cancer research and treatment.  We aimed to build a dashboard with information about patients that come to the hospital for cancer diagnostics or treatment. During this presentation, I will discuss our team background, dashboard's intended purpose, existing dashboards and how ours is unique, our research and design process, and conclude with what our team would have done differently.

## Slide 2
Team Background

Our team has three members. Our other team members are Hanke Heun-Johnson and Kevin Tsang. Hanke, Kevin, and I formed a team because in addition to school, we each also work full-time. I work as a software engineer, Hanke works as a Senior Quantitative Analyst, and Kevin works as a Clinical Data Analyst at City of Hope. To aid in City of Hope's research efforts, we created a dashboard with anonymized demographic, geographic, and medical details of their cancer patients. 

## Slide 3
Project Background

City of Hope does not have a summarization method to bring their vast data into a bite-sized scope. Some public agencies, like the CDC, have dashboards that display cancer statistics aggregated at the national level. Generally, hospital-specific data dashboards are not publicly accessible. We aimed to build a dashboard specifically for the City of Hope Los Angeles cancer patient data. The intended end users will be clinicians and hospital management staff who can use the dashboard to make decisions about staffing, diagnostic needs, and outreach efforts.

## Slide 4
Data and Design

The design was first and foremost guided by the needs of clinicians and researchers: during consultations they requested visualizations of physiological tumor characteristics by tumor stage, malignancy status by patient demographics, and the geolocation of patients in relation to the hospital. The dashboard navigation follows a bottom up approach from physiological tumor characteristics, to demographics, to the geographical reach of the hospital.

## Slide 5
Tumor Data

First I will discuss our tumor data visualizations. As requested we chose to mostly use familiar charts to display tumor data. Clinical researchers at City of Hope built a use-case for quick, at-a-glance summaries related to tumor size, shape, and cancer stage. I created the quantitative data visualizations. I also served as the Lead Systems Engineer on the project, customized the dashboard, and served as technical support for visualization integration. I also was the lead for the project presentation.

## Slide 6
Demographic Data

Next, I will discuss our demographic data visualizations. Often times, clinical researchers are interested in seeing the ancestral differences in tumor profiles which lead to more in-depth genome wide association studies. Thus, we chose to use the alluvial diagram, a type of sankey diagram, pictured here, and interactive bar charts. Kevin created the demographic data visualizations, served as the Implementation Manager coordinating with City of Hope on their desires for the dashboard, and was the lead for our project video.

## Slide 7
Geographic Data

Third, I will discuss our geographic data visualization. We used Mapbox to display patient distance from City of Hope's Hospital, and we used d3 to display the number of cases and deaths per zip code. Hanke created the geographic data visualizations. Hanke served as Project Manager, and in her role was a liason to the professor and TAs for questions. She was also responsible for creating and managing deadlines. Hanke also was the lead for the project paper.

## Slide 8
Tools used

For initial design, we used a wireframe tool called Miro. For communication we used Slack and GitHub Project management. For site design we used an open source dashboard template which enabled us customize, rather than create, the backbone website on which we wanted to display our visualizations. We ColorBrewer to pick colorblind-safe colors. Our site is built using Node.js, React, and Bootstrap. We used d3 to create each of the following types of charts: responsive, intearctive, animated transition, layout, and a map. We also used Mapbox to customize a map.

## Slide 9
What we would do differently

Our largest challenge involved working with sensitive patient data. The City of Hope Dataset contained identifying patient information and we would have had to receive IRB approval for use. We had to replace their data with publically-available Kaggle data. We wish we had started the IRB approval process sooner so our data could be out-of-the-box specific to City of Hope. Future dashboard efforts include integrating the data specific to City of Hope.

## Slide 10
Rationale for layout and intended use

Each design decision we made had the clinical researcher at City of Hope in mind. We chose to display our data in the most effective way possible for cancer researchers to quickly view and explore their data. Prior to this dashboard, City of Hope researchers had no way to quickly view or explore their data. We hope that this dashboard helps aid in patient management and leads to clinical or population insights of cancer patients in Los Angeles. 
