// Dependencies
import React, { useRef } from "react";
import FadeIn from 'react-fade-in';
import { useIsVisible } from 'react-is-visible';
import { Container, Stack, Typography, Card, CardActions, CardContent, Button, Grid, Box, CardMedia, Paper } from '@mui/material/';


const styles = {
    textPrimary: {
      color:'white'
    }
  }

function ExperienceDetail() {


    const expRef = useRef()
    const isVisible = useIsVisible(expRef)

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

    if(isVisible){
        return(
            <div></div>
        )
    } else {
        return(
            <FadeIn 
                delay='500'
                transitionDuration='1000'
            >
                <Grid container
                        ref={expRef}
                        gutterBottom
                    >
                    <Grid item xs={12}>
                        <Box sx={{
                                    bgcolor: 'transparent'
                                    }} 
                                    gutterBottom
                                >
                                <Grid container>
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
                                        <Grid item sx={{ mt:5}}>
                                            <Typography color={styles.textPrimary} variant='p'>
                                                Check out what I have been up to below!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </FadeIn>
        )
    }
}

export { ExperienceDetail };
