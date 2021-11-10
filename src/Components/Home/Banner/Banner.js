import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './Banner.css'
import yamahaYZF from '../../../Images/Yamaha YZF-R1.png'

const Banner = () => {
  return (
    <div className="banner-bg">
      <Container sx={{ py: 3 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              gutterBottom
              variant="h2"
              sx={{ fontSize: '35px', fontWeight: 500 }}
            >
              Welcome to Our Bike Shop
            </Typography>
            <Typography paragraph>
              Your gateway to the industry leading powersports company. From
              Yamaha motorcycles and off-road vehicles to boats, outboard motors
              and much more,
            </Typography>
            <Button variant="contained">More Details</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={yamahaYZF} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Banner
