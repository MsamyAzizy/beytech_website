// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar'; 
import Hero from './Hero'; 
// Updated import: Removing the placeholder name and adding the concrete EventPromoSection
import EventPromoSection from './EventPromoSection'; 
import ClientLogosSection from './ClientLogosSection'; 
import TeamSection from './TeamSection'; 
import ServicesSection from './ServicesSection'; 
// *** NEW IMPORT ***
import ContactSection from './ContactSection'; 
import Footer from './Footer'; 

const Home = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <main>
        <Hero />
        
        <ServicesSection />
        
        {/* Replaced TechFeatureSection with the specific EventPromoSection component */}
        <EventPromoSection /> 
        
        <ClientLogosSection /> 
        
        <TeamSection /> 
        
        {/* ADDED THE NEW CONTACT SECTION */}
        <ContactSection /> 
     
      </main>
      
      <Footer /> 
    </div>
  );
};

export default Home;