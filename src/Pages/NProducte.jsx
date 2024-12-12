import React from 'react'
import Submenu from '../Components/SubMenu/Submenu';
import { Outlet } from 'react-router-dom';

// import { Afegir } from '../Pages/Afegir';

const NProducte = () => {
  return (
    <div>
      <Submenu/>
      <Outlet/>
    </div>
  )
}

export default NProducte;
