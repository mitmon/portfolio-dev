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

function Projects() {
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
                                    About me.
                                </Typography>
                            </Grid>
                            <Grid container item>
                                <Grid item sx={{ mt:5}}>
                                    <Typography color={styles.textPrimary} variant='p'>
                                        Hello! I'm Mitch.
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ mt:5}}>
                                    <Typography color={styles.textPrimary} variant='p'>
                                        I'm a University of Waterloo and University of New Brunswick graduate, studying environmental studies, computer science, 3D city modeling, and the effects of future climate change.
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ mt:5}}>
                                    <Typography color={styles.textPrimary} variant='p'>
                                        As I've grown as a developer, I've worked alongside senior researchers and program managers who have raised my standards for whats expected of any research and development project. Apart from the courses included in my degrees, I've taken a number of online courses such as HTML & CSS crash courses, edX Data Science: R, Probability, Visualization, and Basics, and I'm working through Scrimba: The frontend developer career path.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export { Projects };
