import React from 'react'
import './header.css';
import restaurantfood from './images/restaurantfood.jpg'

function Header() {

    return (
        
    <header className='header'>
       <h1>Little Lemon</h1>
       <div>
         <h1>Chigago</h1>
       </div>
       <p>At little lemon we offer a variety of different Mediterranean foods to pick from!</p>
        <button className='button-1'>Reserve a table</button>
      <img src={restaurantfood} className='image-1' alt='restaurant-food'/>
```</header>
    

    );
    }

    export default Header;