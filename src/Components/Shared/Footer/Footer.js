import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#353b48', padding: '15px 0' }}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: 'center', color: 'white' }}>
              All rights of reserve by Baby Shop
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
