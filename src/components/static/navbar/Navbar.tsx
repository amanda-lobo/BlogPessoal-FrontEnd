import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';



function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();
  
  function goLogout(){
      setToken('')
      alert("Usuário deslogado")
     navigate('/login')
  }
  return (
    <>
      <AppBar position="static">
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
    </>
  )
}

export default Navbar