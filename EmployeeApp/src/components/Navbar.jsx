import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<Box>
  <AppBar color='secondary'>
    <Toolbar>
      <Typography variant='h3'>
        Employee&nbsp;App
      </Typography>&nbsp;
      
      <Button variant='contained' color='success' style={{marginLeft:"auto"}}>
        <Link to={"/"}
        style={{textDecoration:"none",color:"white"}}>Add
        </Link>
          
          </Button>&nbsp;
      <Button variant='contained' color='error'
        style={{textDecoration:"none",color:"white"}}>
        <Link to={"/a"}>View</Link>
        </Button>&nbsp;
    </Toolbar>
  </AppBar>
</Box>
<br />
<br />
    </div>
    
  )
}

export default Navbar
