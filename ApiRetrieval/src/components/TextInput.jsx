import { TextField } from '@mui/material'
import React, { useState } from 'react'

const TextInput = () => {
  var [inputs, setInputs]=useState({sname:"",age:"",place:"",email:""})
  const inputHandler = (e) => {
    setInputs({ ...inputs,[e.target.name]: e.target.value})
    console.log(inputs)
  };
  return (
    <div>
      <TextField variant='outlined' label='username' OnChange={inputHandler} name="sname" value={inputs.sname}/>
      <br />
      <br />
      <TextField variant='outlined' label='age' OnChange={inputHandler} name="age" value={inputs.age} />
      <br />
      <br />
      <TextField variant='outlined' label='place' OnChange={inputHandler} name="age" value={inputs.place} />
      <br /><br />
      <TextField variant='outlined' label='email' OnChange={inputHandler} name="email" value={inputs.email} />
      <br /><br />
      <button variant='contained'>submit</button>
    </div>
  )
}

export default TextInput
