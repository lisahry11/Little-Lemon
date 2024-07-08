import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer";



function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
