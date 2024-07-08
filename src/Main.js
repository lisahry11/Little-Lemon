import React from 'react';
import './main.css';
import salad from './images/salad.jpg'
import kebab from './images/kebab.jpg'
import falafel from './images/falafel.jpg'

function Main() {
    return (
   <div>
    <body className='container-2'>
    <div className='specials'>
    <h2>This weeks specials!</h2>
    <button className='button-2'>Order online</button>
    </div>
    </body>
      <main className='main'>
      <div className='boxed'>
          <img src={salad} alt='salad' />
       <h3 >Greek salad<span className='price'>$10.99</span></h3>
       <p>description</p>
       </div>
       <div className='boxed' >
       <img src={kebab} alt='kebab'/>
       <h3>Kebab <span className='price'>$11.99</span></h3>
       <p>description</p>
       </div>
       <div className='boxed'>
       <img src={falafel} alt='falafel'/>
       <h3>Falafel sandwich <span className='price'>$12.50</span></h3>
       <p>description</p>
       </div>
    </main>
    </div>
    );
    }

    export default Main;