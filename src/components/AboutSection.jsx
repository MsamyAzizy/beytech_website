// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';
import Accordion from './Accordion'; 
import { FaUserShield, FaClock, FaHandshake } from 'react-icons/fa'; // Icons for the principle cards

// 💥 REMOVED: Placeholder image import (import AboutImage from '../assets/CCTV.jpeg';)
// The image import is completely gone.

// 💥 Data for the Accordion items
const accordionData = [
    {
        id: '1',
        title: 'Rapid Growth & Scalability',
        content: 'Our solutions are built with scalability in mind, designed to support your rapid business expansion without compromising performance or stability. We leverage cloud-native architectures and agile development practices to adapt quickly to market demands and foster continuous innovation.',
    },
    {
        id: '2',
        title: 'Successful Odoo ERP Projects',
        content: 'With extensive experience in Odoo ERP implementations, we empower businesses to streamline operations, enhance data management, and achieve robust enterprise resource planning. Our certified Odoo specialists deliver tailored modules and seamless integrations.',
    },
    {
        id: '3',
        title: 'Innovative Solutions & R&D',
        content: 'We invest heavily in research and development to bring cutting-edge technologies and novel approaches to your projects. From AI/ML integration to advanced IoT solutions, we transform complex ideas into practical, impactful products.',
    },
    {
        id: '4',
        title: 'Skilled & Certified Team',
        content: 'Our team comprises highly skilled and certified professionals in various domains including full-stack development, cloud architecture, cybersecurity, and data science. We foster a culture of continuous learning and expertise sharing.',
    },
    {
        id: '5',
        title: 'Community Impact & Open Source',
        content: 'We believe in giving back to the tech community. We actively contribute to open-source projects and engage in initiatives that promote digital literacy and technological advancement for a broader societal benefit.',
    },
    {
        id: '6',
        title: 'Robust & Scalable Infrastructure',
        content: 'Our commitment extends to building resilient and high-performance IT infrastructures. We utilize best-in-class tools and methodologies to ensure your systems are secure, efficient, and capable of handling future demands.',
    },
];


const AboutSection = () => {
    return (
        <section className="about-section-new">
            <div className="about-content-wrapper-new">

                {/* Top Header */}
               

                {/* Main Content: Full-Width Accordion Block (Image removed) */}
                <div className="about-main-content-new full-width-content"> 
                    
                    {/* 💥 REMOVED: The about-image-container-new div and its contents */}
                    
                    <div className="about-text-block-new full-width-block"> 
                        <h3 className="about-vision-heading-new">Why Choose Us?</h3>
                        <Accordion items={accordionData} /> 
                    </div>
                </div>

                {/* Bottom Card Principles/Stats */}
                <div className="about-principles-grid-new">
                    
                    <div className="principle-card-new">
                        <FaUserShield className="principle-icon-new" />
                        <h4 className="principle-heading-new">Our Core Principles</h4>
                        <p className="principle-description-new">
                            We adhere to a strict set of values focused on digital integrity, cutting-edge innovation, and secure client satisfaction in every aspect of our tech delivery.
                        </p>
                    </div>

                    <div className="principle-card-new">
                        <FaClock className="principle-icon-new" />
                        <h4 className="principle-heading-new">Our Journey So Far</h4>
                        <p className="principle-description-new">
                            Since our inception in 2012, we have continuously evolved our technology stack and processes to meet the dynamic needs of the global market effectively, delivering over 750 projects.
                        </p>
                    </div>

                    <div className="principle-card-new">
                        <FaHandshake className="principle-icon-new" />
                        <h4 className="principle-heading-new">Meet Our Team</h4>
                        <p className="principle-description-new">
                            Our dedicated personnel are the backbone of our success, bringing diverse engineering expertise, industry certifications, and a shared commitment to technical excellence.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutSection;