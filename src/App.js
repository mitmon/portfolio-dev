import React, { useState, useRef } from 'react';
import FadeIn from 'react-fade-in';
import { useIsVisible } from 'react-is-visible';
import { Container, Col, Button, Card, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import { Box } from '@mui/system';
import { Typography, Grid } from '@mui/material';
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
    // backgroundImage: `url(${bgImage})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover'
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
    // return(
    //   cardArray.map(cardData => {
    //     return(
    //       <ExperienceCardTemplate
    //         key={cardData.id}
    //         id={cardData.id}
    //         cardTitle={cardData.cardTitle}
    //         cardImgURL={cardData.cardImgURL}
    //         cardAltText={cardData.cardAltText}
    //         cardCategory={cardData.cardCategory}
    //         cardDesc={cardData.cardDesc}
    //         dialogTitle={cardData.dialogTitle}
    //         dialogSubtitle={cardData.dialogSubtitle}
    //         dialogYears={cardData.dialogYears}
    //         dialogContent={cardData.dialogContent}
    //         portalLink={cardData.portalLink}
    //         stack={cardData.stack}
    //         buttonColor={styles.backgroundAccent}
    //         textAccentLight={styles.textAccentLight}
    //         textAccentMedium={styles.textAccentMedium}
    //         textAccentDark={styles.textAccentDark}
    //       />
    //     )
    //   })
    // )
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
    // return(
    //   cardArray.map(cardData => {
    //     return(
    //       <ProjectCardTemplate
    //         numCards={4}
    //         projectData={projectData}
    //         buttonColor={styles.backgroundAccent}
    //         textAccentLight={styles.textAccentLight}
    //         textAccentMedium={styles.textAccentMedium}
    //         textAccentDark={styles.textAccentDark}
    //         // key={cardData.id}
    //         // id={cardData.id}
    //         // cardTitle={cardData.cardTitle}
    //         // cardImgURL={cardData.cardImgURL}
    //         // cardAltText={cardData.cardAltText}
    //         // cardCategory={cardData.cardCategory}
    //         // cardDesc={cardData.cardDesc}
    //         // dialogTitle={cardData.dialogTitle}
    //         // dialogSubtitle={cardData.dialogSubtitle}
    //         // dialogContent={cardData.dialogContent}
    //         // portalLink={cardData.portalLink}
    //         // stack={cardData.stack}
    //         // textPrimary={styles.textPrimary}
    //         // buttonColor={styles.backgroundAccent}
    //         // textAccentLight={styles.textAccentLight}
    //         // textAccentMedium={styles.textAccentMedium}
    //         // textAccentDark={styles.textAccentDark}
    //     />
    //     )
    //   })
    // )
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
      <Container>
        <BrowserRouter>
          <Paper style={styles.backgroundPrimary}>
            <Row className='p-0'>
                <Col className='p-0'>
                  <Navbar
                    pages={pages}
                    aboutSection={aboutSection}
                    experienceSection={experienceSection}
                    projectsSection={projectsSection}
                    contactSection={contactSection}
                    buttonColor={styles.backgroundAccent}
                  >
                  </Navbar>
                </Col>
            </Row>
            <Row md='auto'>
              <Col md={12}>
                <Homepage
                  textPrimary={styles.textPrimary}
                  buttonColor={styles.backgroundAccent}
                  textAccentLight={styles.textAccentLight}
                  textAccentMedium={styles.textAccentMedium}
                  textAccentDark={styles.textAccentDark}
                />
              </Col>
            </Row>
            <Row md='auto' style={styles.backgroundPrimary}>
              <Col md={12}>
                <Typography ref={aboutSection} sx={{
                                px:12,
                            }}
                            variant='h1' 
                            style={styles.textAccentMedium}>
                  1. 
                    <Typography 
                      variant='h1'
                      style={styles.textPrimary}
                    >About me</Typography>
                </Typography>
              </Col>
            </Row>
            <Row md='auto' style={styles.backgroundPrimary}>
              <Col md={12}>
                {getAboutCardLayout(aboutData, 4)}
              </Col>
            </Row>
            {/* <Row md='auto' style={styles.backgroundPrimary}>
              <Col md={12}>
                <About
                  cardImgURL={aboutCardImgURL}
                  cardAltText={cardAltText}
                  textAccentLight={styles.textAccentLight}
                  textAccentMedium={styles.textAccentMedium}
                  textAccentDark={styles.textAccentDark}
                />
              </Col>
            </Row> */}
            <Row md='auto'>
              <Col md={12}>
                <Typography ref={experienceSection} sx={{
                                px:12,
                            }}
                            variant='h1' 
                            style={styles.textAccentMedium}>
                  2. 
                    <Typography 
                      variant='h1'
                      style={styles.textPrimary}
                    >
                      Experience
                    </Typography>                      
                </Typography>
                {/* <Typography ref={experienceSection} sx={{
                                bgcolor: 'transparent',
                                pt:'10vh',
                                px:12,
                            }}
                            variant='h1' 
                            style={styles.textPrimary}>
                  Experience
                </Typography> */}
              </Col>
            </Row>
            <Row md='auto'>
              <Col md={12}>
                <Typography sx={{
                                bgcolor: 'transparent',
                                px:12
                            }}
                            variant='p' 
                            style={styles.textPrimary}
                            >
                  <ExperienceDetail/>
                </Typography>
              </Col>
            </Row>
            <Row md='auto'>
              <Col md={12}>
                <Grid container spacing={1}
                >
                  {getExperienceCardLayout(experienceData,4)}
                </Grid>
              </Col>
            </Row>
            <Row style={styles.backgroundPrimary}>
              <Col>
                <Typography ref={projectsSection} sx={{
                                px:12,
                            }}
                            variant='h1' 
                            style={styles.textAccentMedium}
                            >
                  3. 
                    <Typography 
                      variant='h1'
                      style={styles.textPrimary}
                      gutterBottom
                    >Projects</Typography>
                </Typography>
                {/* <Typography ref={projectsSection} sx={{
                                bgcolor: 'transparent',
                                backdropFilter: "blur(5px)",
                                mt:8,
                                px:8,
                                py:4,
                                mx:8
                            }}
                            variant='h1' 
                            style={styles.textPrimary}
                            >
                  Projects
                </Typography> */}
              </Col>
            </Row>
            <Row style={styles.backgroundPrimary}>
              <Grid container spacing={1}
              >
                {getProjectsCardLayout(projectData,4)}
              </Grid>
            </Row>
            <Row>
              <Col>
                <Typography ref={contactSection} sx={{
                                px:12,
                            }}
                            variant='h1' 
                            style={styles.textAccentMedium}
                            >
                  4. 
                    <Typography 
                      variant='h1'
                      style={styles.textPrimary}
                      gutterBottom
                    >Contact</Typography>
                </Typography>
                {/* <Typography ref={contactSection} sx={{
                                bgcolor: 'transparent',
                                backdropFilter: "blur(5px)",
                                mt:8,
                                px:8,
                                mx:8
                            }}
                            variant='h1' 
                            style={styles.textPrimary}>
                  Contact
                </Typography> */}
              </Col>
            </Row>
            <Row>
              <Contact
                textPrimary={styles.textPrimary}
                buttonColor={styles.backgroundAccent}
              />
            </Row>
            <Row>
              <Grid container sx={{py: 6, justifyContent:'space-evenly'}}>
                <Grid item>
                  <a href="#" target="_blank">
                    <img src={require("./components/img/company-logos/twitter-logo/Twitter logo/PNG/2021 Twitter logo - white.png")} alt="Twitter logo" style={{maxHeight:'64px'}}/>
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://www.linkedin.com/in/mitch-krafczek-701088a7/" target="_blank">
                      <img src={require("./components/img/company-logos/LinkedIn-Logos/LI-In-Bug.png")} alt="Linkedin logo" style={{maxHeight:'64px'}}/>
                  </a>
                </Grid>
                <Grid item>
                  <a href="#" target="_blank">
                      <img src={require("./components/img/company-logos/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png")} alt="Github logo" style={{maxHeight:'64px'}}/>
                  </a>
                </Grid>
              </Grid>
              <Grid container sx={{pb: 6, justifyContent:'space-evenly'}}>
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
            </Row>
          </Paper>
        </BrowserRouter>
      </Container>
    )
  }

  return(
    <AppContainer/>
  )

}

