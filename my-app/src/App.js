import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import './App.css'
import HomeLayoutRoute from './components/pages/HomeLayout'
import LoginLayoutRoute from './components/pages/LoginLayout'
import ScrollToTop from './components/pages/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <HomeLayoutRoute component={Home} />
        </Route>
        <Route path='/near-me/:id'>
          <HomeLayoutRoute component={Home} />
        </Route>
        <Route>
          <LoginLayoutRoute path='/login' component={Login} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
