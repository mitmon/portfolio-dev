import React, { useRef } from 'react';
import FadeIn from 'react-fade-in';
import { useIsVisible } from 'react-is-visible';
import { Card, CardActions, CardContent, Grid, Button, Typography, CardMedia } from '@mui/material/';

// Dependencies
import { ProjectCardPopupTemplate } from './ProjectCardPopupTemplate';

function ProjectCardTemplate(props) {

    const { numCards, projectData, buttonColor, textPrimary, textAccentLight, textAccentMedium, textAccentDark } = props

    const projectRef = useRef()
    const isVisible = useIsVisible(projectRef)

    function getProjectCards(cardArray) {
        
        let array = []


        for (let index = 0; index < numCards && index < cardArray.length; index++) {

            array.push(
                <Grid item xs={12} md={6}> 
                    <Card sx={{
                        bgcolor: 'transparent',
                        backdropFilter: "blur(5px)",
                        px:2,
                        py:2,
                        mx:2,
                        my:2
                        }} elevation={3}>
                    <ProjectCardPopupTemplate
                        key={cardArray[index].id}
                        cardImgURL={cardArray[index].cardImgURL}
                        cardAltText={cardArray[index].cardAltText}
                        cardTitle={cardArray[index].cardTitle}
                        cardCategory={cardArray[index].cardCategory} 
                        cardDesc={cardArray[index].cardDesc}
                        dialogTitle={cardArray[index].dialogTitle}
                        dialogSubtitle={cardArray[index].dialogSubtitle}
                        dialogContent={cardArray[index].dialogContent}
                        portalLink={cardArray[index].portalLink}
                        stack={cardArray[index].stack}
                        buttonColor={buttonColor}
                        textPrimary={textPrimary}
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
                    ref={projectRef}
                >
                    {getProjectCards(projectData)}
                </Grid>
            </FadeIn>
        )
    }
}

export { ProjectCardTemplate };