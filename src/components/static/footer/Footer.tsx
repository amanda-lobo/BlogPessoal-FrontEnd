import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box className='footer-background'>
            <Box className='footer-social' paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography align="center" gutterBottom style={{ color: '#352d4b'}}>
                Siga-nos nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.instagram.com/_amandalobo/" target="_blank">
                <InstagramIcon style={{ fontSize: 25, color: '#352d4b' }} />
              </a>
              <a href="https://www.linkedin.com/in/amandag-lobo/" target="_blank">
                <LinkedInIcon style={{ fontSize: 25, color: '#352d4b' }} />
              </a>
              <a href="https://github.com/amanda-lobo" target="_blank">
                <GithubIcon style={{ fontSize: 20, color: '#352d4b' }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#1b133499", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >
                © 2022 Copyright: Amanda Lobo</Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;