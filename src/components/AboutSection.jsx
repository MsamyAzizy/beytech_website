// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';
import { FaUserShield, FaClock, FaHandshake } from 'react-icons/fa'; // Icons for the principle cards

// Placeholder image for the main visual
import AboutImage from '../assets/CCTV.jpeg'; 

const AboutSection = () => {
    return (
        <section className="about-section-new">
            <div className="about-content-wrapper-new">

                {/* Top Header */}
                <div className="about-header-new">
                    <h2 className="about-title-new">About</h2>
                    <p className="about-subtitle-new">
                        Necessitatibus eius consequuntur ex aliquid fuga eum quidem sint consectetur velit.
                    </p>
                </div>

                {/* Main Content: Image and Text Block */}
                <div className="about-main-content-new">
                    <div className="about-image-container-new">
                        {/* Placeholder image from your reference */}
                        <img 
                            src={AboutImage} 
                            alt="Three team members shaking hands" 
                            className="about-main-image-new"
                        />
                    </div>
                    
                    <div className="about-text-block-new">
                        <h3 className="about-vision-heading-new">Our Visionary Endeavors</h3>
                        <p className="about-vision-description-new">
                            Discover how our diverse range of services can empower your business to 
                            achieve greater efficiency and growth in a competitive landscape. 
                        </p>
                        <p className="about-vision-description-new">
                            We provide expert consultancy and practical tools designed to streamline your 
                            operations, enhance productivity, and maximize your return on investment. Our 
                            committed team of professionals is dedicated to helping you navigate challenges 
                            and seize opportunities.
                        </p>
                        <button className="about-discover-button-new">
                            Discover Our Story
                        </button>
                    </div>
                </div>

                {/* Bottom Card Principles/Stats */}
                <div className="about-principles-grid-new">
                    
                    <div className="principle-card-new">
                        <FaUserShield className="principle-icon-new" />
                        <h4 className="principle-heading-new">Our Core Principles</h4>
                        <p className="principle-description-new">
                            We adhere to a strict set of values focused on integrity, innovation, and 
                            client satisfaction in every aspect.
                        </p>
                    </div>

                    <div className="principle-card-new">
                        <FaClock className="principle-icon-new" />
                        <h4 className="principle-heading-new">Our Journey So Far</h4>
                        <p className="principle-description-new">
                            Since our inception, we have continuously evolved to meet the dynamic needs 
                            of the global market effectively.
                        </p>
                    </div>

                    <div className="principle-card-new">
                        <FaHandshake className="principle-icon-new" />
                        <h4 className="principle-heading-new">Meet Our Team</h4>
                        <p className="principle-description-new">
                            Our dedicated personnel are the backbone of our success, bringing diverse 
                            expertise and a shared commitment to excellence.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutSection;