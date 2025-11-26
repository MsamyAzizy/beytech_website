// src/components/ContactSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ContactSection.css';
// *** NEW ICON IMPORTS ***
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaStar, FaUserFriends, FaHourglassHalf, FaArrowRight } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io"; // Using IoIosMail for the small email icon

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


// Data for Contact and Statistics
const contactDetails = [
    {
        icon: <IoIosMail />, // Small envelope icon
        title: 'Email',
        detail: 'info@beytech.co.tz',
        subtitle: 'We reply within 1 hours',
    },
    {
        icon: <FaPhone />, 
        title: 'Phone',
        detail: '+255 747 990 668 / +255 747 990 668 ', 
        subtitle: 'Mon-Fri: 08:00AM - 05:00PM ',
    },
    {
        icon: <FaMapMarkerAlt />, 
        title: 'Office',
        detail: 'Head Quarters, Mwenge ,Josam House Floor No 4 , Dar es Salaam Tanzania ',
        subtitle: 'Visit us anytime',
    },
];

const statistics = [
    { value: '2.5k+', label: 'Happy Clients', icon: <FaUserFriends /> },
    { value: '4.9/5', label: 'Client Rating', icon: <FaStar /> },
    { value: '15min', label: 'Avg. Response', icon: <FaHourglassHalf /> },
];

const ContactSection = () => {
    const [contentRef, isContentVisible] = useVisibilityEffect({ threshold: 0.1 });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Project Started (Placeholder)!');
    };

    return (
        <section className="contact-section new-style">
            <div className="contact-container">
                
                {/* Main Content Grid: Left (Info) & Right (Form) */}
                <div ref={contentRef} className="contact-content-grid">
                    
                    {/* LEFT COLUMN: Header, Contact Details, and Stats */}
                    <div 
                        className={`contact-info-column ${isContentVisible ? 'is-visible-left' : 'initial-hidden'}`} 
                        style={isContentVisible ? { animationDelay: '0.1s' } : {}}
                    >
                        
                        {/* Header/Tagline */}
                        <div className="contact-header-left">
                            <p className="contact-tagline">Let's Build Something Amazing</p>
                            <h2 className="contact-heading-left">
                                Ready to Transform Your Digital Presence?
                            </h2>
                            <p className="contact-intro-text">
                                Bey Technologies is your trusted partner in delivering advanced IT solutions tailored to your business needs. 
                                Whether you require Odoo ERP implementation, custom software development, 
                                IT consultancy, or digital transformation services, we have the expertise to drive your success.
                            </p>
                        </div>
                        
                        {/* Detailed Contact Blocks */}
                        <div className="detailed-contact-blocks">
                            {contactDetails.map((item, index) => (
                                <div key={index} className="contact-block">
                                    <div className="detail-icon">{item.icon}</div>
                                    <div className="detail-text-new">
                                        <p className="detail-title">{item.title}</p>
                                        <p className="detail-detail-new">{item.detail}</p>
                                        <p className="detail-subtitle">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Statistics Section */}
                        <div className="contact-stats-grid">
                            {statistics.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <h4 className="stat-value">{stat.value}</h4>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    
                    {/* RIGHT COLUMN: Start Your Project Form */}
                    <div 
                        className={`contact-form-column ${isContentVisible ? 'is-visible-right' : 'initial-hidden'}`} 
                        style={isContentVisible ? { animationDelay: '0.2s' } : {}}
                    >
                        
                        <div className="message-form-card">
                            <h3 className="form-title-new">Start Your Project</h3>
                            <p className="form-description-new">
                                Tell us about your project and we'll get back to you with a tailored solution.
                            </p>
                            
                            <form className="contact-form-new" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Full Name" required />
                                <input type="email" placeholder="Email Address" required />
                                <input type="text" placeholder="Subject" required />
                                <textarea placeholder="Message" rows="5" required></textarea>
                                <button type="submit" className="send-button-new">
                                    Send Message <FaArrowRight style={{ marginLeft: '10px' }} />
                                </button>
                            </form>
                            
                            <p className="form-security-text">
                                Your information is secure and will never be shared.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;