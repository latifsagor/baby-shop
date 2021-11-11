import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

const OrderReview = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [])

  // Handle Delete
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Deleted Successfully')
          const remaining = orders.filter((order) => order._id !== id)
          setOrders(remaining)
        } else {
          alert('not deleted')
        }
      })
  }

  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {orders.map((order) => (
              <Card sx={{ mb: 3 }}>
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
                <CardActions>
                  <Button
                    onClick={() => handleDelete(order?._id)}
                    size="small"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default OrderReview
