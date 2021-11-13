import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

const ReviewPage = () => {
  const [reviewsInfo, setReviewsInfo] = useState([])
  useEffect(() => {
    fetch('https://infinite-coast-95375.herokuapp.com/reviewsInfo')
      .then((res) => res.json())
      .then((data) => setReviewsInfo(data))
  }, {})
  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h2"
          sx={{ my: 3, fontWeight: 500, fontSize: 35, textAlign: 'center' }}
        >
          Testimonial
        </Typography>
        <Grid container spacing="1">
          {reviewsInfo.map((order) => (
            <Grid item xs={12} md={4}>
              <Card
                key={order._id}
                sx={{ mb: 3 }}
                sx={{
                  maxWidth: 345,
                  marginBottom: '35px',
                  textAlign: 'center',
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    <q>{order.description}</q>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  image={order.img}
                  sx={{
                    width: '55px',
                    borderRadius: '50%',
                    display: 'block',
                    m: '0 auto',
                  }}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {order.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default ReviewPage

/* 

<Grid container spacing="3">
        {reviewsInfo.map((order) => (
          <Grid item xs={12} md={4}>
            <Card key={order._id} sx={{ mb: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={order.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {order.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {order.description}
                </Typography>
                <Typography variant="h6">Price: {order.price}</Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

*/
