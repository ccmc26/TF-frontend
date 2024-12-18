import React, { useContext } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom';

import Inici from '../Pages/Inici';
import Menu from '../Pages/Menu';
// import Product from '../Pages/Product';
import Cart from '../Pages/Cart'
import LoginSignUp from '../Pages/LoginSignUp'
import Register from '../Pages/Register'
import NProducte from '../Pages/NProducte'
import Gallery from '../Pages/Gallery';
import Contrasenya from '../Pages/Contrasenya';
import Info from '../Pages/Info';
import Afegir from '../Pages/Afegir';
// import Item from '../Components/Item/Item';

import { AuthContext } from '../Context/AuthCOntext';

export const AppRoutes = ({ addToCart, removeFromCart, cartItems}) => {
  const { user, role } = useContext(AuthContext);
  return (
    <Routes>
        {/* ruta per defecte */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/' element={<Inici/>} />
        <Route path='/menu' element={<Menu addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/password' element={<Contrasenya/>}/>
        <Route path='/galeria' element={<Gallery/>}/>
        <Route path='/nosaltres' element={<Info/>}/>
        <Route path='/nproducte' element={user && role ==='admin' ?(<NProducte/>):(<Navigate to='/menu'/>)}>
          <Route path='afegir' element={<Afegir />}/>
          <Route path='update' element={<h2>EN proces</h2>}/>
          <Route path='delete' element={<h2>EN proces</h2>}/>
        </Route>
    </Routes>
  )
}
