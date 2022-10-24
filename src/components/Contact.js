// Dependencies
import React, { useEffect, useState } from "react";
import { Container, CssBaseline, Typography, Button, Grid, Box, TextField, FormControlLabel, styled } from '@mui/material/';
import { Link } from "react-router-dom";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });


function Contact(props) {

    const { textPrimary, buttonColor } = props

    const [sendContact, setSendContact ] = useState(false)

    const hostUrl = 'https://formsubmit.co/mitchkrafczek@gmail.com'

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const contactURL = `${hostUrl}`
    
        const contactData = async () => {
    
        let fetchOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
                                firstName: data.get('firstName'),
                                lastName: data.get('lastName'),
                                email: data.get('email'),
                                phoneNumber: data.get('phoneNumber'),
                                message: data.get('message'),
                              })
        }

        await fetch(contactURL,fetchOptions)
        .then(() => {
            setSendContact(true)
            })
        }
        contactData()
    }

    function mailTo(){
        window.location.href = 'mailto:mitchkrafczek@gmail.com';
    }


    return(
        <Container>
            <Box
                justifyContent='center'
                align='center'
            >
                <Button onClick={mailTo} variant='contained' sx={{backgroundColor:buttonColor}}>
                    <Typography
                        color={textPrimary}
                        variant='h5'
                    >
                        Contact me at
                            mitchkrafczek@gmail.com
                    </Typography>
                </Button>
            </Box>
        </Container>
        // <Container component="main" id="contactForm" maxWidth="md">
        //     <CssBaseline />
        //     {sendContact ? 
        //             <Box
        //                 justifyContent='center'
        //                 align='center'
        //             >
        //                 <Typography
        //                     color={textPrimary}
        //                 >
        //                     Thanks for sending!
        //                 </Typography>
        //             </Box>
        //             :
        //             <Box component="form" noValidate color={textPrimary} onSubmit={handleSubmit}>
        //                 <Grid container spacing={2}>
        //                     <Grid item xs={12} sm={6}>
        //                         <CssTextField
        //                             autoComplete="given-name"
        //                             name="firstName"
        //                             required
        //                             fullWidth
        //                             id="firstName"
        //                             label="First Name"
        //                             InputLabelProps={{
        //                                 style: { color: 'white' },
        //                             }}
        //                             inputProps={{ style: { color: "white" } }}
        //                         />
        //                     </Grid>
        //                     <Grid item xs={12} sm={6}>
        //                     <CssTextField
        //                         required
        //                         fullWidth
        //                         id="lastName"
        //                         label="Last Name"
        //                         name="lastName"
        //                         autoComplete="family-name"
        //                         InputLabelProps={{
        //                             style: { color: 'white' },
        //                         }}
        //                         inputProps={{ style: { color: "white" } }}
        //                     />
        //                     </Grid>
        //                     <Grid item xs={12}>
        //                     <CssTextField
        //                         required
        //                         fullWidth
        //                         id="email"
        //                         label="Email Address"
        //                         name="email"
        //                         autoComplete="email"
        //                         InputLabelProps={{
        //                             style: { color: 'white' },
        //                         }}
        //                         inputProps={{ style: { color: "white" } }}
        //                     />
        //                     </Grid>
        //                     <Grid item xs={12}>
        //                     <CssTextField
        //                         fullWidth
        //                         id="phoneNumber"
        //                         label="Phone Number"
        //                         name="phoneNumber"
        //                         autoComplete="phone-number"
        //                         InputLabelProps={{
        //                             style: { color: 'white' },
        //                         }}
        //                         inputProps={{ style: { color: "white" } }}
        //                     />
        //                     </Grid>
        //                     <Grid item xs={12} >
        //                     <CssTextField
        //                         required
        //                         fullWidth
        //                         id="message"
        //                         label="Message"
        //                         name="message"
        //                         InputLabelProps={{
        //                             style: { color: 'white' },
        //                         }}
        //                         inputProps={{ style: { color: "white", minHeight:'250px' } }}
        //                     />
        //                     </Grid>
        //                 </Grid>
        //                 <Button
        //                     type="submit"
        //                     fullWidth
        //                     variant="contained"
        //                     sx={{ mt: 3, mb: 2, backgroundColor:buttonColor}}
        //                 >
        //                     Send
        //                 </Button>
        //             </Box>
        //     }
        //       </Container> 
    )

}

export { Contact };
