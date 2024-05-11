import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
    <>
    <Header/>
    <Login/>
    {/* <Outlet/> */}
     <Footer/>
    </>
  )
}

export default App
