import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavBar} from './Components/NavBar';
import AddProduct from './Screens/AddProduct';
import {Cart, addToCart} from './Screens/Cart';
import React, {useState} from 'react';


function App() {
  const [availableItems, setAvailableItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  const addAvailableItems = (newItem) => {
    setAvailableItems([...availableItems, newItem]);
    console.log('producto agregado:', newItem);

  }

  return (
    <div className='App'>
      <header>
        <h1>Lista del shopping</h1>
      </header>
      <div>
        <Router className='Bar-Nav'>
          <NavBar/>
          <Routes>

            <Route 
            className='elemento'
            path='/AddProduct'
            element={<AddProduct addToAvailableItems={addAvailableItems}/> }
            />

            <Route 
            className='elemento'
            path='/Cart'
            element={<Cart availableItems={availableItems} cartItems={cartItems} setCartItems={setCartItems} setAvailableItems={setAvailableItems} />}
            />
          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
