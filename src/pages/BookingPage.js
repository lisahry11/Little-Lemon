import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BookingPage = () =>  {

        const [Date, setDate] = useState('');
        const [Time, setTime] = useState('6:00');
        const [Amount, setAmount] = useState('4');
        const [Occasion, setOccasion] = useState('Birthday');
    
        const handleClick = (e) => {
            e.preventDefault();
            alert('Thank you for booking with us!');
        }
    
        const resetFunction = () => {
            setDate('7/11/24');
            setTime('6:00pm');
            setAmount('4');
            setOccasion(' ');
    
            console.log('form reset')
        }

    return (
        <>
            <Navigation />
            <h1>This is the booking page</h1>
            <p style={ {color: 'black'} }>Please fill out the form and submit your responses</p>
            
            <BookingForm
                date={Date}
                time={Time}
                amount={Amount}
                Occasion={Occasion}
                handleClick={handleClick}
                resetFunction={resetFunction}
                setDate={setDate}
                setTime={setTime}
                setAmount={setAmount}
                setOccasion={setOccasion}
            />
        
            <Footer />
        </>
    );
};

export default BookingPage;


