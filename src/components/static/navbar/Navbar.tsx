import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { addToken } from '../../store/tokens/actions';




function Navbar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    alert("Usuário deslogado")
    navigate('/login')
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = <AppBar position="static">
      <Toolbar className='navbar' variant="dense">

        <Link to='/home' className='text-decoration'>
          <Box className='cursor'>
            <Typography variant="h5" color="inherit">
              DevGirls
            </Typography>
          </Box>
        </Link>

        <Link to="/posts" className='text-decoration'>
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              postagens
            </Typography>
          </Box>
        </Link>

        <Link to='/temas' className='text-decoration'>
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              temas
            </Typography>
          </Box>
        </Link>

        <Link to='formularioTema' className='text-decoration'>
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              cadastrar tema
            </Typography>
          </Box>
        </Link>


        <Box mx={1} className='cursor' onClick={goLogout}>
          <Typography variant="h6" color="inherit">
            logout
          </Typography>
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