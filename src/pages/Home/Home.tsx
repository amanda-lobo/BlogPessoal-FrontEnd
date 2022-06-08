import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../components/store/tokens/tokensReducer';

function Home() {
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
    }, [token])
  return (
    <>
      <Grid className='background' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className='txt-home'>
            <Typography variant="h3" gutterBottom component="h3" align="center">Hello World!</Typography>
            <Typography variant="h5" gutterBottom component="h5" align="center">Seja bem vinda a nossa comunidade DevGirls</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>

            <Link to="/posts" className='text-decoration'>
              <Button className='btn-verPost'>Ver Postagens</Button>
            </Link>

          </Box>
        </Grid>
        <Grid item xs={6} >
          <img className='img-home' src="https://i.imgur.com/OjoRVqr.png" alt="Logo Girl Power"/>
        </Grid>
        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;