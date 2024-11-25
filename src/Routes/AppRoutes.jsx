import React from 'react'
import { Routes,Route } from 'react-router-dom';

import Inici from '../Pages/Inici';
import Menu from '../Pages/Menu';
// import Product from '../Pages/Product';
import Cart from '../Pages/Cart'
import LoginSignUp from '../Pages/LoginSignUp'
import Register from '../Pages/Register'
// import Item from '../Components/Item/Item';

export const AppRoutes = ({ addToCart, removeFromCart, cartItems}) => {
  return (
    <Routes>
        <Route path='/' element={<Inici/>} />
        <Route path='/menu' element={<Menu addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* aci anira la del password */}
    </Routes>
  )
}
