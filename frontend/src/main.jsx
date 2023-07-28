import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/styles/bootstrap.custom.css'
import Homescreen from './screens/Homescreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>,
  ),
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
