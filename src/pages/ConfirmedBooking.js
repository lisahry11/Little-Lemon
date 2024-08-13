import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


function ConfirmedBooking() {

    const navigate = useNavigate()

    const confirmContainer = {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',

    }

    const confirmStyle = {
        padding: 10,
        borderRadius: 10,
    }

    return (
        <>
            <Navigation />
            <div style={confirmContainer}>
                <h1>Your reservation is confirmed. We will see you at, ---. We look forward to serving you! </h1>

                <button style={confirmStyle} onClick={() => navigate('/')}>Back to home</button>
            </div>
            <Footer />
        </>
    );
}

export default ConfirmedBooking;



