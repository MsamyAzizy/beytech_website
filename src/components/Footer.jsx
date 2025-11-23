// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
// Import necessary icons from react-icons/fa or similar library
import { FaMapMarkerAlt, FaPhone, FaClock, FaTwitter, FaInstagram, FaDribbble, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Using FaXTwitter for the 'X' icon

const Footer = () => {
    
    // Data structured according to the screenshot's four columns
    const footerData = [
        {
            icon: <FaMapMarkerAlt />, // Actual Map Marker Icon
            title: 'Address',
            lines: ['A108 Adam Street', 'New York, NY 535022'],
        },
        {
            icon: <FaPhone />, // Actual Phone Icon
            title: 'Contact',
            lines: ['Phone: +1 5589 55488 55', 'Email: info@example.com'],
        },
        {
            icon: <FaClock />, // Actual Clock Icon
            title: 'Opening Hours',
            lines: ['Mon-Sat: 11AM - 2:3PM', 'Sunday: Closed'],
        },
    ];

    // Social media icons (using actual Fa icons)
   const socialLinks = [
        // Links are now properly formatted with HTTPS protocol:
        { icon: <FaXTwitter />, name: 'X', href: 'https://www.beytech.co.tz' }, 
        { icon: <FaInstagram />, name: 'Instagram', href: 'https://www.beytech.co.tz' },
        { icon: <FaDribbble />, name: 'Dribbble', href: 'https://www.beytech.co.tz' },
        { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.beytech.co.tz' },
    ];

    return (
        // The main footer container (dark background)
        <footer className="site-footer">
            <div className="footer-container">
                
                {/* Top Info Grid */}
                <div className="footer-info-grid">
                    
                    {/* Address, Contact, and Hours Columns */}
                    {footerData.map((item, index) => (
                        <div className="info-column" key={index}>
                            <div className="info-header">
                                {/* Using the imported React Icon components */}
                                <span className="info-icon">{item.icon}</span>
                                <h4 className="info-title">{item.title}</h4>
                            </div>
                            {item.lines.map((line, lineIndex) => (
                                <p key={lineIndex} className="info-detail">{line}</p>
                            ))}
                        </div>
                    ))}
                    
                    {/* Follow Us Column */}
                    <div className="info-column">
                        <div className="info-header">
                             <h4 className="info-title">Follow Us</h4>
                        </div>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} className="social-icon-link" aria-label={`Follow us on ${link.name}`}>
                                    {/* Using the imported React Icon components for social media */}
                                    {link.icon} 
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
                
                {/* Separator Line */}
                <hr className="footer-separator" />
                
                {/* Bottom Copyright Bar */}
                <div className="footer-copyright-bar">
                    <p className="copyright-text">
                        © Copyright.beytechnologies. All Rights Reserved
                    </p>
                    <p className="designer-text">
                        Designed by <a href="#" className="designer-link">https://www.beytech.co.tz</a>
                    </p>
                    {/* Scroll to Top Button (CSS styled to be fixed/floating) */}
                    <a href="#top" className="scroll-to-top-footer" aria-label="Scroll to top">↑</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;