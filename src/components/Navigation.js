import React from 'react'
import logo from './images/logo.jpg'
import './style/navigation.css'

import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav className='navbar'>
               <span> <li >
                    <img src={logo} alt="logo" />
                </li></span> 
                <span>
                <li >
                    <Link to="/" >Home</Link>
                </li>
                </span>
                <span>
                <li>
                    <Link to="/about" >about us</Link>
                </li>
                </span>
                <span>
                <li>
                    <Link to="/booking" >Book resrevation</Link>
                </li>
            </span>
        </nav>


    );
};

export default Navigation;

