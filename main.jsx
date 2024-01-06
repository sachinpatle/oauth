import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import {BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWithNaviagate } from './AuthProviderWithNaviagate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
    <AuthProviderWithNaviagate>
        <App />
    </AuthProviderWithNaviagate>
    </Router>
  </React.StrictMode>,
)
