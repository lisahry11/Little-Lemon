import React from 'react'
//import logo from './images/logo.jpg'

function Navigation() {
    return (
        <>
            <nav>
                { /*<img src={logo} alt="little Lemon logo" />*/}
                <ul>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/about-us">about us</a>
                    </li>
                    <li>
                        <a href="/menu">menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/Order-Online">Order Online</a>
                    </li>

                    <li>
                        <a href="/Login">Login</a>
                    </li>

                </ul>
            </nav>

        </>
    );
}

export default Navigation;