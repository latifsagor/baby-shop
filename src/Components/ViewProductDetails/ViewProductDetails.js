import { Container, Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import useAuth from '../../hooks/useAuth'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const ViewProductDetails = () => {
  const { id } = useParams()
  const { products } = useAuth()
  const element = products?.find(
    (product) => Number(product?.id) === Number(id)
  )
  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={element?.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element?.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element?.Price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ViewProductDetails
