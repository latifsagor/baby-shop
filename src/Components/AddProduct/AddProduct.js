import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/addProduct`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    reset()
    console.log(data)
  }
  return (
    <div>
      <Container sx={{ py: 5, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 500, fontSize: '35px', mb: 1 }}
        >
          Add Products
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                {...register('name')}
                placeholder="Products Title"
                style={{ width: '50%', padding: '15px', marginBottom: '12px' }}
              />{' '}
              <br />
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="number"
                {...register('price', { required: true })}
                placeholder="Price"
                style={{ width: '50%', padding: '15px', marginBottom: '12px' }}
              />{' '}
              <br />
              <textarea
                type="text"
                {...register('description', { required: true })}
                placeholder="Description"
                style={{ width: '50%', padding: '15px', marginBottom: '12px' }}
              />{' '}
              <br />
              <input
                {...register('img', { required: true })}
                placeholder="Image Link"
                style={{ width: '50%', padding: '15px', marginBottom: '12px' }}
              />{' '}
              <br />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <Button
                style={{ width: '50%' }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AddProduct
