import { Button, Container, Typography, Grid } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth'

const Review = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { AllContext } = useAuth()
  const { user } = AllContext

  const onSubmit = (data) => {
    fetch(`https://infinite-coast-95375.herokuapp.com/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    reset()
    console.log(data)
  }
  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ fontWeight: 500, fontSize: '35px', mb: 1 }}
      >
        Review
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              {...register('name')}
              defaultValue={user.displayName}
              placeholder="User name"
              style={{ width: '50%', padding: '15px', marginBottom: '12px' }}
            />
            {/* include validation with required or other standard HTML validation rules */}
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
            <Button style={{ width: '50%' }} variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Review
