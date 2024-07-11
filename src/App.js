import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import BookingPage from "./pages/BookingPage.js";
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
  );
}

export default App;
