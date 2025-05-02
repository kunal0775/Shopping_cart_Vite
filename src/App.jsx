import React from 'react';
import './App.css';
import HomePage from './home/page';
import CartPage from './cart-page/page';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './login-page/login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
