// src/components/Loader.jsx
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-grid">
        {/* We'll create 9 squares for a 3x3 grid */}
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
};

export default Loader;