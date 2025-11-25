// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // *** NEW: Import Router components ***

import Home from './components/Home';
// *** NEW: Import the AboutBey component ***
import AboutBey from './components/AboutBey'; 
import Footer from './components/Footer'; // Assuming Footer is needed outside the Loader

import Loader from './components/Loader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or content loading time
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3500); 

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // --- Render Logic ---
  if (isLoading) {
    return <Loader />; // Show Loader on its own while loading
  }

  // Show the main application structure (with routing) once loading is complete
  return (
    <Router>
      
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the new About page */}
        <Route path="/about" element={<AboutBey />} /> 
        
        {/* You can add more routes here (e.g., path="/services") */}
      </Routes>
      
      <Footer /> {/* Footer stays outside Routes to appear on all pages */}
    </Router>
  );
}

export default App;