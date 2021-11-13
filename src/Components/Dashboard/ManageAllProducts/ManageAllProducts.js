import React, { useEffect, useState } from 'react'
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

const ManageAllProducts = () => {
  const [manageProducts, setManageProducts] = useState([])

  useEffect(() => {
    fetch('https://infinite-coast-95375.herokuapp.com/manageAllOrders')
      .then((res) => res.json())
      .then((data) => setManageProducts(data))
  }, [])

  // Handle Delete
  const handleDelete = (id) => {
    // console.log(id)
    fetch(`https://infinite-coast-95375.herokuapp.com/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Deleted Successfully')
          const remaining = manageProducts.filter((order) => order._id !== id)
          setManageProducts(remaining)
        } else {
          alert('not deleted')
        }
      })
  }
  return (
    <Container>
      <Grid container spacing={2}>
        {manageProducts.map((ManageAllOrder) => (
          <Grid item xs={12} md={4}>
            <Card key={ManageAllOrder._id} sx={{ mb: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={ManageAllOrder.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ManageAllOrder.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {ManageAllOrder.description}
                </Typography>
                <Typography variant="h6">
                  Price: {ManageAllOrder.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleDelete(ManageAllOrder?._id)}
                  size="small"
                  variant="contained"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ManageAllProducts
