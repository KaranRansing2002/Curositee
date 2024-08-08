import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import UserD from './pages/UserD'
import UserAddress from './components/items/UserAddress'
import UserProfileNav from './components/items/UserProfileNav'
import Products from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/custom/Navbar'
import Home from './pages/Home'
import ProductDesc from './pages/ProductDesc'
import Register from './pages/Register'
function App() {

  return (
    <div className='w-full'>
      <div>
        <Navbar/>
      </div>
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/account' exact element={<UserD/>} />
          <Route path='/register' exact element={<Register/>}/>
          <Route path='/product' exact element={<Products/>} />
          <Route path='/register' exact element={<Register/>}/>
          <Route path='/productDesc/:index' exact element={<ProductDesc/>} />
        </Routes>
    </div>
  )
}

export default App
