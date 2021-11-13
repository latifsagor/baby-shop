import { CardMedia, Container, Grid, Typography } from '@mui/material'
import useAuth from '../../../hooks/useAuth'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { Link, NavLink } from 'react-router-dom'
import useCart from '../../../hooks/useCart/useCart'

const HomePageService = () => {
  const { products } = useAuth()
  const handleAddToCart = useCart()

  // const handleAddToCart = (index) => {
  //   const data = products[index]
  //   data.email = user?.email
  //   delete data._id
  //   fetch('https://infinite-coast-95375.herokuapp.com/addItem', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  // }
  return (
    <div
      style={{ backgroundColor: 'rgb(214 228 255 / .15)', padding: '20px 0' }}
    >
      <Container sx={{ py: 3 }}>
        <Typography
          variant="h2"
          sx={{ my: 3, fontWeight: 500, fontSize: 35, textAlign: 'center' }}
        >
          Products
        </Typography>
        <Grid container spacing="2">
          {products.slice(0, 6).map((product, index) => (
            <Grid key={product?._id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345, marginBottom: '35px' }}>
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
        <Link to="/allProducts" style={{ textDecoration: 'none' }}>
          <Button variant="contained">All Products</Button>
        </Link>
      </Container>
    </div>
  )
}

export default HomePageService
