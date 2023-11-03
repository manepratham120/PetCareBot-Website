import React from 'react';
import Chatbot from './Chatbot.js';
import Textbox from './TextBox.js';
import './TextBox.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import LoginPage from './LoginPage.js'; // Import the LoginPage component
import SignupPage from './SignupPage.js';

function LandingPage() {
  return (
    <Router>
       
      <Routes>
       
      
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/" element={<Textbox/>} /> 
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/signup" element={<SignupPage />} />


      </Routes>

      {/* <Textbox/> 
      <Footer /> */}
    </Router>
  );
}

export default LandingPage;
