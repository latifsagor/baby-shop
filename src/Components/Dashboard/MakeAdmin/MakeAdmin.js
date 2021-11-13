import { Alert, Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleOnBlur = (e) => {
    setEmail(e.target.value)
  }

  const handleOnSubmit = (e) => {
    const user = { email }
    fetch('https://infinite-coast-95375.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data)
          setSuccess(true)
        }
      })
    e.preventDefault()
  }

  return (
    <Container>
      <h2>Make new admin</h2>
      <Grid container spacing="2">
        <Grid item xs={12} md={6}>
          <form onSubmit={handleOnSubmit}>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
              sx={{ mb: 1, width: '75%' }}
            />{' '}
            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{ my: 1, width: '75%' }}
            >
              Submit
            </Button>
          </form>
          {success && (
            <Alert sx={{ my: 1, width: '75%' }} severity="success">
              Made admin successfully!
            </Alert>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default MakeAdmin
