// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 

// --- CORE COMPONENTS ---
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Loader from './components/Loader';
import Home from './components/Home';

// --- MAIN PAGE COMPONENTS ---
import AboutBey from './components/AboutBey'; 
import PortfolioSection from './components/PortfolioSection'; 

// --- SERVICE & PAGE IMPORTS (Placeholders) ---
import DigitalMarketing from './pages/DigitalMarketing'; 
const Team = () => <div>Team Page Content</div>;
const Contact = () => <div>Contact Us Page Content</div>;
const Services = () => <div>Services Overview Page Content</div>; 
const OdooPage = () => <div>Odoo ERP Implementation Page Content</div>;
const SoftwareDevelopment = () => <div>Software Development Page Content</div>;
const MobileApplication = () => <div>Mobile Application Development Page Content</div>;
const EnterpriseApplication = () => <div>Enterprise Application Development Page Content</div>;
const SystemIntegration = () => <div>System Integration Page Content</div>;

import './index.css';

// Component to manage conditional loading logic
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // 💥 NEW LOGIC: Loader appears if we are on the Home page.
  // It is set to true/false based purely on the route and the timer.
  const [showLoader, setShowLoader] = useState(isHomePage);
  
  const TOTAL_ANIMATION_TIME_MS = 2300; // Time needed for logo animation (1.9s + margin)

  useEffect(() => {
    // 💥 The loader runs every time the route changes to Home.
    if (isHomePage) {
      // 1. Set showLoader to true immediately when the component renders on the Home route
      setShowLoader(true);
      
      // 2. Hide the loader after the animation completes
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, TOTAL_ANIMATION_TIME_MS);

      return () => clearTimeout(timer); // Cleanup the timer on unmount or route change
    } 
    
    // 3. Ensure the loader is hidden immediately on all other routes
    if (!isHomePage) {
      setShowLoader(false);
    }

  }, [isHomePage]); // Dependency on the route changes

  // --- Render Logic ---
  return (
    <>
      {/* Conditionally render the Loader */}
      {showLoader && <Loader />} 

      {/* Main application structure */}
      <Navbar /> 
      
      <Routes>
        {/* 1. Top-Level Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutBey />} />
        {/* ... (rest of your routes) ... */}
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<PortfolioSection />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/odoo-erp" element={<OdooPage />} />
        <Route path="/services/mobile" element={<MobileApplication />} />
        <Route path="/services/enterprise" element={<EnterpriseApplication />} />
        <Route path="/services/integration" element={<SystemIntegration />} />

      </Routes>
      
      <Footer />
    </>
  );
}

// Main App Component to provide the Router context
export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}