// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import { Container, Stack, Typography, Card, CardActions, CardContent, Button, Grid, Box, CardMedia, Paper } from '@mui/material/';


const styles = {
    textPrimary: {
      color:'white'
    }
  }

function Experience() {

    const expHeader = (headerText) => {


        return(
            <Grid item xs={12} sx={{ mt:5}}>
                <Typography color={styles.textPrimary} variant='h4'>
                    {headerText}
                </Typography>
            </Grid>
        )
    }

    const expEmployer = (employerText) => {


        return(
            <Grid item xs={12} sx={{ mt:3}}>
                <Typography color={styles.textPrimary} variant='h6'>
                    {employerText}
                </Typography>
            </Grid>
        )
    }

    const expProjectTitle = (expProjectTitle) => {


        return(
            <Grid item sx={{ mt:5}}>
                <Typography color={styles.textPrimary} variant='h6'>
                    {expProjectTitle}
                </Typography>
            </Grid>
        )
    }

    const expBody = (bodyText) => {


        return(
            <Grid item sx={{ mt:5}}>
                <Typography color={styles.textPrimary} variant='p'>
                    {bodyText}
                </Typography>
            </Grid>
        )
    }

    const expKeySkills = () => {
        return(
            <Grid item xs={12} sx={{ mt:5}}>
                <Typography sx={{ mt:3}} color={styles.textPrimary} variant='p'>
                    Key skills enhanced:
                </Typography>
            </Grid>
        )
    }

    const expBodyList = (bodyListText) => {

        let listArray = [];

        for (let index = 0; index < bodyListText.length; index++) {
            const element = bodyListText[index];
            
            listArray.push(
                <Grid item xs={12} sx={{ mt:3}}>
                    <Typography color={styles.textPrimary} variant='p'>
                        <li>
                            {element}
                        </li>
                    </Typography>
                </Grid>
            )
        }

        return(listArray)
    }


    return(
        <Grid container
            gutterBottom
        >
            <Grid item xs={12}>
                <Paper sx={{
                                bgcolor: 'transparent',
                                backdropFilter: "blur(5px)",
                                mt:8,
                                pb:8,
                                px:8,
                                mx:8
                            }} elevation={24}>
                        <Grid container>
                            <Grid item sx={{ mt:5}}>
                                <Typography color={styles.textPrimary} variant='h4'>
                                    Experience.
                                </Typography>
                            </Grid>
                            <Grid container item>
                                <Grid item sx={{ mt:5}}>
                                    <Typography color={styles.textPrimary} variant='p'>
                                        My previous work (and schooling!) has been diverse throughout the years. I have had the opportunity to work on a number of projects, fields, and topics. These includes working at the University of Waterloo as a database programmer, Agriculture and Agri-Foods Canada as a GIS technician, University of Guelph as a soil scientist reseracher, Quality Urban Energy Systems of Tomorrow (QUEST) Canada as a GIS technician, Agriculture and Agri-Foods Canada as a database compliler, Independent Consultant as an independent consultant, focused on developing a environmental action plan and a community environmental plan, and Agriculture and Agri-Foods Canada as a soil information specialist. This is just the tip of the iceberg. My knowledge extends to ocean mapping, remote sensing, building and location placement analysis, snow and ice analysis, 3D city modelling, precision agriculture, sustainable energy, solar radiance potential, wind energy potential, and much more. As you will see throughout, I have extensive knowledge, training, and practical experience programming in Bootstrap, CSS, HTML, JavaScript, Python, and R.
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ mt:5}}>
                                    <Typography color={styles.textPrimary} variant='p'>
                                        Solution-driven information specialist with 5+ years of experience and strong JavaScript, Python, R skills. Seeking to deliver resourceful code for research, industry, government policy, and advanced geospatial user interfaces. At Agriculture and Agri-Foods Canada, I have led the successful research and development of a future land suitability rating system and data discovery portal for the ease of access to cutting-edge geospatial tools. Looking to further advance gained geospatial and user interface skills in a role with demanding challenges.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                {expHeader('Soil Information Specialist')}
                                {expEmployer('Agriculture and Agri-Foods Canada | 2020 - Present')}
                                {expProjectTitle('1 // Land Suitability Rating System Developer')}
                                {expBody('Provided object-oriented software design for the determination and modelling of complex land suitability ratings. I developed and customized R packages and user interfaces for the understanding of best farming practices. Reports and technical how-to documents were produced for future client use.')}
                                {expKeySkills()}
                                {expBodyList(['Contributed expertise in the development of products through the software lifecycle, from requirements definition through stakeholder engagements',
                                              'Facilitated customization of systems by encouraging the adoptions of open source, and emerging standard for software application development',
                                              'Organized large qualitative and quantitative datasets for leading edge research',
                                              'Presented initial findings to local farmers, University professors, and government organizations for user experiences and customer feedback',
                                              'Maintained high government standards for security and privacy',
                                              'Leveraged web mapping tools and open-source API’s and packages',
                                              'Used Github for versioning control and multi-user level access to data',
                                ])}
                            </Grid>
                            <Grid container item>
                                {expProjectTitle('2 // Data Discovery Portal Developer')}
                                {expBody('I have been leading the data discovery portal project for the access to seamless information, tools, and spatially distributed data.')}
                                {expKeySkills()}
                                {expBodyList(['Lead the development of a new user interface for the easy dissemination of geospatially derived data',
                                              'Mentored a team of 3 developers for the successful creation of a web map portal',
                                              'Developed and implemented a reporting system for access to geospatial data',
                                              'Researched and programmed advanced scientific tools for implementation into the system',
                                              'Lead and planned stakeholder meetings to receive customers feedback to improve the style, look, and feel of the user experience'
                                ])}
                            </Grid>

                            <Grid container item>
                                {expHeader('Independent Consultant')}
                                {expEmployer('Town of Florenceville-Bristol | 2019 – 2020')}
                                {expProjectTitle('1 // Community Environmental Program Development Manager')}
                                {expBody('After the successful development of the environment action plan for the Town of Florenceville-Bristol, I was invited to continue working with the Town to investigate and research potential programs available to the local community for decreasing greenhouse gas emissions. I acted as the expert, being the contact person, tasked to disseminate information to the public through reports, presentations, and direct question and answering. This plan is be used by the public, local businesses, and government to explore potential community engagements and funding sources to increase sustainability in Florenceville-Bristol.')}
                            </Grid>
                            <Grid container item>
                                {expProjectTitle('2 // Environmental Action Plan Project Manager')}
                                {expBody('I developed and led a project proposal to create a climate action plan for the Town of Florenceville-Bristol, NB. This project proposal was successfully approved for $15,000. I managed a team of 2 where we carried out an assessment on avenues to reduce greenhouse gas emissions in the local community. I better understood the building energy efficiency of each building in the Town. I was the lead contact and liaised closely with community stakeholders to understand their perspectives and determine how to best implement the findings. I held community engagements to receive stakeholder perspective and feedback on the proposed changes and actions. Continuous iterations were implemented as new requirements arose. Prototyping necessary interfaces and software was critical for the successful tracking of GHG emissions. A final report was produced, with recommendations for the local action plan for the Town of Florenceville-Bristol. The town planned for a reduction of 21% of 2017 CO2 emissions by 2025.')}
                                {expKeySkills()}
                                {expBodyList(['Lead the development of a successful contract bid and proposal',
                                              'Acted as the contact between stakeholders, community members and industry partners',
                                              'Lead workshops and community stakeholder engagements to inform and receive feedback about the proposed environmental action plan'
                                ])}
                            </Grid>
                            <Grid container item>
                                {expHeader('Database Compiler')}
                                {expEmployer('Agriculture and Agri-Foods Canada | 2019 – 2019')}
                                {expBody('I created, modified, and produced geodatabases for use by internal clients for increasing productivity and yields for potatoes in New Brunswick. Office 365 was used to track issues, bugs, and changes.')}
                            </Grid>
                            <Grid container item>
                                {expHeader('GIS and Remote Sensing Technician')}
                                {expEmployer('QUEST (Quality Urban Energy Systems of Tomorrow) Canada | 2018 – 2019')}
                                {expBody('Quality Urban Energy Systems and Technology (QUEST) Canada contracted me to collect and produce geodatabases for use in open-source mapping software. I then informed, determined best practice requirements for the implementation of smart energy grids across Charlottetown. I worked alongside government officials and private-sector leaders to aid local authorities in the implementation of on-the-ground solutions. A final report was produced for QUEST Canada outlining the results.')}
                            </Grid>
                            <Grid container item>
                                {expHeader('Soil Scientist Researcher')}
                                {expEmployer('University of Guelph | 2017 – 2018')}
                                {expBody('I worked under Dr. Aaron Berg, the Canadian research chair in hydrology and remote sensing, to investigate, and compare the effects of using UAVSAR data versus RADARSAT-2 data for upscaling techniques over farms in Manitoba. This research will be used to increase productivity across farm fields in Canada. Microwave data was used to identify agricultural regions across Manitoba experiencing risk due to extreme soil moisture conditions (flood and drought). I worked with and programmed a random forest tree using python and ArcPy with ArcGIS tools such as ArcGIS Desktop and ArcGIS Pro for a seamless integration between the data and the results. Final findings were prepared and presented at the 2nd International Conference on Recent Trends in Environmental Science and Engineering (RTESE18).')}
                            </Grid>
                            <Grid container item>
                                {expHeader('GIS and Remote Sensing Technician')}
                                {expEmployer('Agriculture and Agri-Foods Canada | 2016 – 2017')}
                                {expBody('As part of a research team at Agriculture and Agri-foods Canada, managed by Dr. Heather McNairn, I was tasked with assisting in researching new methods to measure changes in field soil moisture values. Maps were produced using ESRI’s ArcGIS and ArcPro software to edit, process and maintain databases for NASA’s SMAP satellite. Metadata record keeping was produced for the data using ArcGIS Desktop and ArcPro tools. This data is being used to monitor the effects on agricultural production and crop yields predictions. We received an AAFC-AAC Instant Award for exceptional work and the development of future partnership between multiple diverse industrial and academic institutions. A final report was produced to guide informed farm-operation decisions based on changing weather, water and climate conditions.')}
                                {expKeySkills()}
                                {expBodyList(['I was part of the 18-day SMAPVEX16 validation field campaign where I was tasked with aiding in the collecting, training and organizing of the use of handheld Nikon cameras and RADAR devices',
                                              'These devices were used to assess local leaf area indexes as well as SAR reflectance values. Training sessions participants included multiple organizations such as NASA, University of Guelph, University of Manitoba, and the Université de Sherbrooke',
                                              'Other field duties included the collection of soil cores, plant samples, and soil moisture values'
                                ])}
                            </Grid>
                            <Grid container item>
                                {expHeader('Laser Database Programmer')}
                                {expEmployer('University of Waterloo | 2015 – 2016')}
                                {expBody('I created and implemented an automatic system for recording and maintaining laser inventories for the University of Waterloo. As part of the University Safety Office, I regularly met with professor, students and staff to address concerns about laser safety, practice, storage and maintenance. A final report was produced on the importance of maintaining an up-to-date inventory of lasers for workplace health and safety procedures.')}
                            </Grid>
                        </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export { Experience };
