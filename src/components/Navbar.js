import React, { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { CurrentDateTime } from './CurrentDateTime';

import { BackToTop } from './NavbarTools';
import { Link } from 'react-router-dom';

const styles = {
  textPrimary: {
    color:'white'
  }
}


function Navbar(props) {

  const { pages, aboutSection, experienceSection, projectsSection, contactSection, buttonColor } = props

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <AppBar color='transparent' position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
            }}
            >
            <CurrentDateTime/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:'white'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
              {pages.map((page) => {
                let refSection;
                page == 'About' ? refSection = aboutSection :
                page == 'Experience' ? refSection = experienceSection :
                page == 'Projects' ? refSection = projectsSection :  refSection = contactSection

                return(

                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <a onClick={() => scrollDown(refSection)}>
                    <Typography textAlign="center">{page}</Typography>
                  </a>
                </MenuItem>
                )
              }
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <CurrentDateTime/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
            {pages.map((page) => {
                  let refSection;
                  page == 'About' ? refSection = aboutSection :
                  page == 'Experience' ? refSection = experienceSection :
                  page == 'Projects' ? refSection = projectsSection :  refSection = contactSection

                  return(

                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, mr: 1, color: 'white', display: 'block' }}
                      >
                        <a onClick={() => scrollDown(refSection)}>
                          {page}
                        </a>
                    </Button>
                  )
                }
                )}
          </Box>
          <Link
              to='./docs/Mitch_Krafczek_Resume.pdf'
              target="_blank"
              style={{textDecoration:'none'}}
          >
            <Button variant='outlined' >
                      Resume
              </Button>
          </Link>
        </Toolbar>
        <BackToTop/>
      </Container>
    </AppBar>
  );
};
export { Navbar };
