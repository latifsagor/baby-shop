import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { Button } from '@mui/material'
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import useAuth from '../../../hooks/useAuth'
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
import AddProduct from '../../AddProduct/AddProduct'
import ManageOrders from '../ManageOrders/ManageOrders'
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts'
import Review from '../Review/Review'
import Pay from '../Pay/Pay'

const drawerWidth = 240

function Dashboard(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  let { path, url } = useRouteMatch()
  const { AllContext } = useAuth()
  const { admin, user, logOut } = AllContext

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button color="inherit">Baby Shop</Button>
      </Link>{' '}
      <br />
      <Link to={`${url}`} style={{ textDecoration: 'none' }}>
        <Button color="inherit">My Orders</Button>
      </Link>{' '}
      <br />
      <Link to={`${url}/review`} style={{ textDecoration: 'none' }}>
        <Button color="inherit">Review</Button>
      </Link>{' '}
      <br />
      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}>
            <Button color="inherit">Make an Admin</Button>
          </Link>{' '}
          <br />
          <Link to={`${url}/addProduct`} style={{ textDecoration: 'none' }}>
            <Button color="inherit">Add New Product</Button>
          </Link>{' '}
          <br />
          <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none' }}>
            <Button color="inherit">Manage All Orders</Button>
          </Link>
          <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none' }}>
            <Button color="inherit">Manage All Products</Button>
          </Link>
        </Box>
      )}
      <Link to={`${url}/pay`} style={{ textDecoration: 'none' }}>
        <Button color="inherit">Pay</Button>
      </Link>{' '}
      <br />
      {user?.email && (
        <Button onClick={logOut} variant="contained">
          Logout
        </Button>
      )}
      <Divider />
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <ManageAllOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageAllProducts />
          </AdminRoute>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
        </Switch>
      </Box>
    </Box>
  )
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default Dashboard
