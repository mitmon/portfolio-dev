import React, { useRef } from "react";
import FadeIn from 'react-fade-in';
import { useIsVisible } from 'react-is-visible';
import { Card, CardActions, CardContent, Grid, Typography, CardMedia } from '@mui/material/';

// Dependencies
import { ExperienceCardPopupTemplate } from './ExperienceCardPopupTemplate';

function ExperienceCardTemplate(props) {

    const { numCards, expData, buttonColor, textPrimary, textAccentLight, textAccentMedium, textAccentDark } = props

    const expRef = useRef()
    const isVisible = useIsVisible(expRef)

    function getExperienceCards(cardArray) {
        let array = []

        for (let index = 0; index < numCards && index < cardArray.length; index++) {

            array.push(
                <Grid item xs={12} md={6} spacing={2}> 
                    <Card 
                        sx={{
                            bgcolor: 'transparent',
                            backdropFilter: "blur(5px)",
                            px:2,
                            py:2,
                            mx:2,
                            my:2
                        }} elevation={3}>
                        <ExperienceCardPopupTemplate
                            key={cardArray[index].id}
                            cardTitle={cardArray[index].cardTitle}
                            cardCategory={cardArray[index].cardCategory} 
                            cardDesc={cardArray[index].cardDesc}
                            dialogTitle={cardArray[index].dialogTitle}
                            dialogSubtitle={cardArray[index].dialogSubtitle}
                            dialogYears={cardArray[index].dialogYears}
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
                    ref={expRef}
                >
                    {getExperienceCards(expData)}
                </Grid>
            </FadeIn>
        )
    }
}

export { ExperienceCardTemplate };

{/* <Grid item md={6} xs={12}>
                        <Card sx={{
                            bgcolor: 'transparent',
                            backdropFilter: "blur(5px)",
                            mx:2,
                            mb:15,
                            pb:4,
                            px:4
                            }} elevation={3}>
                        <CardMedia
                            component='img'
                            image={cardImgURL}
                            alt={cardAltText}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography color={styles.textPrimary} variant='h3' gutterBottom>
                                {cardTitle}
                            </Typography>
                            <Typography color={styles.textPrimary} variant='h5' gutterBottom>
                                {cardCategory}
                            </Typography>
                            <Typography color={styles.textPrimary}>
                                {cardDesc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <CardPopupTemplate
                                key={id}
                                dialogTitle={dialogTitle}
                                dialogSubtitle={dialogSubtitle}
                                dialogYears={dialogYears}
                                dialogContent={dialogContent}
                                portalLink={portalLink}
                                stack={stack}
                                buttonColor={buttonColor}
                                textAccentLight={textAccentLight}
                                textAccentMedium={textAccentMedium}
                                textAccentDark={textAccentDark}
                            />
                        </CardActions>
                        </Card>
                    </Grid> */}