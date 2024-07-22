import React from "react";

const BookingForm = ({ date, times, amount, occasion, selectedTime, setSelectedTime,  handleClick, resetFunction, setDate, dispatch, setAmount, setOccasion }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick(e); // MUST CALL FUNCTION FROM PARENT COMPONENT INSIDE FUNCTION ON CHILD (DONT FORGET TO ADD THE EVENT OBJECT, e)
    }

    const handleReset = () => {
        resetFunction(); // MUST CALL FUNCTION FROM PARENT COMPONENT INSIDE FUNCTION ON CHILD
    }

    const handleDateChange =(e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATED_TIMES', date: selectedDate });

    }

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setSelectedTime(selectedTime);
        dispatch({ type: 'UPDATED_TIMES', time: selectedTime }); 
    }

    const formStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
        gap: 40,
       
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={formStyle}>
                <heading>
                    <h1>BOOK NOW!!</h1>
                </heading>
                <label htmlFor="res-date">*Choose Date:
                    <input required type="date" value={date} onChange={handleDateChange}>
                </input>
                </label>
                <br />
                *Please note we only book reservation a week in advance
                <label htmlFor="res-time">*Time:
                    <select id="time" value={times} onChange={handleTimeChange}>
                        {times.map((t, index) => (
                            <option key={index} value={t}> {t}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="guest">*Number of guest:
                    <input required type="number" min={1} max={13} value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <label htmlFor="occasion">
                    <select  id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}> Occasion:
                        <option value='birthday'>Birthday</option>
                        <option value='engagement'>Engagement</option>
                        <option value='annivarsary'>Annivarsary</option>
                    </select>
                </label>
                <button type="submit" >Submit</button>
                <button type="reset" data-testid='reset-button' onClick={handleReset}>reset</button>
            </form>
        </>
    );
};

export default BookingForm;

