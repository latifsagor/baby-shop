import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './Banner.css'
import yamahaYZF from '../../../Images/baby.png'

const Banner = () => {
  return (
    <div className="banner-bg">
      <Container sx={{ py: 5 }}>
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
              sx={{
                fontSize: '55px',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Welcome to <br /> Our Baby Shop
            </Typography>
            <Typography paragraph>
              We are the most trusted online shop for Diapering, Feeding, Baby
              Foods, Toys, Fashion, Cosmetics for Mother and Groceries.
              Superfast nationwide cash on delivery ...
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
