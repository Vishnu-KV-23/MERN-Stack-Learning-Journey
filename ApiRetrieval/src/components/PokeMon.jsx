import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokeMon = () => {
  const [output, setOutput] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/pokemon")
      .then((res) => {
        console.log(res.data);
        setOutput(res.data);
      })
      .catch((err) => { console.log(err); });
  }, []);
  
  return (
    <div>
      <Typography variant='h3'>Pokemon</Typography>
      <Grid container spacing={3}>
        {output.map((val) => (
          <Grid item xs={12} md={4} key={val.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={val.image_url}
                alt={val.pokemon}
                style={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.pokemon}
                </Typography>
                <Typography variant="body2" color="text.secondary">

                  {val.type}
                </Typography>
              </CardContent>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PokeMon;
