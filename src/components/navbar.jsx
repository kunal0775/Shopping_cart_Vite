import React from 'react'
import '../styling/components/navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

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
                <FaSearch size={18} style={{ marginRight: '8px' }} />
                <input type="text" placeholder='search the items'/>
                </div>

                {/* Cart logo */}
            <div className='flexBox'>
              <img width="40%" src="icon-cart.png" alt=" " onClick={()=>handleNavigate('/cart-page')}/>
                <p>Cart</p>
            </div>
        </div>

    </div>
  )
}

export default NavBar;