import React, { useRef } from "react";
import FadeIn from 'react-fade-in';
import { useIsVisible } from 'react-is-visible';
import { Typography, Grid, Box, CardMedia, Card } from '@mui/material/';
import { AboutCardPopup } from "./AboutCardPopup";

// Images
import profileImg from '../img/profile-pic-1.png'


function AboutCardTemplate(props){

    const { numCards, aboutData, buttonColor, textAccentLight, textAccentMedium, textAccentDark } = props

    const aboutRef = useRef()
    const isVisible = useIsVisible(aboutRef)

    function getAboutCards(cardArray, numCards, startNum) {

        let array = []

        for (let index = 0; index < numCards && index < cardArray.length; index++) {

            array.push(
                <Grid item xs={12} md={4}> 
                    <Card 
                        sx={{
                            bgcolor: 'transparent',
                            backdropFilter: "blur(5px)",
                            px:2,
                            py:2,
                            mx:2,
                            my:2
                        }} elevation={3}>
                        <AboutCardPopup
                            key={cardArray[index].id}
                            cardImgURL={cardArray[index].cardImgURL}
                            cardAltText={cardArray[index].cardAltText}
                            dialogTitle={cardArray[index].dialogTitle}
                            dialogSubtitle={cardArray[index].dialogSubtitle}
                            dialogYears={cardArray[index].dialogYears}
                            dialogContent={cardArray[index].dialogContent}
                            portalLink={cardArray[index].portalLink}
                            stack={cardArray[index].stack}
                            buttonColor={buttonColor}
                            textAccentLight={textAccentLight}
                            textAccentMedium={textAccentMedium}
                            textAccentDark={textAccentDark} 
                        />
                    </Card>
                </Grid>
            )
        }

        return(
            array
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
                >
                    {getAboutCards(aboutData, numCards)}
                    <Grid item xs={4}>
                        <Box
                            align="center"
                            justifyContent="center"
                            sx={{
                                py:4,
                            }}
                        >
                            <CardMedia
                                    component="img"
                                    sx={{maxWidth:'256px', height:'auto'}}
                                    image={profileImg}
                                    alt="Profile picture of Mitch Krafczek"
                                    >
                            </CardMedia>
                        </Box>
                    </Grid>
                    {getAboutCards(aboutData.slice(4,9), numCards)}
                </Grid>
            </FadeIn>
        )
    }
}

export { AboutCardTemplate };