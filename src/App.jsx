import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {

  return (
    <>
    <Header/>
    <SignUp/>
    {/* <Outlet/> */}
     <Footer/>
    </>
  )
}

export default App
