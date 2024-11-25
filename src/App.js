import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { AppRoutes } from './Routes/AppRoutes';
import { Footer } from './Components/Footer/Footer';


function App() {
  const [menu,setMenu] = useState("inici");
  const [cartItems, setCartItems] = useState([]);

  const handleMenuSelect = (menuItem) => {
    setMenu(menuItem);
  }; 

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems((prevItems) => 
      prevItems.filter((product) => product !== productToRemove));
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar menu={menu} setMenu={handleMenuSelect} cartItems={cartItems}/>
          <div className="content">
            <AppRoutes 
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
              cartItems={cartItems}
            />
          </div>
        <Footer setMenu={handleMenuSelect}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
