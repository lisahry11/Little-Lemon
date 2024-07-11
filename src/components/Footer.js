import React from 'react'
import './style/footer.css';
import logo from './images/logo.jpg'
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"
import facebook from "./images/facebook.png"


const Footer = () => {
    return (
        <footer>
            <ul className='container'>
                <span className='contact-info'>
                    <li><a href="contact">contact</a></li>
                    <li><a href="address">address</a></li>
                    <li><a href="email">email</a></li>
                    <li><a href="phone-number">phone number</a></li>
                </span>
                <span className='footer-logo'>
                    <li><img src={logo} alt="little Lemon logo" ></img></li>
                </span>
                <span className='socials'>
                    <li><img src={instagram} alt="instagram" style={{ width: 25, height: 25 }}></img></li>
                    <li><img src={twitter} alt="twitter" style={{ width: 25, height: 25 }}></img></li>
                    <li> <img src={facebook} alt="facebook" style={{ width: 25, height: 25 }}></img></li>
                </span>
            </ul>
        </footer>
    );
}

export default Footer;