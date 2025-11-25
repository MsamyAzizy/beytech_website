// src/components/ClientLogosSection.jsx
import React from 'react';
import './ClientLogosSection.css';

// Placeholder imports for actual SVG logos:
// import dropboxLogo from '../assets/dropbox.svg'; 
// import facebookLogo from '../assets/facebook.svg';
// import googleLogo from '../assets/google.svg';
// import herokuLogo from '../assets/heroku.svg';
// import lenovoLogo from '../assets/lenovo.svg';
// import microsoftLogo from '../assets/microsoft.svg';


const clientData = [
    // Use names/text for placeholders until actual SVGs are imported
    { name: "Dropbox", icon: "Dropbox", textClass: "logo-dropbox" },
    { name: "Facebook", icon: "facebook", textClass: "logo-facebook" },
    { name: "Google", icon: "Google", textClass: "logo-google" },
    { name: "Heroku", icon: "Heroku", textClass: "logo-heroku" },
    { name: "Lenovo", icon: "Lenovo", textClass: "logo-lenovo" },
    { name: "Microsoft", icon: "Microsoft", textClass: "logo-microsoft" },
];

// Create the full track array (unique logos + duplicate logos for seamless loop)
const clientLogos = [...clientData, ...clientData];


const ClientLogosSection = () => {
    return (
        <div className="client-logos-wrapper">
            <div className="client-logos-container">
                <h2 className="cl-heading">Our Global Tech Partners</h2>
                <p className="cl-subtext">
                    Driving innovation and scale across all sectors. We empower major companies 
                    to optimize their cloud infrastructure and leverage cutting-edge AI solutions for competitive advantage.
                </p>

                <div className="logo-carousel">
                    {/* The logo-track element is where the scrolling animation is applied */}
                    <div className="logo-track">
                        {clientLogos.map((client, index) => (
                            <div className="logo-card" key={index}>
                                {/* Using <span> with specific class for placeholder text/color styling */}
                                <span className={client.textClass}>{client.icon}</span>
                                {/* If actual images were imported, you would use: 
                                <img src={client.logoSrc} alt={client.name} /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientLogosSection;