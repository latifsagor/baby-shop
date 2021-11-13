import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home/Home/Home'
import Navigation from './Components/Shared/Navigation/Navigation'
import AuthProvider from './contexts/AuthProvider/AuthProvider'
import AllProducts from './Components/AllProducts/AllProducts'
import NotFound from './Components/NotFound/NotFound'
import ViewProductDetails from './Components/ViewProductDetails/ViewProductDetails'
import Login from './Components/Login/Login/Login'
import Register from './Components/Login/Register/Register'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import OrderReview from './Components/OrderReview/OrderReview'
import AddProduct from './Components/AddProduct/AddProduct'
import Dashboard from './Components/Dashboard/Dashboard/Dashboard'
import Footer from './Components/Shared/Footer/Footer'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allProducts">
              <AllProducts />
            </Route>
            <Route path="/viewProductDetails/:id">
              <ViewProductDetails />
            </Route>
            <Route path="/orderReview">
              <OrderReview />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/manageAllOrders">
              <AddProduct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
