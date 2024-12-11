import React from 'react';
import './Footer.css'; 

import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoPinterest, IoLogoTwitch, IoLogoYoutube, IoIosRestaurant  } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre nosaltres</h4>
          <p>Som un ecommerce de menjar per emportar que ofereix una 
            àmplia selecció de plats preparats amb ingredients frescos 
            i locals, pensats per gaudir des de la comoditat de casa 
            teva</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><Link className='link-text' to='/'>INICI</Link></li>
            <li><Link className='link-text' to='/menu'>MENÚ</Link></li>
            {/* canviar les dos rutes de baix */}
            <li><Link className="link-text" to='/galeria'>GALERÍA</Link></li>
            <li><Link className="link-text" to='/'>NOSALTRES</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Segueix-nos</h4>
          <ul>
              <li>
                <IoLogoInstagram />
                <IoLogoFacebook />
                <IoLogoTwitter />
              </li>
              <li>
                <IoLogoPinterest />
                <IoLogoTwitch />
                <IoLogoYoutube />
              </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacta'ns</h4>
          <p>Email: info@fals.com</p>
          <p>Phone: +34 234 567 890</p>
          <p><IoIosRestaurant />Adreça: </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};


