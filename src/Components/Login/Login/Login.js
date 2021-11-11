import { Alert, Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useFirebase from '../../../hooks/useFirebase'

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { user, logInUser, isLoading, authError } = useFirebase()

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    logInUser(loginData?.email, loginData?.password)
  }

  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              label="Your Email"
              variant="standard"
              type="email"
              name="email"
              onBlur={handleOnChange}
              sx={{ width: '75%', mb: 1 }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              onBlur={handleOnChange}
              sx={{ width: '75%', mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '75%', mb: 1 }}
            >
              Sign In
            </Button>
            <NavLink to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
          </form>
          {user?.email && <Alert severity="success">Login Successfully!</Alert>}
          {user?.authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
