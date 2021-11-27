import { CircularProgress } from '@mui/material'
import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from '../../../hooks/useAuth'

const AdminRoute = ({ children, ...rest }) => {
  const { AllContext } = useAuth()
  const { user, admin } = AllContext
  if (!admin) {
    return <CircularProgress />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default AdminRoute
