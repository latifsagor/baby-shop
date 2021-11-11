import { Container, Grid } from '@mui/material'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import useCart from '../../hooks/useCart/useCart'

const AllProducts = () => {
  const { products } = useAuth()
  const handleAddToCart = useCart()
  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 500, fontSize: '35px', mb: 3, textAlign: 'center' }}
        >
          Products
        </Typography>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid key={product._id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: 20, fontWeight: 500 }}
                  >
                    Price: {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <NavLink to={`/viewProductDetails/${product?.id}`}>
                    <Button size="small">View Details</Button>
                  </NavLink>
                  <Button onClick={() => handleAddToCart(index)} size="small">
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default AllProducts
