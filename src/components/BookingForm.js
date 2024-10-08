import React from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ date, times, amount, occasion, selectedTime, setSelectedTime, handleClick, resetFunction, setDate, setAmount, setOccasion }) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick(e); // MUST CALL FUNCTION FROM PARENT COMPONENT INSIDE FUNCTION ON CHILD (DONT FORGET TO ADD THE EVENT OBJECT, e)
        navigate('/booking/confirmed')
    }

    const handleReset = () => {
        resetFunction(); // MUST CALL FUNCTION FROM PARENT COMPONENT INSIDE FUNCTION ON CHILD
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);       //don't need to use dispatch since useEffect will update times
    }

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setSelectedTime(selectedTime);
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
                <header>
                    <h1>BOOK NOW!!</h1>
                </header>
                <label htmlFor="res-date">*Choose Date:
                    <input required id="res-date" type="date" value={date} onChange={handleDateChange}>
                    </input>
                </label>
                <br />
                *Please note we only book reservation a week in advance
                <label htmlFor="res-time">*Time:
                    <select required aria-required='true' id="res-time" value={selectedTime} onChange={handleTimeChange}>   {/*value needs to be selectedTime*/}
                        {times.map((t, index) => (
                            <option key={index} value={t}> {t}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="guest-number">*Number of guest:
                    <input required id='guest-number'type="number" min={1} max={13} value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <label htmlFor="occasion">
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}> Occasion:
                        <option value='birthday'>Birthday</option>
                        <option value='engagement'>Engagement</option>
                        <option value='anniversary'>Anniversary</option>
                    </select>
                </label>
                <button aria-label='submit the form' type="submit" >Submit</button>
                <button type="reset" aria-label='reset the form' data-testid='reset-button' onClick={handleReset}>reset</button>
            </form>
        </>
    );
};

export default BookingForm;

