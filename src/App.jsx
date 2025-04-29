import React from 'react'
import './App.css'
import HomePage from "./home/page";
import CartPage from "./cart-page/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/home/page" element={<HomePage />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </BrowserRouter> */}
    <HomePage />
    <CartPage />
    </>
  )
}

export default App
