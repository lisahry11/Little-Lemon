import React from "react";
import About from "../components/About";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function AboutPage() {                   //DONT FORGET PARENTHESIS WHEN DEFINING A FUNCTION!!!
    return (
        <>
        <Navigation/>
        <About/>
        <Footer/>
        </>
    );

};

export default AboutPage;