import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
