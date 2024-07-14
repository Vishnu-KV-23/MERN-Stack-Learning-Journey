import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } 
from '@mui/material'
import React from 'react'

const CardApi = () => {
  return (
    <div>
      <Typography variant='h3'>Cards</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2011/07/26/06/32/iguana-8362_640.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </Grid>


        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2011/07/26/06/32/iguana-8362_640.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </Grid>
        
      </Grid>
    </div>
  )
}

export default CardApi
