import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Accessories from './components/Accessories.jsx'
import Computing from './components/Computing.jsx'
import Mobile from './components/Mobile.jsx'
import HomeApplieances from './components/HomeApplience.jsx'
import Shop from './components/Shop.jsx'
import Tv from './components/Tv.jsx'
import Display from './components/Display.jsx'
import Card from './components/Card.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'',
      element:<Home/>
    }
  ,{
    path:'shop',
    element:<Shop/>
  }
  ,{
    path:'mobile',
    element:<Mobile/>
  }
  ,{
    path:'tv&av',
    element:<Tv/>
  }
  ,{
    path:'homeAppliances',
    element:<HomeApplieances/>
  }
  ,{
    path:'computing',
    element:<Computing/>
  }
  ,{
    path:'display',
    element:<Display/>
  }
  ,{
    path:'accessories',
    element:<Accessories/>
  }
  ,{
    path:'display',
    element:<Display/>
  }
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card/>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
