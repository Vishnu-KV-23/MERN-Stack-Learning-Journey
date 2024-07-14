import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
const Home = () => {
    
const [output,setOutput]=useState([]);
useEffect(() => 
{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data);
        setOutput(res.data);

    })
    .catch((err)=>
    {
        console.log(err);
    
    })

},[])

  return (
    <div style= {{   backgroundImage: `url('https://images.unsplash.com/photo-1718743256270-a4b769236fd3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         minHeight: '100vh'
        }}>
            <br /><br /><br />
        <Typography variant='h1' style={{ padding:'0%',fontFamily:'fantasy', color: 'black', textAlign: 'center',fontSize:'300%' }}>Dive into Our Latest Posts</Typography>
       <br /><br /> <Grid container spacing={3} justifyContent="center">
            {output.map((val, i) => (
                <Grid item xs={12} md={3} key={i}>
                    <Card variant='outlined' style={{ border:'5px solid  black',borderRadius:'10px',backgroundColor:'aquamarine', color: 'black', textAlign: 'center', height: '90%' }}>
                        <CardMedia
                            
                        />
                        <CardContent>
                            <Typography variant="h4" style={{ padding:'0 0 0 0',fontFamily: 'fantasy', color: 'purple' }}>
                                {val.id}
                            </Typography>
                            <Typography variant="h6" style={{ fontFamily: "monospace", color: 'black' }}>
                                 {val.title}
                            </Typography>
                            <Typography variant="h1" style={{ padding:'0 0 9% 0', fontFamily: 'inherit', color: 'grey',fontSize:'18px' }}>
                                 {val.body}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Home