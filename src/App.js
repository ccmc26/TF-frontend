import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes/AppRoutes';

import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

import CartProvider from './Context/CartProvider';
import AuthProvider  from './Context/AuthProvider';
import MenuProvider from './Context/MenuProvider';


function App() {

  return (
    <div className='App'>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <MenuProvider>
              <Navbar/>
                <AppRoutes/>
              <Footer/>
            </MenuProvider>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
