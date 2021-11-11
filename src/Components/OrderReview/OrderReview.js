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
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

const OrderReview = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [orders, setOrders] = useState([])
  const { AllContext } = useAuth()
  const { user } = AllContext

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

  // Place information
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/placeOrder`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
    reset()
    console.log(data)
  }

  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {orders.map((order) => (
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
          <Grid item xs={12} md={6}>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user?.displayName}
                {...register('name')}
                className="my-2 p-2 w-50"
              />{' '}
              <br />
              <input
                defaultValue={user?.email}
                {...register('email', { required: true })}
                className="my-2 p-2 w-50"
              />{' '}
              <br />
              {errors?.email && (
                <span className="error">This field is required</span>
              )}
              <input
                placeholder="Address"
                defaultValue=""
                className="my-2 p-2 w-50"
                {...register('address')}
              />{' '}
              <br />
              <input
                placeholder="City"
                className="my-2 p-2 w-50"
                defaultValue=""
                {...register('city')}
              />{' '}
              <br />
              <input
                placeholder="Phone number"
                defaultValue=""
                className="my-2 p-2 w-50"
                {...register('phone')}
              />{' '}
              <br />
              {/* <input
              className="my-2 p-2 w-50 btn btn-outline-danger"
              type="submit"
            /> */}
              <button
                type="submit"
                className="my-2 p-2 w-50 btn btn-outline-danger"
              >
                Place Order
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default OrderReview
