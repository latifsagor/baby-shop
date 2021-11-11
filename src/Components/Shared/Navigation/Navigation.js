import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import useFirebase from '../../../hooks/useFirebase'

const Navigation = () => {
  const { user, logOut } = useFirebase()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            as={Link}
            to="/home"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textDecoration: 'none', color: '#fff' }}
          >
            Baby Shop
          </Typography>
          <Link style={{ marginRight: '15px' }} to="/allProducts">
            All Products
          </Link>
          <Link to="/orderReview">Order Review</Link>
          {user?.email ? (
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          ) : (
            <NavLink to="/login">
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
