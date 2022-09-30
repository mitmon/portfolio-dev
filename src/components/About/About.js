// Dependencies
import React, { useRef } from "react";
import FadeIn from 'react-fade-in';
import { useIsVisible } from 'react-is-visible';
import { Typography, Grid, Box, CardMedia } from '@mui/material/';

// Images
import profileImg from '../img/profile-pic-1.png'


const styles = {
    background: {
        backgroundColor:'gray'
    },
    textPrimary: {
      color:'white'
    }
  }

function About(props) {

    const { cardImgURL, cardAltText } = props

    const aboutRef = useRef()
    const isVisible = useIsVisible(aboutRef)

    function getImgMedia(imgURL, imgAltText, numCards) {

        let cardArray = []

        for(let index = 0; index < numCards; index++) {
            cardArray.push(
                <Grid item xs={12} md={4} sx={{ mt : 5}}>                
                    <CardMedia
                        sx={{maxHeight: "256px", maxWidth:'256px'}}
                        component='img'
                        image={imgURL[index]}
                        alt={imgAltText[index]}
                    >
                    </CardMedia>
                </Grid>
            )
        }

        return(
            cardArray
        )
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
                    ref={aboutRef}
                    gutterBottom
                >
                    <Grid item xs={12}>
                        <Box sx={{
                                    bgcolor: 'transparent',
                                    px:12,
                                    height:'100vh'
                                    }}
                                    >
                                <Grid container>
                                    <Grid container item justifyContent='center'>
                                        {/* <Grid item xs={12} md={4} sx={{ mt : 5}}> 
                                            <Typography color={styles.textPrimary} variant='p'>
                                                Hello! My name is Mitch Krafczek and I software developer advance knowledge in canadian agriculture. I am a passionate creator, exploring the potential of web development.  
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4} sx={{ mt : 5}}> 
                                            <Typography color={styles.textPrimary} variant='p'>
                                                Hello! My name is Mitch Krafczek and I software developer advance knowledge in canadian agriculture. I am a passionate creator, exploring the potential of web development.  
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4} sx={{ mt : 5}}> 
                                            <Typography color={styles.textPrimary} variant='p'>
                                                Hello! My name is Mitch Krafczek and I software developer advance knowledge in canadian agriculture. I am a passionate creator, exploring the potential of web development.  
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4} sx={{ mt : 5}}> 
                                            <Typography color={styles.textPrimary} variant='p'>
                                                Hello! My name is Mitch Krafczek and I software developer advance knowledge in canadian agriculture. I am a passionate creator, exploring the potential of web development.  
                                            </Typography>
                                        </Grid> */}
                                        {getImgMedia(cardImgURL, cardAltText,4)}

                                        <Grid item md={4}>
                                            <Box align='center'> 
                                                <CardMedia
                                                        component="img"
                                                        sx={{ width: '256px',
                                                        height: 'auto' }}
                                                        image={profileImg}
                                                        alt="Profile picture of Mitch Krafczek"
                                                        >
                                                </CardMedia>
                                            </Box>
                                        </Grid>
                                        {/* <Grid item xs={12} md={4} sx={{ mt : 5}}> 
                                            <Typography color={styles.textPrimary} variant='p'>
                                                Hello! My name is Mitch Krafczek and I software developer advance knowledge in canadian agriculture. I am a passionate creator, exploring the potential of web development.  
                                            </Typography>
                                        </Grid>
                                        <AboutCardTemplate
                                            cardProps="I'm a University of Waterloo and University of New Brunswick graduate, studying environmental studies, computer science, 3D city modeling, and the effects of future climate change. As I've grown as a developer, I've worked alongside senior researchers and program managers who have raised my standards for whats expected of any research and development project. Apart from the courses included in my degrees, I've taken a number of online courses such as HTML & CSS crash courses, edX Data Science: R, Probability, Visualization, and Basics, and I'm working through Scrimba: The frontend developer career path."
                                        />
                                        <Grid item xs={12} md={6} sx={{ mt : 5}}> 
                                            <Typography color={styles.textPrimary} variant='p'>
                                                
                                            </Typography>
                                        </Grid>
                                        {/* {getImgMedia(cardImgURL, cardAltText)} */}
                                        <Grid item sx={{ mt:5}}>
                                            <Typography color={styles.textPrimary} variant='p'>
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{ mt:5}}>
                                            <Typography color={styles.textPrimary} variant='p'>
                                                My previous work (and schooling!) has been diverse throughout the years. I have had the opportunity to work on a number of projects, fields, and topics. These includes working at the University of Waterloo as a database programmer, Agriculture and Agri-Foods Canada as a GIS technician, University of Guelph as a soil scientist reseracher, Quality Urban Energy Systems of Tomorrow (QUEST) Canada as a GIS technician, Agriculture and Agri-Foods Canada as a database compliler, Independent Consultant as an independent consultant, focused on developing a environmental action plan and a community environmental plan, and Agriculture and Agri-Foods Canada as a soil information specialist. This is just the tip of the iceberg. My knowledge extends to ocean mapping, remote sensing, building and location placement analysis, snow and ice analysis, 3D city modelling, precision agriculture, sustainable energy, solar radiance potential, wind energy potential, and much more. As you will see throughout, I have extensive knowledge, training, and practical experience programming in Bootstrap, CSS, HTML, JavaScript, Python, and R.
                                            </Typography>
                                        </Grid> */}
                                    </Grid>
                                </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </FadeIn>
        )
    }
}

export { About };
