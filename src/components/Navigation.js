import React from 'react'
import logo from './images/logo.jpg'
import './style/navigation.css'
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav>
            <ul className='navbar'>

                <li> <Link><img src={logo} alt="Logo" /></Link></li>

                <li >
                    <Link to="/Home" target="_blank">Home</Link> {/*code to bring down to header*/}
                </li>
                <li>
                    <Link to="/about-us" target="_blank">about us</Link>   {/*code to bring down to about section*/}
                </li>
                <li>
                    <Link to="/Login" target="_blank">Login</Link>
                </li>

            </ul>
        </nav>

    );
};

export default Navigation;

