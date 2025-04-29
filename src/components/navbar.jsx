import React from 'react'
import '../styling/components/navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-box'>

                {/* Shopping logo */}
                <img className='logo-pointer' width="4%" src="shopify.png" alt=" "/>

                {/* Search Input */}
                <div className='input-box'>
                <FaSearch size={18} style={{ marginRight: '8px' }} />
                <input type="text" placeholder='search the items'/>
                </div>

                {/* Cart logo */}
            <div className='flexBox'>
              <img width="40%" src="icon-cart.png" alt=" "/>
                <p>Cart</p>
            </div>
        </div>

    </div>
  )
}

export default NavBar;