import React, { useState } from 'react';
import { CardMedia, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material/';
import { Col, Row } from 'react-bootstrap';
import { Box, Container } from '@mui/system';

const styles = {
    textPrimary: {
      color:'white'
    }
}

function AboutCardPopup(props) {

    const { cardImgURL, cardAltText, dialogTitle, dialogSubtitle, dialogYears, dialogContent, portalLink, stack, buttonColor } = props


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
            justifyContent="center"
        >
            <Button onClick={handleClickOpen}
                sx={{height:'250px'}}
            >
                <CardMedia
                            component='img'
                            image={cardImgURL}
                            alt={cardAltText}
                            sx={{width:'100%', maxHeight:'100%'}}
                        >
                </CardMedia>
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

export { AboutCardPopup };