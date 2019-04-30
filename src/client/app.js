import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Profile from './pages/profile'
import Post from './pages/post'
import NotFound from './pages/not-found'

export default function App (props) {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/post" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
