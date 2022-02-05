import React from 'react';
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Products from './components/Products';
import Cart from './components/Cart';

const App = (props) => {
  return (
    <div className='App'>
      <h1>Book Shop</h1>
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default connect()(App);
