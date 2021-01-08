import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { ProductProvider } from './context'

ReactDOM.render(
  <Router>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>,
  document.getElementById('root')
)

reportWebVitals()
