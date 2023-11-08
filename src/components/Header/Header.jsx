import React from 'react';
import './Header.css'
import logo from '../../../public/logo.png'
const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div className='nav'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;