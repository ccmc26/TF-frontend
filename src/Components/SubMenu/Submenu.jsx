import React from 'react'
import { Link } from 'react-router-dom'
import './Submenu.css'

const Submenu = () => {
  return (
    <div className='submenu'>
        <ul>
            <li><Link className='text' to='/nproducte/afegir'>AFEGIR</Link></li>
            <li><Link className='text' to='/nproducte/update'>ACTUALITZAR</Link></li>
            <li><Link className='text' to='/nproducte/delete'>ELIMINAR</Link></li>
            <li><Link className='text' to=''>COMANDES</Link></li>
        </ul>
    </div>
  )
}

export default Submenu;
