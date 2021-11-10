import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">Not Found 404</Typography>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              {' '}
              <Button variant="contained">Go Back</Button>{' '}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default NotFound
