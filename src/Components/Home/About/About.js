import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import delivery from '../../../Images/delivery.png'

const About = () => {
  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            {' '}
            <img src={delivery} alt="delivery" />{' '}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3">
              About Us
            </Typography>
            <Typography variant="body2" paragraph>
              We provide best service for customers. We give fast delivery in
              the city. And also trying to improvement day by day. Customer is
              the first priority for us. We dolor sit amet consectetur
              adipisicing elit. Reiciendis rem sapiente ipsa ad, beatae
              voluptatibus?
            </Typography>
            <Button variant="outlined">More Details</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About
