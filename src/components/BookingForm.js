import React from "react";

const BookingForm = ({ Date, Time, Amount, Occasion, handleClick, resetFunction, setDate, setTime, setAmount, setOccasion }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick(); // Handle form submission in parent component
    }

    const handleReset = () => {
        resetFunction(); // Handle form reset in parent component
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">*Choose Date:
                    <select required type="date" value={Date} onChange={(e) => setDate(e.target.value)}>
                        <option value='7/11/24'>7/11/24</option>
                        <option value='7/12/24'>7/12/24</option>
                        <option value='7/13/24'>7/13/24</option>
                        <option value='7/14/24'>7/14/24</option>
                        <option value='7/15/24'>7/15/24</option>
                        <option value='7/16/24'>7/16/24</option>
                        <option value='7/17/24'>7/17/24</option>
                    </select>
                </label>
                <br />
                *Please note we only book reservation a week in advance
                <label htmlFor="res-time">*Time:
                    <select required id="time" value={Time} onChange={(e) => setTime(e.target.value)}>
                        <option value='5:30'>5:30</option>
                        <option value='6:00'>6:00</option>
                        <option value='6:30'>6:30</option>
                        <option value='7:00'>7:00</option>
                        <option value='7:30'>7:30</option>
                    </select>
                </label>
                <label htmlFor="guest">*Number of guest:
                    <input required type="number" min={1} max={13} value={Amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <label htmlFor="occation">
                    <select optional id="occasion" value={Occasion} onChange={(e) => setOccasion(e.target.value)}> occasion:
                        <option value='birthday'>Birthday</option>
                        <option value='engagement'>Engagement</option>
                        <option value='annivarsary'>Annivarsary</option>
                    </select>
                </label>
                <button type="submit" >Submit</button>
                <button type="reset" onClick={handleReset}>reset</button>
            </form>
        </>
    );
};

export default BookingForm;

