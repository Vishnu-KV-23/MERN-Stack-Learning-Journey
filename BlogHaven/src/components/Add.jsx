import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
 


        <Typography variant='h3'>
        &nbsp;The Blogging Life
        </Typography>
        <br /><br />
      <TextField variant='outlined' placeholder='' label='Blog&nbsp;Name'>Blog&nbsp;Name</TextField>
      <br />
      <br />
      <TextField variant='outlined' placeholder='' label='Description'>Description</TextField>
      <br />
      <br />
      <TextField variant='outlined' placeholder='' label='Author&nbsp;Name'>Author&nbsp;Name</TextField>
      <br /><br />
      <Button variant='contained'>SUBMIT</Button>

    </div>
  )
}

export default Add