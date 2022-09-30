import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from '@mui/system';
import { Typography, CardMedia, CardContent, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

const styles = {
    textPrimary: {
      color:'white'
    }
}

function ExperienceCardPopupTemplate(props) {

    const { cardTitle, cardCategory, cardDesc, dialogTitle, dialogYears, dialogSubtitle, dialogContent, portalLink, stack, textPrimary, buttonColor } = props

    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('xl');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function getDialogContentText(dialogArray) {
        return(
            dialogArray.map( dialogText => {
                return(
                    <DialogContentText id="alert-dialog-description" gutterBottom>
                        {dialogText}
                    </DialogContentText>
                )
            })
        )
    }

    function getStackContentText(stackContent) {

        let stackArray = [];

        stackArray.push(
            <Row>
                <Typography variant='h6'>
                    Stack:
                </Typography>
            </Row>
        )

        for (let index = 0; index < stackContent.length; index++) {
            stackArray.push(
                <a href={stackContent[index].url}>
                    <img src={stackContent[index].imgSource} alt={stackContent[index].altText} style={{maxHeight:"64px", padding:'1rem'}}/>
                </a>
            )
            
        }
        return(
            stackArray
        )
    }

    return (
        <Box
            align="center"
            justifyContent="start"
        >
            <Button onClick={handleClickOpen} sx={{color:'white'}}>
                <Grid container>
                    <Grid item xs={12} align='start' textTransform='none'>
                        <CardContent>
                            <Typography variant='h3' gutterBottom>
                                {cardTitle}
                            </Typography>
                            <Typography variant='h5' gutterBottom>
                                {cardCategory}
                            </Typography>
                            <Typography variant='p'>
                                {cardDesc}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" variant='h3'>
                    {dialogTitle}
                </DialogTitle>
                <DialogTitle id="alert-dialog-title">
                    {dialogSubtitle}
                </DialogTitle>
                <DialogTitle id="alert-dialog-title">
                    {dialogYears}
                </DialogTitle>
                <DialogContent>
                    {dialogContent ? getDialogContentText(dialogContent) : ""}
                    <DialogContentText>
                        <Container>
                            <Row>
                                {stack ? getStackContentText(stack) : ""}
                            </Row>
                        </Container>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {portalLink ?
                        <a href={portalLink} target='_blank' style={{textDecoration: 'none'}}>
                            <Button sx={{mx:2, backgroundColor:buttonColor}} onClick={handleClose} variant='contained'>
                                Explore More
                            </Button>
                        </a> : 
                        <a></a>
                    }
                <Button sx={{mr:1, backgroundColor:buttonColor}} onClick={handleClose} autoFocus variant='contained'>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export { ExperienceCardPopupTemplate };