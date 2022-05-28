import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'



function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className='navbar' variant="dense">
          <Box className='cursor'>
            <Typography variant="h5" color="inherit">
              Lobinha
            </Typography>
          </Box>

            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Link to='/login' className='text-decoration'>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Link>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar