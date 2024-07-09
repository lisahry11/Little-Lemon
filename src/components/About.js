import React from 'react';
import './style/about.css';
import owners from './images/Mario-Adrian.jpg';

function About() {
    return (
        <section className='about'>
            <div>
            <h2>About us</h2>
            <p>We are a family owned Mediterian restaurant that serves a bunch of different recipes. </p>
            </div>
            <img src={owners} alt='restaurant onwers' className='image-2'/>
        </section>
        
    );
}

export default About;