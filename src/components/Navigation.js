import React from 'react'
import logo from './images/logo.jpg'
import './style/navigation.css'

import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav className='navbar-container'>
            <span className='logo'>
                <li >
                    <img src={logo} alt="logo" />
                </li></span>
            <ul className='links'>
                <span>
                    <li >
                        <Link to="/" aria-label='Go to home page'>Home</Link>
                    </li>
                </span>
                <span>
                    <li>
                        <Link to="/about" aria-label='Learn more about us'>about us</Link>
                    </li>
                </span>
                <span>
                    <li>
                        <Link to="/booking" aria-label='Make a reservation'>Book resrevation</Link>
                    </li>

                </span>
            </ul>
        </nav>


    );
};

export default Navigation;

