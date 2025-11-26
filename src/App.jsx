// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import AboutBey from './components/AboutBey'; 
import OdooPage from './pages/OdooPage'; 
import Footer from './components/Footer'; 
// 💥 NEW: Import Navbar to be used globally
import Navbar from './components/Navbar'; 

import Loader from './components/Loader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or content loading time
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // --- Render Logic ---
  if (isLoading) {
    return <Loader />; // Show Loader on its own while loading
  }

  // Show the main application structure (with routing) once loading is complete
  return (
    <Router>
      
      <Navbar /> {/* 💥 FIX: Navbar is placed here to appear on Home, About, and Odoo pages */}
      
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the new About page */}
        <Route path="/about" element={<AboutBey />} /> 
        
        {/* NEW ROUTE: Route for the Odoo ERP Implementation page */}
        <Route path="/services/odoo-erp" element={<OdooPage />} />

        {/* You can add more routes here (e.g., path="/contact", path="/team") */}
      </Routes>
      
      <Footer /> {/* Footer stays outside Routes to appear on all pages */}
    </Router>
  );
}

export default App;