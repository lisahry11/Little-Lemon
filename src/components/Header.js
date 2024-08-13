import React from 'react'
import './style/header.css';
import restaurantfood from './images/restaurantfood.jpg'

function Header() {

    return (
        
    <header className='container-header'>
      <div>
       <h1>Little Lemon</h1>
         <h1>Chigago</h1>
       <p>At little lemon we offer a variety of different Mediterranean foods to pick from!</p>
        <button className='button-1'>Reserve a table</button>
        </div>
      <img src={restaurantfood} className='image-1' alt='restaurant-food'/>
```</header>
    

    );
    }

    export default Header;