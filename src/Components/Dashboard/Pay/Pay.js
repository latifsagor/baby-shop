import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Pay = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Payment system coming soon.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Pay
