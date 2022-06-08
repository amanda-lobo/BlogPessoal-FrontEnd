import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent = <Grid className='footer-background' container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
        <Box>
          <Box className='txt' paddingTop={1} display="flex" alignItems="center" justifyContent="center">
            {/* <Typography align="center" gutterBottom>
            Siga-nos nas redes sociais </Typography> */}
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" className='icons'>
            <a href="https://www.instagram.com/_amandalobo/" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/amandag-lobo/" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/amanda-lobo" target="_blank">
              <GithubIcon />
            </a>
          </Box>
        </Box>
        <Box className='txt'>
          <Box paddingTop={1}>
            <Typography variant="subtitle2" align="center" gutterBottom>
              © 2022 Copyright: Amanda Lobo</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  }
  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer;