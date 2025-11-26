// src/components/Home.jsx 

import React from 'react';
import Hero from './Hero'; 
import AboutSection from './AboutSection'; 
import EventPromoSection from './EventPromoSection'; 
import ClientLogosSection from './ClientLogosSection'; 
import TeamSection from './TeamSection'; 
import ServicesSection from './ServicesSection'; 
import PortfolioSection from './PortfolioSection'; 
import ContactSection from './ContactSection'; 


const Home = () => {
  return (
    <div className="homepage-content"> 
      <main>
        <Hero />
        <ServicesSection />
        <EventPromoSection /> 
        <PortfolioSection /> 
        <ClientLogosSection /> 
        <AboutSection />
        <TeamSection /> 
        <ContactSection /> 
      </main>
    </div>
  );
};

export default Home;