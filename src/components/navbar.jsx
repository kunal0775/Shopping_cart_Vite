import React from 'react'
import '../styling/components/navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
const navigate = useNavigate();

const handleNavigate = (path) => {
  console.log("path is", path);
  
    navigate(path);
}
  return (
    <div className='nav-container'>
        <div className='nav-box'>

                {/* Shopping logo */}
                <img className='logo-pointer' width="4%" src="shopify.png" alt=" " onClick={()=>handleNavigate('/')}/>

                {/* Search Input */}
                <div className='input-box'>
                <FaSearch style={{ marginRight: '8px' }} />
                <input type="text" placeholder='search the items'/>
                </div>



                {/* Cart logo */}
            <div className='nav-links'>
              <div className='cart-flex'>
                <img width="40%" src="icon-cart.png" alt=" " onClick={()=>handleNavigate('/cart-page')}/>
                <p>Cart</p>
              </div>
              <p className='login' onClick={()=>handleNavigate('/login-page')}>Login</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar;