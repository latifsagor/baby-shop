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
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { AllContext } = useAuth()

  const { user, logInUser, isLoading, authError, signInWithGoogle } = AllContext

  // user, logInUser, isLoading, authError, signInWithGoogle

  const location = useLocation()
  const history = useHistory()

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    logInUser(loginData?.email, loginData?.password, location, history)
  }

  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
  return (
    <Container sx={{ pt: 5 }}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: '700' }}>
            Please Login
          </Typography>
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
            {isLoading && <CircularProgress color="secondary" />}
          </form>
          <p>
            -------------------------------or, -------------------------------
          </p>
          <Button
            style={{ width: '75%', marginBottom: '15px' }}
            variant="contained"
            onClick={handleGoogleSignIn}
          >
            Google Sign In
          </Button>
          {user?.email && <Alert severity="success">Login Successfully!</Alert>}
          {user?.authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
