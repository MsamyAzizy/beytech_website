// src/components/ClientLogosSection.jsx
import React from 'react';
import './ClientLogosSection.css';
import BeyVideo from '../assets/bey.mp4'; // Imported background video

// Imported client logos
import AfrinnexLogo from '../assets/Afrimex_Financing-removebg-preview.png';
import EETLogo from '../assets/E-AND-E-TRANSPOTERS-LIMITED.png';
import JofachLogo from '../assets/Jofach-Financial-Services.png';
import KinokoLogo from '../assets/kinoko-logo.png';
import ScreenshotLogo from '../assets/Screenshot_from_2025-01-25_14-41-57-removebg-preview.png';
import TaxDeanLogo from '../assets/Tax-Dean-Associates.png';
import VFPLogo from '../assets/VFP-LOGO-TRANSPARENT-1.png';


const clientData = [
    { name: "Afrinnex Financing", logoSrc: AfrinnexLogo },
    { name: "Tax Dean Associates", logoSrc: TaxDeanLogo },
    { name: "Jofach Financial Services", logoSrc: JofachLogo },
    { name: "E&E Transporters", logoSrc: EETLogo },
    { name: "VFP Logo", logoSrc: VFPLogo },
    { name: "Kinoko Logo", logoSrc: KinokoLogo },
    { name: "Screenshot Logo", logoSrc: ScreenshotLogo },
];

const clientLogosForAnimation = [...clientData, ...clientData];


const ClientLogosSection = () => {
    return (
        <section className="client-map-section">
            
            {/* Background Video and Overlay */}
            <video autoPlay loop muted playsInline className="cl-background-video">
                <source src={BeyVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="cl-video-overlay"></div> 
            
            <div className="client-map-overlay">
                
                <div className="client-map-content">
                    <h2 className="cl-heading">
                        Trusted by companies small and large around the globe
                    </h2>
                    
                    {/* Centered CTA Button */}
                    <button className="cl-cta-button">
                        See our customer stories
                    </button>
                </div>

                {/* Logo Strip Container at the bottom of the section */}
                {/* 💥 NEW: Outer container for centering */}
                <div className="client-logo-strip-outer"> 
                    <div className="client-logo-strip-wrapper">
                        <div className="client-logo-carousel">
                            <div className="logo-track">
                                {clientLogosForAnimation.map((client, index) => (
                                    <div className="logo-strip-item" key={index}>
                                        <img src={client.logoSrc} alt={client.name} className="client-logo-image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogosSection;