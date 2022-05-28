import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
  return (
    <>
      <Grid className='background' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className='txt-home'>
            <Typography variant="h3" gutterBottom component="h3" align="center">Seja bem vinde!</Typography>
            <Typography variant="h5" gutterBottom component="h5" align="center">expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button className='btn-verPost'>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img className='img-home' src="https://i.imgur.com/fpYh0br.png" alt="imagem de um lobo"/>
        </Grid>
        {/* <Grid xs={12}>
        </Grid> */}
      </Grid>
    </>
  );
}

export default Home;