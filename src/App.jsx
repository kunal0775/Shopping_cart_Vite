import React from 'react';
import './App.css';
import HomePage from './home/page';
import CartPage from './cart-page/page';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
