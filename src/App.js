import React from 'react';
import './App.css';
import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <Routes>
        {/*<Route path='/' element={<Home />} />*/}
        <Route path='/about-us' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Navigation />
      <Header />
      <Main />
      <About />
      <Footer />

    </div>
  );
}

export default App;
