import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className='background2' textColor='secondary' centered onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>

          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='texto'>
            Hoje em dia a inserção das mulheres na tecnologia tem se tornado algo cada vez mais ocorrente, porém sabemos que nem sempre foi assim. Antigamente era difícil a inclusão da mulher nesta área tão vasta, pois havia muito preconceito e sexismo da parte de alguns profissionais.
            Estudo tecnologia em geral desde os meus 15 anos de idade e já sofri diversos tipos de preconceitos por não me enquadrar no "padrão" que a área impunha, porém como sou persistente e adoro um desafio, continuei estudando, entretanto sentia falta de alguma comunidade em que eu pudesse me sentir inclusa na tecnologia.
            Hoje, aos 20 anos, apresento a vocês DevGirls: uma comunidade acolhedora de mulheres cisgenero, transgenero e não binários, criada por mim a partir de um projeto piloto proposto pela Generation Brasil, para todas que já se sentiram deslocadas (assim como eu) se sintam acolhidas.
            Sejam Bem Vindas a DevGirls!
            </Typography>

            <Typography variant='body2' className='titulo' align='right'>Por: Amanda Lobo</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;