import React, { useContext } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom';

import Inici from '../Pages/Inici';
import Menu from '../Pages/Menu';
// import Product from '../Pages/Product';
import Cart from '../Pages/Cart'
import LoginSignUp from '../Pages/LoginSignUp'
import Register from '../Pages/Register'
import NProducte from '../Pages/NProducte'
// import Item from '../Components/Item/Item';

import { AuthContext } from '../Context/AuthCOntext';

export const AppRoutes = ({ addToCart, removeFromCart, cartItems}) => {
  const { user, role } = useContext(AuthContext);
  return (
    <Routes>
        <Route path='/' element={<Inici/>} />
        <Route path='/menu' element={<Menu addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/nproducte' element={user && role ==='admin' ?(<NProducte/>):(<Navigate to='/menu'/>)}/>
        {/* aci anira la del password */}
    </Routes>
  )
}
