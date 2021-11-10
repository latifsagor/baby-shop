import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home/Home/Home'
import Navigation from './Components/Shared/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users"></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
