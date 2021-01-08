import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.sass'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  NavBar,
  ProductList,
  Details,
  Cart,
  Modal,
  Default,
} from './components'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  )
}

export default App
