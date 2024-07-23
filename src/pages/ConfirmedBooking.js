import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


function ConfirmedBooking() {

    const navigate = useNavigate()

    const confirmStyle= {
        padding: 10, 
        borderRadius: 10,
        alignContent: 'center', 
        justifyContent: 'center',
    }

    return (
        <>
        <Navigation/>
         <h1>Your reservation is confirmed. We will see you at, ---. We look forward to serving you! </h1>
         <button style={confirmStyle} onClick={()=> navigate('/')}>Back to home</button>
        <Footer/>
        </>
    );
}

export default ConfirmedBooking;



