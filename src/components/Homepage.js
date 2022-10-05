// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import { Container, Stack, Typography, Card, CardActions, CardContent, Button, Grid, Box, CardMedia, Paper } from '@mui/material/';

// Images
import profileImg from './img/profile-pic-1.png'
  
  
function Homepage(props) {

    const { textPrimary, buttonColor, textAccentLight, textAccentMedium, textAccentDark, mediaTitleLg, mediaTitleMd, mediaTitleSm } = props

    return(
                <Box
                    color={textPrimary}
                    sx={{   flexGrow: 1,
                            pt:'10vh',
                            height:'100vh'
                    }}
                >
                    <Grid container>
                        <Grid item>
                            <FadeIn 
                                delay='100'
                                transitionDuration='1000'
                            >
                                <Typography
                                        variant={mediaTitleSm}
                                        gutterBottom
                                    >
                                        Welcome! My name is...
                                </Typography>
                                <Typography
                                        nowrap
                                        variant={mediaTitleLg}
                                    >
                                        Mitch Krafczek.
                                </Typography>
                                <Typography
                                        variant={mediaTitleMd}
                                        color={textAccentMedium}
                                        nowrap
                                        gutterBottom
                                    >
                                        I build things for the web.
                                </Typography>
                            </FadeIn>
                            <FadeIn 
                                delay='1000'
                                transitionDuration='1000'
                            >
                                <Typography variant="p" color={textPrimary} paragraph>
                                    Helping guide Canadian agriculture through climate change 🍁
                                </Typography>
                                <Typography variant="p" color={textPrimary} paragraph>
                                    Sustainability Advocate 🌱
                                </Typography>
                                <Typography variant="p" color={textPrimary} paragraph>
                                    Formula 1 enthusiast 🏎
                                </Typography>
                                <Typography variant="p" color={textPrimary} paragraph sx={{pb:2}}>
                                    Software developer 👨‍💻 
                                </Typography>
                                <Box>
                                    <Link
                                        to='./docs/Mitch_Krafczek_Resume.pdf'
                                        target="_blank"
                                        style={{textDecoration:'none'}}
                                    >
                                        <Button variant='contained' sx={{p:2, backgroundColor:buttonColor}}>
                                                Download Resume
                                        </Button>
                                    </Link>
                                </Box>
                            </FadeIn>
                        </Grid>
                    </Grid>
                </Box>
            // </Card>
    )
}

export { Homepage };