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
import Products from './pages/Products'; 

// --- SERVICE & PAGE IMPORTS ---
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

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const LOADER_DURATION = 2000; // 2 seconds total

  useEffect(() => {
    // Only show loader on home page
    const isHomePage = location.pathname === '/';
    
    if (isHomePage) {
      // Show loader only for home page
      setIsLoading(true);
      setShowContent(false);

      const timer = setTimeout(() => {
        setIsLoading(false);
        // Small delay before showing content for clean transition
        setTimeout(() => {
          setShowContent(true);
        }, 50);
      }, LOADER_DURATION);

      return () => clearTimeout(timer);
    } else {
      // For other pages, show content immediately without loader
      setIsLoading(false);
      setShowContent(true);
    }
  }, [location.pathname]); // Re-run when route changes

  return (
    <>
      {/* Show loader ONLY on home page */}
      {isLoading && location.pathname === '/' && <Loader />}
      
      {/* Show content after loading completes or immediately for other pages */}
      {showContent && (
        <>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutBey />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/odoo-erp" element={<OdooPage />} />
            <Route path="/services/mobile" element={<MobileApplication />} />
            <Route path="/services/enterprise" element={<EnterpriseApplication />} />
            <Route path="/services/integration" element={<SystemIntegration />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}