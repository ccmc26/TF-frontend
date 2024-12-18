import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/carrito.png';

import { CartContext }  from '../../Context/CartContext';
import { AuthContext } from '../../Context/AuthCOntext';
import { MenuContext } from '../../Context/MenuContext';

export const Navbar = () => {
  const { itemCount } = useContext(CartContext);
  const { user, logout, role } = useContext(AuthContext);
  const { menu } = useContext(MenuContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link className="textt" to={'/'}>
          <img className="fotologo" src={logo} alt=""/>
          <p className='baixfoto'>LA TRAVESSA</p>
        </Link>
      </div>
        {/* pasem el contexte i el setMenu es seteja cada volta que canvia de localització */}
        {/* si dona la casualitat que te el valor del hookmenu concideix en el elemnt */}
        {/* li afegim un element <hr/> que el que fa es crear una linia per a destacar */}
        <ul className="nav-menu">
        <li><Link className="link-style" to='/'>INICI</Link>{menu==="inici" ? <hr/> : <></>}</li>
        <li><Link className="link-style" to='/menu'>MENÚ</Link>{menu==="menu" ? <hr/> : <></>}</li>
        { user && role === "admin" ? (
          <li><Link className='link-style' to='/nproducte'>PRODUCTE</Link>{menu==="nproducte" ? <hr/> : <></>}</li>
        ) : (
          <>
          <li><Link className="link-style" to='/galeria'>GALERIA</Link>{menu==="galeria" ? <hr/> : <></>}</li>
          <li><Link className="link-style" to='/nosaltres'>NOSALTRES</Link>{menu==="nosaltres" ? <hr/> : <></>}</li>
        </>
        )}
      </ul>
      <div className="nav-login-cart">
        {/* mirar com fer si un usuari esta ja loggejat aparega logout */}
        {user ? (
          <button onClick={logout}>LOGOUT</button>
        ) : (
          <Link to='/login'>
            <button>LOGIN</button>
          </Link>
        )}
        <Link to='/cart'><img className="fotocarro" src={cart_icon} alt=''/></Link>
        <div className="nav-cart-count">{itemCount}</div>
      </div>
    </div>
  )
}
