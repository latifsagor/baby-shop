import { CardMedia, Container, Grid, Typography } from '@mui/material'
import useAuth from '../../../hooks/useAuth'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { Link, NavLink } from 'react-router-dom'

const HomePageService = () => {
  const { products } = useAuth()
  return (
    <div>
      <Container>
        <Grid container spacing="2">
          {products.slice(0, 6).map((product) => (
            <Grid item xs={12} md={4}>
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
                  <Button size="small">Buy Now</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default HomePageService
