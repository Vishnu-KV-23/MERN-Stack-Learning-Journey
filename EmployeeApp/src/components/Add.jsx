import { Button, TextField } from '@mui/material';
import axios from 'axios';
// import { set } from 'mongoose';
import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const Add = (props) => {
  const [inputs, setInputs] = useState({ Name: "", Age: "", Department: "", Salary: "" });
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state)
  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs); // Logs updated state after each input change
  };

  const addHandler = () => {
    if(location.state!==null)
    {
      axios.put(`http://localhost:3700/update/${location.state.val._id}`, inputs)

      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate("/")
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    else{
      axios.post("https://localhost:3700/add",inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
      })
    }
    axios.post("http://localhost:3700/add", inputs)
      .then((res) => {
        console.log(res);
        alert(res.data.message); // Alerts success message from backend
        navigate('/'); // Navigate to home page after successful addition
      })
      .catch((err) => {
        console.log(err); // Logs any errors encountered during the POST request
      });
  };
useEffect(()=>{
  if(location.state!==null){
    setInputs({
      ...inputs,
      Name:location.state.val.Name,
      Age:location.state.val.Age,
      Dept:location.state.val.Dept,
      Sal:location.state.val.Sal

    })
  }
},[]);
  return (
    <div>
      <br /><br /><br /><br />
      <TextField variant='outlined' label='Name' 
        onChange={inputHandler}
        name="Name"
        value={inputs.Name} // Binds value to state
      />
      <br /><br />
      <TextField variant='outlined' label='Age'
        onChange={inputHandler}
        name="Age"
        value={inputs.Age} // Binds value to state
      />
      <br /><br />
      <TextField variant='outlined' label='Department'
        onChange={inputHandler}
        name="Dept"
        value={inputs.Dept} // Binds value to state
      />
      <br /><br />
      <TextField variant='outlined' label='Salary'
        onChange={inputHandler}
        name="Sal"
        value={inputs.Sal} // Binds value to state
      />
      <br /><br />
      <Button variant='contained' onClick={addHandler}>
        SUBMIT
      </Button>
    </div>
  );
};

export default Add;
