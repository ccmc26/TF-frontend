import React from 'react'
import { Link } from 'react-router-dom'
import './Submenu.css'

export const Submenu = () => {
    // const [submenu, setSubmenu] = useState('afegir');
  return (
    <div className='submenu'>
        <ul>
            <li><Link className='text' to='/nproductes/afegir'>AFEGIR</Link></li>
            <li><Link className='text' to='/nproductes/update'>ACTUALITZAR</Link></li>
            <li><Link className='text' to='/nproductes/delete'>ELIMINAR</Link></li>
        </ul>
    </div>
  )
}
