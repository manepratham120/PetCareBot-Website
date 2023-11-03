// src/components/Header.js
import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot.js';
import SignupPage from './SignupPage.js';
import { Button } from '@chakra-ui/react';
import About from './About';

 

function Header() {
  return (
    <header className='navv'>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="logo1.png" width="60" height="50" alt="Logo"/>
            <div> FurEverHome</div>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            
            <Link to="/" className="navbar-item colors">
              Home
            </Link>

            <Link to="/chatbot" element = {<Chatbot />} className="navbar-item bold">
              Chatbot
            </Link>

            <Link to="/about" element = {<About />} className="navbar-item bold">
              About
            </Link>


            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Our services
              </a>

              <div className="navbar-dropdown">
                <Link to="/about" className="navbar-item">
                  pet grooming
                </Link>
                <Link to="/Adoption" className="navbar-item">
                  Adoption
                </Link>
                <Link to="/Community" className="navbar-item">
                  Community Forums
                </Link>
                <hr className="navbar-divider"/>
                <Link to="/report" className="navbar-item">
                  Emergency Resourses
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons"> 
                <a className="button">
                <Link to= "/signup" class="btn btn-success" element= {<SignupPage />}>
                   Sign up
                </Link>
                </a>
                <Link to="/login" className="button is-dark">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
       
    </header>
  );
}

export default Header;
