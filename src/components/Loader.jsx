// src/components/Loader.jsx
import React from 'react';
import './Loader.css';
import mainLogo from '../assets/Main-Logo-01.png'; 

const Loader = () => {
  return (
    <div className="loader-overlay">
      <img 
        src={mainLogo} 
        alt="Beytech Software Group Logo Loading" 
        className="loading-logo" 
      />
    </div>
  );
};

export default Loader;