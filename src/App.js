import React, { useState, useRef } from 'react';
import FadeIn from 'react-fade-in';
import { useIsVisible } from 'react-is-visible';
import { Container, Col, Button, Card, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import { Box } from '@mui/system';
import { Typography, Grid, useMediaQuery } from '@mui/material';
import { ProjectCardTemplate } from './components/Projects/ProjectCardTemplate';
import { ExperienceCardTemplate } from './components/Experience/ExperienceCardTemplate';
import projectData from './components/Projects/ProjectData';
import experienceData from './components/Experience/ExperienceData';
import aboutData from './components/About/AboutData';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Page components
import { Navbar } from './components/Navbar'
import { Homepage } from "./components/Homepage";
import { About } from './components/About/About';
import { AboutCardTemplate } from './components/About/AboutCardTemplate';
import { ExperienceDetail } from './components/Experience/ExperienceDetail';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

// Img components
import bgImage from './components/img/bg-img-space.png'

const cardAltText = ['University of Waterloo logo','University of New Brunswick']

const styles = {
  backgroundPrimary: {
    backgroundColor: '#151f27'
  },
  backgroundSecondary: {
    backgroundColor:'#2e3a44'
  },
  backgroundThird: {
    backgroundColor:'#0446f1'
  },
  backgroundAccent: {
    backgroundColor:'#0446f1'
  },
  textPrimary: {
    color:'#eff3f6'
  },
  textAccentLight: {
    color:'#82ccfa'
  },
  textAccentMedium: {
    color:'#0459f1'
  },
  textAccentDark: {
    color:'#0446f1'
  },
}

export default function App() {

  const mediaQuery = useMediaQuery('(min-width:600px)');

  const [ navbarUrl, setNavBarUrl ] = useState({homeUrl:'/'})

  function getAboutCardLayout(cardArray,numCards){

    let array = []

      array.push(
        <AboutCardTemplate
          numCards={numCards}
          aboutData={cardArray}
          buttonColor={styles.backgroundAccent}
          textAccentLight={styles.textAccentLight}
          textAccentMedium={styles.textAccentMedium}
          textAccentDark={styles.textAccentDark}
        />
    )

    return(
      array
    )
  }

  function getExperienceCardLayout(cardArray,numCards){

    let array = []

      array.push(
        <ExperienceCardTemplate
                numCards={numCards}
                expData={cardArray}
                buttonColor={styles.backgroundAccent}
                textAccentLight={styles.textAccentLight}
                textAccentMedium={styles.textAccentMedium}
                textAccentDark={styles.textAccentDark}
            />
      )
    return(
      array
    )
  }

  function getProjectsCardLayout(cardArray,numCards){

    let array = []

      array.push(
        <ProjectCardTemplate
                numCards={numCards}
                projectData={cardArray}
                buttonColor={styles.backgroundAccent}
                textAccentLight={styles.textAccentLight}
                textAccentMedium={styles.textAccentMedium}
                textAccentDark={styles.textAccentDark}
            />
      )
    return(
      array
    )
  }

  function Copyright(props) {
    return (
      <Typography variant="body2" color={styles.textPrimary} align="center" {...props}>
        {'Copyright © '}
          <Typography color={styles.textPrimary} variant='button'>
            Mitch Krafczek
          </Typography>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
                                              
  function AppContainer() {

    const aboutSection = useRef(null)
    const experienceSection = useRef(null)
    const projectsSection = useRef(null)
    const contactSection = useRef(null)

    const pages = ['About', 'Experience', 'Projects', 'Contact'];

    
    return(
      <BrowserRouter>
      <Grid container style={styles.backgroundPrimary} sx={{padding:0, margin:0}}>
            <Grid item xs={12}>
                <Navbar
                  pages={pages}
                  aboutSection={aboutSection}
                  experienceSection={experienceSection}
                  projectsSection={projectsSection}
                  contactSection={contactSection}
                  buttonColor={styles.backgroundAccent}
                >
                </Navbar>
            </Grid>
            <Grid item xs={12}
              sx={{
                px:2,
                py:2,
                mx:2,
                my:2
              }}
            >
              {mediaQuery ?
                  <Homepage
                  textPrimary={styles.textPrimary}
                  buttonColor={styles.backgroundAccent}
                  textAccentLight={styles.textAccentLight}
                  textAccentMedium={styles.textAccentMedium}
                  textAccentDark={styles.textAccentDark}
                  mediaTitleLg='h1'
                  mediaTitleMd='h3'
                  mediaTitleSm='h5'
                  />
                  :
                  <Homepage
                  textPrimary={styles.textPrimary}
                  buttonColor={styles.backgroundAccent}
                  textAccentLight={styles.textAccentLight}
                  textAccentMedium={styles.textAccentMedium}
                  textAccentDark={styles.textAccentDark}
                  mediaTitleLg='h2'
                  mediaTitleMd='h4'
                  mediaTitleSm='h6'
                />
              }
                
            </Grid>
            <Grid item xs={12}
              sx={{
                px:2,
                py:2,
                mx:2,
                my:2
              }}
            >
              {mediaQuery ?
                  <Typography ref={aboutSection} sx={{
                    }}
                    variant='h1' 
                    style={styles.textAccentMedium}>
                    1.
                      <Typography 
                        nowrap
                        variant='h1'
                        style={styles.textPrimary}
                      >
                        About me
                      </Typography> 
                  </Typography> 
                  :
                  <Typography ref={aboutSection} sx={{
                  }}
                  variant='h2' 
                  style={styles.textAccentMedium}>
                    1.
                    <Typography 
                      nowrap
                      variant='h2'
                      style={styles.textPrimary}
                    >
                      About me
                    </Typography> 
                </Typography> 
                }
            </Grid>
            <Grid item xs={12}>
              {getAboutCardLayout(aboutData, 4)}
            </Grid>
            <Grid item xs={12}
              sx={{
                px:2,
                py:2,
                mx:2,
                my:2
              }}
            >
              {mediaQuery ?
                <Typography ref={experienceSection} sx={{
                    }}
                    variant='h1' 
                    style={styles.textAccentMedium}>
                    2.
                      <Typography 
                        nowrap
                        variant='h1'
                        style={styles.textPrimary}
                      >
                        Experience
                      </Typography> 
                  </Typography> 
                  :
                  <Typography ref={experienceSection} sx={{
                  }}
                  variant='h2' 
                  style={styles.textAccentMedium}>
                  2.
                    <Typography 
                      nowrap
                      variant='h2'
                      style={styles.textPrimary}
                    >
                      Experience
                    </Typography> 
                </Typography> 
              }
            </Grid>
            <Grid item xs={12}
              sx={{
                px:2,
                py:2,
                mx:2,
                my:2
              }}
            >
              <Typography sx={{
                              bgcolor: 'transparent',
                          }}
                          variant='p' 
                          style={styles.textPrimary}
                          >
                <ExperienceDetail/>
              </Typography>
            </Grid>
            <Grid item xs={12}
            >
              <Grid container
              >
                {getExperienceCardLayout(experienceData,4)}
              </Grid>
            </Grid>
            <Grid item xs={12}
              sx={{
                px:2,
                py:2,
                mx:2,
                my:2
              }}
            >
              {mediaQuery ?
                <Typography ref={projectsSection} sx={{
                    }}
                    variant='h1' 
                    style={styles.textAccentMedium}>
                    3.
                      <Typography 
                        nowrap
                        variant='h1'
                        style={styles.textPrimary}
                      >
                        Projects
                      </Typography> 
                  </Typography> 
                  :
                  <Typography ref={projectsSection} sx={{
                  }}
                  variant='h2' 
                  style={styles.textAccentMedium}>
                  3.
                    <Typography 
                      nowrap
                      variant='h2'
                      style={styles.textPrimary}
                    >
                      Projects
                    </Typography> 
                </Typography> 
              }
            </Grid>
            <Grid item xs={12}>
              <Grid container
              >
                {getProjectsCardLayout(projectData,4)}
              </Grid>
            </Grid>
            <Grid item xs={12}
              sx={{
                px:2,
                py:2,
                mx:2,
                my:2
              }}
            >
              {mediaQuery ?
                <Typography ref={contactSection} sx={{
                    }}
                    variant='h1' 
                    style={styles.textAccentMedium}>
                    4.
                      <Typography 
                        nowrap
                        variant='h1'
                        style={styles.textPrimary}
                      >
                        Contact
                      </Typography> 
                  </Typography> 
                  :
                  <Typography ref={contactSection} sx={{
                  }}
                  variant='h2' 
                  style={styles.textAccentMedium}>
                  4.
                    <Typography 
                      nowrap
                      variant='h2'
                      style={styles.textPrimary}
                    >
                      Contact
                    </Typography> 
                </Typography> 
              }
            </Grid>
            <Grid item xs={12}>
              <Contact
                textPrimary={styles.textPrimary}
                buttonColor={styles.backgroundAccent}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:10}}>
              <Grid container sx={{justifyContent:'space-evenly', my:3}}>
                <Grid item>
                  <a href="#" target="_blank">
                    <img src={require("./components/img/company-logos/twitter-logo/Twitter logo/PNG/2021 Twitter logo - white.png")} alt="Twitter logo" style={{maxHeight:'32px'}}/>
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://www.linkedin.com/in/mitch-krafczek-701088a7/" target="_blank">
                      <img src={require("./components/img/company-logos/LinkedIn-Logos/LI-In-Bug.png")} alt="Linkedin logo" style={{maxHeight:'32px'}}/>
                  </a>
                </Grid>
                <Grid item>
                  <a href="#" target="_blank">
                      <img src={require("./components/img/company-logos/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png")} alt="Github logo" style={{maxHeight:'32px'}}/>
                  </a>
                </Grid>
              </Grid>
              <Grid container sx={{justifyContent:'space-evenly', mb:3}}>
                <Grid item> 
                  <Box sx={{ bgcolor: 'background.paper', bottom: 0}} component="footer">
                      <Typography
                      variant="subtitle1"
                      align="center"
                      color={styles.textPrimary}
                      component="p"
                      >
                        Discover how I can help achieve your goals.
                      </Typography>
                      <Copyright />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
      </Grid>
        </BrowserRouter>
    )
  }

  return(
    <AppContainer/>
  )

}

