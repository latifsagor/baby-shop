import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Register = () => {
  const [loginData, setLoginData] = useState({})
  const { AllContext } = useAuth()
  const { isLoading, registerUser, user, authError } = AllContext
  const history = useHistory()

  const handleLoginSubmit = (e) => {
    e?.preventDefault()
    if (loginData?.password !== loginData?.confirmPassword) {
      alert('Password did not match!')
      return
    }
    registerUser(
      loginData?.email,
      loginData?.password,
      loginData?.name,
      history
    )
  }

  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
    console.log(newLoginData)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h5">Register</Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                id="standard-basic"
                label="Your Name"
                variant="standard"
                type="text"
                name="name"
                onBlur={handleOnBlur}
                sx={{ width: '75%', mb: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="standard"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                sx={{ width: '75%', mb: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                sx={{ width: '75%', mb: 2 }}
              />
              <TextField
                id="standard-basic"
                label="Re-Type Password"
                variant="standard"
                type="password"
                name="confirmPassword"
                onBlur={handleOnBlur}
                sx={{ width: '75%', mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ width: '75%', mb: 1 }}
              >
                Register
              </Button>{' '}
              <br />
              <NavLink to="/login">
                <Button variant="text">Already Register? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Registration Successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
