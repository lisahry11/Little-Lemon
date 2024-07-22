import React from 'react'
import './style/footer.css';
import logo from './images/logo.jpg'
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"
import facebook from "./images/facebook.png"


const Footer = () => {
    return (
        <footer className='container'>
          
                <div className='contact-info'>
                    <li>contact</li>
                   
                    <li>address</li>
                    
                    <li>email</li>
                    
                    <li>phone number</li>
                </div>
                <span className='footer-logo'>
                    <li><img src={logo} alt="little Lemon logo" ></img></li>
                </span>
                <span className='socials'>
                    <li><img src={instagram} alt="instagram" style={{ width: 25, height: 25 }}></img></li>
                    <li><img src={twitter} alt="twitter" style={{ width: 30, height: 25 }}></img></li>
                    <li> <img src={facebook} alt="facebook" style={{ width: 25, height: 25 }}></img></li>
                </span>
            
        </footer>
    );
}

export default Footer;