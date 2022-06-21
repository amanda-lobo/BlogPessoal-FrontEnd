import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import { ExitToApp } from '@material-ui/icons';

function Navbar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário Deslogado!', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      progress: undefined,
    });

    navigate('/login')
  }

  var navbarComponent;

  if (token != "") {

    navbarComponent = <AppBar position="static">
      <Toolbar className='navbar' variant="dense">

        <Link to='/home' className='text-decoration'>
          <Box className='cursor' marginRight={2}>
            <Typography variant="h5" color="inherit">
              DevGirls
            </Typography>
          </Box>
        </Link>

        <Link to="/posts" className='text-decoration'>
          <Box mx={1} className='cursor' >
            <Typography variant="button" color="inherit">
              Postagens
            </Typography>
          </Box>
        </Link>

        <Link to='/temas' className='text-decoration'>
          <Box mx={1} className='cursor'>
            <Typography variant="button" color="inherit">
              Temas
            </Typography>
          </Box>
        </Link>

        <Link to='formularioTema' className='text-decoration'>
          <Box mx={1} className='cursor'>
            <Typography variant="button" color="inherit">
              Cadastrar Tema
            </Typography>
          </Box>
        </Link>

        <Box mx={1} className='cursor' marginLeft={95}>
            <Typography variant="button" color="inherit">
              Sair
            </Typography>
        </Box>

        <Box mx={1} className='cursor' onClick={goLogout} marginRight={0}>
         <ExitToApp />
        </Box>

      </Toolbar>
    </AppBar>
  }
  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar