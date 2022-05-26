import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
  return (
    <>
      <Grid className='background' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
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
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;