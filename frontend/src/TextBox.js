import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';


export default function Textbox() {
  return (
    <div>
      <Header/>
        <div className='container'>
      <div className='image-container'>
        <img className="bg" src='group4.png'alt='bg' />
      </div>
      <div className='image-container'>
        <img className="bg" src='group3.png'alt='bg' />
      </div>
      <div className='image-container'>
        <img className="bg" src='group5.png'alt='bg' />
      </div>
    </div>
    
    <Footer/>
    </div>
  );
}
