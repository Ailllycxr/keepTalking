import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Can be replcaed with actual error page or just return this</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/game',
        element: <Game />
      }, {
        path: '/manual',
        element: <Manual />
      }, {
        path: '/score',
        element: <Score />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactProvider router={router} />,
)
