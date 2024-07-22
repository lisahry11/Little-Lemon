import React, { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


const initializeTimes =()=> []

function updateTimes(date, action) {
    switch (action.type) {
        case 'UPDATED_TIMES':
            const currentDate = new Date(action.date);
            const dayOfTheWeek = currentDate.getDay();
            return dayOfTheWeek === 0 || dayOfTheWeek === 6 ?
                ['5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30'] :
                ['5:00', '5:30', '6:00', '6:30', '7:00', '7:30'];
        
        case 'RESET_TIMES':
            return initializeTimes();
        
        default:
            return date;
    }
}


function BookingPage() {

    const [date, setDate] = useState('');
    const [times, dispatch] = useReducer(updateTimes, initializeTimes());
    const [selectedTime, setSelectedTime]=useState('')
    const [amount, setAmount] = useState('');
    const [occasion, setOccasion] = useState('');


    const handleClick = (e) => {
        e.preventDefault();
        alert('Thank you for booking with us!');
    };

    const resetFunction = () => {
        setDate('');
        dispatch({ type: 'RESET_TIMES'});
        setAmount('');
        setOccasion('');
        console.log('form reset');
    };

    return (
        <>
            <Navigation />
            <h1>This is the booking page</h1>
            <p style={{ color: 'black' }}>Please fill out the form and submit your responses</p>        {/*EXAMPLE OF INLINE STYLING*/}

            <BookingForm
                date={date}
                times={times}
                amount={amount}
                occasion={occasion}
                handleClick={handleClick}
                resetFunction={resetFunction}
                setDate={setDate} /*DO NOT FORGET TO ADD SET FOR PROPS THAT NEEDS TO BE PASSED TO CHILD AS WELL*/
                dispatch={dispatch}
                setSelectedTime = {setSelectedTime}
                selectedTime ={selectedTime}
                setAmount={setAmount}
                setOccasion={setOccasion} />
            <Footer />
        </>
    );
}

export default BookingPage;


