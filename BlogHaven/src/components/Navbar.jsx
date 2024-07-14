import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Navbar = () => {
  return (
    <div>
      <Typography></Typography>
    <Box>
      <AppBar color='secondary'>
        <Toolbar>
          <Typography variant='h4' fontFamily='fantasy'>
            Blogs
          </Typography>
          
          <Button variant='contained' color='error' style={{ marginLeft: 'auto' }}>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Button>
          
          <Button variant='contained' color='primary' style={{ marginLeft: '10px' }}>
            <Link to={'/a'} style={{ textDecoration: 'none', color: 'white' }}>
              Add
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <br />
      <br />
    </Box>
    </div>
  );
}

export default Navbar;
