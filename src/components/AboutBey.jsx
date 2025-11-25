// src/components/AboutBey.jsx
import React from 'react';
import Navbar from './Navbar'; 
import CoreValuesSection from './CoreValuesSection'; // <-- NEW IMPORT
import './AboutBey.css';
// Assuming you have an image named 'office_setup.jpg' in src/assets/
import OfficeImage from '../assets/bey1.png'; 
import BeyVideo from '../assets/bey.mp4'; 
// The rest of the component remains the same...

const AboutBey = () => {
    return (
        <div className="about-bey-page">
            <Navbar /> 
            
            {/* Top Hero Section: "Who We Are" */}
            <header className="about-hero-section">
                {/* ... video elements ... */}
                <video autoPlay loop muted playsInline className="hero-background-video">
                    <source src={BeyVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-video-overlay"></div> 
                
                <div className="hero-content">
                    <h1 className="hero-title-mains">Who We Are</h1>
                    <h1 className="hero-title-main">Control Your Business With Us</h1>
                    
                </div>
            </header>

            <main className="about-main-content-area">
                
                {/* Intro Section */}
                <section className="about-intro-section">
                    <div className="intro-container">
                        <h2 className="intro-title">ABOUT US</h2>
                        <hr className="intro-underline" />
                        <p className="intro-description">
                            Leveraging advanced technologies to deliver scalable solutions that exceed expectations.
                        </p>
                    </div>
                </section>

                {/* Story and Service Details */}
                <section className="about-details-section">
                    <div className="details-container">
                        
                        <div className="details-image-container">
                            <img 
                                src={OfficeImage} 
                                alt="Modern office interior with team members" 
                                className="details-main-image"
                            />
                        </div>
                        
                        <div className="details-text-container">
                            <div className="text-block">
                                <h3 className="story-heading">Our Story</h3>
                                <p className="story-paragraph">
                                    In 2012, MaglaTech was founded with a clear mission to transform software 
                                    development and cybersecurity solutions in Africa and beyond. Since its 
                                    inception, MaglaTech has grown from a startup incubator, to a high-growth 
                                    technology company serving clients across the globe.
                                </p>
                            </div>
                            
                            <div className="text-block">
                                <h3 className="service-heading">In Software Development</h3>
                                <p className="service-paragraph">
                                    We address the evolving social and business technology challenges by defining, 
                                    designing, and developing applications tailored to meet our community's 
                                    requirements.
                                </p>
                            </div>

                            <div className="text-block">
                                <h3 className="service-heading">In Cyber Security</h3>
                                <p className="service-paragraph">
                                    Our comprehensive security services ensure data integrity and compliance, 
                                    protecting your digital assets from emerging threats with proactive defense strategies.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                
                {/* INSERTED: Core Values Section with Video Background */}
                <CoreValuesSection />
                
            </main>
        </div>
    );
};

export default AboutBey;