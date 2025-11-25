// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar'; 
import Hero from './Hero'; 
// *** NEW IMPORT: About Section ***
import AboutSection from './AboutSection'; 
import EventPromoSection from './EventPromoSection'; 
import ClientLogosSection from './ClientLogosSection'; 
import TeamSection from './TeamSection'; 
import ServicesSection from './ServicesSection'; 
// *** NEW IMPORT: Portfolio Section ***
import PortfolioSection from './PortfolioSection'; 
import ContactSection from './ContactSection'; 
import Footer from './Footer'; 

const Home = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <main>
        <Hero />
        
        {/* ADDED THE NEW ABOUT SECTION */}
        
        
        <ServicesSection />
        
        {/* Replaced TechFeatureSection with the specific EventPromoSection component */}
        <EventPromoSection /> 
     
        
        {/* ADDED THE NEW PORTFOLIO/PROJECTS SECTION */}
        <PortfolioSection /> 
           
        <ClientLogosSection /> 
        <AboutSection />
        
        <TeamSection /> 
        
        {/* ADDED THE NEW CONTACT SECTION */}
        <ContactSection /> 
     
      </main>
      
      <Footer /> 
    </div>
  );
};

export default Home;