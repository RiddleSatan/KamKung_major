import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


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
    element:<HoneApplieances/>
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
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App router={router}/>
  </React.StrictMode>,
)
