import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const initializeTimes = () => [];

function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATED_TIMES':
            return action.times;    // Use the times from API response
        case 'RESET_TIMES':
            return initializeTimes();
        default:
            return state;
    }
}

function BookingPage() {

    const [date, setDate] = useState('');
    const [times, dispatch] = useReducer(updateTimes, initializeTimes());
    const [selectedTime, setSelectedTime] = useState('')
    const [amount, setAmount] = useState('');
    const [occasion, setOccasion] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch('/bookingData.json');
            const data = await response.json();

            const dayOfWeek = new Date(date).toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
            const availableTimes = data[dayOfWeek] || [];
            dispatch({ type: 'UPDATED_TIMES', times: availableTimes });
        };

        fetchAPI();
    }, [date]);



    const handleClick = (e) => {
        e.preventDefault();
    }

    const resetFunction = () => {
        setDate('');
        dispatch({ type: 'RESET_TIMES' });
        setAmount('');
        setOccasion('');
        console.log('form reset');
    };

    return (
        <>
            <Navigation />
            <h1>This is the booking page</h1>
            <p style={{ color: 'black' }}>Please fill out the form and submit your responses</p>        {/*EXAMPLE OF INLINE STYLING*/}

            <BookingForm   /*ALL OF THESE ARE BEING PASSED TO CHILD*/
                date={date}
                times={times}
                amount={amount}
                occasion={occasion}
                handleClick ={handleClick}
                resetFunction={resetFunction}
                setDate={setDate} /*DO NOT FORGET TO ADD SET FOR PROPS THAT NEEDS TO BE PASSED TO CHILD AS WELL*/
                dispatch={dispatch}
                setSelectedTime={setSelectedTime}
                selectedTime={selectedTime}
                setAmount={setAmount}
                setOccasion={setOccasion} />

            <Footer />
        </>
    );
}

export default BookingPage;


