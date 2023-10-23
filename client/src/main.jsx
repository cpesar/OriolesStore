import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/styles/bootstrap.custom.css'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/products/:id" element={<ProductScreen />} />
    </Route>,
  ),
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
