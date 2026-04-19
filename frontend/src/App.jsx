import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Profile from './pages/Profile'
import Menu from './pages/Menu'
import Location from './Location'
import Footer from './components/Footer'
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/location' element={<Location/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
