import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
  var [output,setOutput]=useState([])
//   useEffect(()=>{},[]) syntax of useEffect , should use [] if api is hugge it will cause hang
useEffect(()=>{
  //axios.get("url").then().catch()
  axios
  .get("https://jsonplaceholder.org/users")
  .then((res)=>{
    console.log(res.data)
    setOutput(res.data)
    ;})
    .catch((err)=>{console.log(err);});
   
  
},[]);
return (
    <div>
      <Typography variant='h3'>Axios</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Phone</TableCell>
              
              
            </TableRow>
            </TableHead>
            <TableBody>
              {output.map((val,i)=>{
              return (
                <TableRow key = {i}>
                   <TableCell>{val.firstname}</TableCell>
                   <TableCell>{val.lastname}</TableCell>
                   <TableCell>{val.phone}</TableCell>
                   
                </TableRow>
              )
            })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ApiGet
