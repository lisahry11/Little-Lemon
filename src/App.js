import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import BookingPage from "./pages/BookingPage.js";
import {  Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './pages/ConfirmedBooking.js';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/booking/confirmed' element={< ConfirmedBooking/>} />
      </Routes>
  );
}

export default App;
