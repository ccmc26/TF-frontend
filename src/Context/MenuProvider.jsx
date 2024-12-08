import React, { useEffect, useState } from 'react'
import { MenuContext } from './MenuContext';
import { useLocation } from 'react-router-dom';

const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState('inici');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        switch(path){
            case "/":
                setMenu('inici');
                break;
            case "/menu":
                setMenu('menu');
                break;
            case "/galeria":
                setMenu('galeria');
                break;
            case "/nosaltres":
                setMenu('nosaltres');
                break;
            case "/nproducte":
                setMenu('nproducte');
                break;
            default:
                setMenu('noimporta');
                break;
        }
    }, [location])

  return (
    <MenuContext.Provider value={{menu, setMenu}}>
        { children }
    </MenuContext.Provider>
  )
}

export default MenuProvider;
