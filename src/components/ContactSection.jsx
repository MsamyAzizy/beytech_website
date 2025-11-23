// src/components/ContactSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ContactSection.css';
// *** NEW ICON IMPORTS ***
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

// --- Custom Hook for Persistent On-Scroll Visibility (Unchanged) ---
const useVisibilityEffect = (options) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (elementRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
};
// ------------------------------------------------------------------


const contactInfo = [
    {
        icon: <FaMapMarkerAlt />, 
        title: 'Our Location',
        // *** ACTUAL LOCATION: Lebanon Headquarters (Bauchrieh) ***
        detail: 'Ground floor, 310 Mutran building, Bauchrieh, Lebanon',
    },
    {
        icon: <FaEnvelope />, 
        title: 'Email Us',
        // *** ACTUAL EMAIL ***
        detail: 'info@beytech.com.lb',
    },
    {
        icon: <FaPhone />, 
        title: 'Call Us',
        // Keeping placeholder phone, as the searched number is a WhatsApp number (71976382)
        detail: '+961 (555) 123-4567', 
    },
    {
        icon: <FaClock />, 
        title: 'Working Hours',
        detail: 'Monday - Saturday: 9AM - 7PM',
    },
];

const ContactSection = () => {
    // Threshold set low to trigger animation early on scroll
    const [headerRef, isHeaderVisible] = useVisibilityEffect({ threshold: 0.1 });
    const [contentRef, isContentVisible] = useVisibilityEffect({ threshold: 0.2 });

    // Simple form submission handler (prevent default for demo)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent (Placeholder)!');
    };

    // Google Maps iframe source for the Bauchrieh/Sin El-Fil area
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.284488587114!2d35.5393665!3d33.8642738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1754020a1c61%3A0x868c6f2a33111f67!2sSin%20El%20Fil%2FJdeideh%20Blvd!5e0!3m2!1sen!2slb!4v1700812800000!5m2!1sen!2slb";

    return (
        <section className="contact-section">
            <div className="contact-container">
                
                {/* Section Header */}
                <div ref={headerRef} className={`contact-header ${isHeaderVisible ? 'is-visible-fade' : 'initial-hidden'}`}>
                    <p className="contact-tagline">CONTACT</p>
                    <h2 className="contact-heading">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div ref={contentRef} className="contact-content-grid">
                    
                    {/* Left Column: Contact Information Card (Slides in from Left) */}
                    <div 
                        className={`contact-info-card ${isContentVisible ? 'is-visible-left' : 'initial-hidden'}`} 
                        style={isContentVisible ? { animationDelay: '0.1s' } : {}}
                    >
                        <div className="info-header">
                            <h3 className="info-title">Contact Information</h3>
                            <p className="info-description">
                                Dignissimos delectus accusamus rerum voluptate. Dignissimos rerum et maiores reiciendis voluptate inventore ut.
                            </p>
                        </div>
                        
                        <div className="info-details">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="detail-item">
                                    {/* The icon now renders the React component */}
                                    <div className="detail-icon">{item.icon}</div>
                                    <div className="detail-text">
                                        <p className="detail-title">{item.title}</p>
                                        <p className="detail-detail">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column: Map and Form (Slides in from Right) */}
                    <div 
                        className={`map-form-column ${isContentVisible ? 'is-visible-right' : 'initial-hidden'}`} 
                        style={isContentVisible ? { animationDelay: '0.2s' } : {}}
                    >
                        
                        {/* *** ACTUAL GOOGLE MAPS IFRAME *** */}
                        <div className="map-placeholder">
                            <iframe 
                                src={mapSrc}
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BeyTech Location Map"
                            ></iframe>
                        </div>

                        {/* Send a Message Form */}
                        <div className="message-form-card">
                            <h3 className="form-title">Send Us a Message</h3>
                            <p className="form-description">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit mauris hendrerit faucibus imperdiet nec eget felis.
                            </p>
                            
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Full Name" required />
                                <input type="email" placeholder="Email Address" required />
                                <input type="text" placeholder="Subject" required />
                                <textarea placeholder="Message" rows="4" required></textarea>
                                <button type="submit" className="send-button">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;