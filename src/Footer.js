import React from 'react'
{/*import logo from './src/images/logo.jpg'
import instagram from "./src/images/instagram.png"
import twitter from "./src/images/twitter.png"
import facebook from "./src/images/facebook.png"*/}


function Footer() {
    return (
        <footer>
            <ul>
                <li><a href="contact">contact</a></li>
                <li><a href="address">address</a></li>
                <li><a href="email">email</a></li>
                <li><a href="phone-number">phone number</a></li>
                {/*<img src={logo} alt="little Lemon logo"></img>
        <img src={instagram} alt="instagram"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={facebook} alt="facebook"></img>*/}
            </ul>
        </footer>
    );
}

export default Footer;