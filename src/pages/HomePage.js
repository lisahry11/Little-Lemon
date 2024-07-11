import React from 'react';
import Navigation from "../components/Navigation.js"
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import About from "../components/About.js";
import Footer from "../components/Footer.js";

function HomePage() {
    return (
        <>
            <Navigation />
            <Header />
            <Main />
            <About />
            <Footer />
        </>
    );

}

export default HomePage;