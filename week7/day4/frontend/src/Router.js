import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './components/Home'
import Create from './components/Create'
import Countries from './components/Countries'
import CountryDetail from './components/CountryDetail'

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/countries" component={Countries} />
        <Route exact path="/countries/:id" component={CountryDetail} />
      </Switch>
    </BrowserRouter>
  )
}
