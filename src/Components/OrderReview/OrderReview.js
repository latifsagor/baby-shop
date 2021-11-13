import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

const OrderReview = () => {
  const { register, reset, handleSubmit } = useForm()
  const [orders, setOrders] = useState([])
  const { AllContext } = useAuth()
  const { user, isLoading } = AllContext
  const email = user?.email

  useEffect(() => {
    fetch(`https://infinite-coast-95375.herokuapp.com/myOrders?email=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [email])

  // Handle Delete
  const handleDelete = (id) => {
    fetch(`https://infinite-coast-95375.herokuapp.com/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id)
          setOrders(remaining)
          alert('Deleted Successfully')
        }
      })
  }

  // Place information
  const onSubmit = (data) => {
    fetch(`https://infinite-coast-95375.herokuapp.com/placeOrder`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Successfully Order')
        }
      })
    reset()
  }

  if (isLoading) {
    return <CircularProgress />
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
                {...register('customerName')}
                style={{ width: '75%', padding: '15px', marginBottom: '12px' }}
              />{' '}
              <br />
              <input
                defaultValue={user?.email}
                {...register('email', { required: true })}
                style={{ width: '75%', padding: '15px', marginBottom: '12px' }}
              />{' '}
              <br />
              {/* {errors?.email && (
                <span className="error">This field is required</span>
              )} */}
              <input
                placeholder="Address"
                defaultValue=""
                style={{ width: '75%', padding: '15px', marginBottom: '12px' }}
                {...register('address')}
              />{' '}
              <br />
              <input
                placeholder="City"
                style={{ width: '75%', padding: '15px', marginBottom: '12px' }}
                defaultValue=""
                {...register('city')}
              />{' '}
              <br />
              <input
                placeholder="Phone number"
                defaultValue=""
                style={{ width: '75%', padding: '15px', marginBottom: '12px' }}
                {...register('phone')}
              />{' '}
              <br />
              {/* <input
              className="my-2 p-2 w-50 btn btn-outline-danger"
              type="submit"
            /> */}
              <Button variant="contained" type="submit">
                Place Order
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default OrderReview
