// src/components/Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react'; 
import './Navbar.css';
import mainLogo from '../assets/Main-Logo-01.png'; 
// *** NEW ICON IMPORTS ***
import { FaInstagram, FaDribbble, FaLinkedin, FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

// WhatsApp Configuration
const WHATSAPP_NUMBER = '+255762292250';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`; // Removes the '+' for the wa.me link

// Social media data (shared with Footer)
const socialLinks = [
    { icon: <FaXTwitter />, name: 'X', href: 'https://www.beytech.co.tz', color: '#000' },
    { icon: <FaInstagram />, name: 'Instagram', href: 'https://www.beytech.co.tz', color: '#E1306C' },
    { icon: <FaDribbble />, name: 'Dribbble', href: 'https://www.beytech.co.tz', color: '#EA4C89' },
    { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.beytech.co.tz', color: '#0077B5' },
    // ADDED WHATSAPP LINK
    { icon: <FaWhatsapp />, name: 'WhatsApp', href: WHATSAPP_LINK, color: '#25D366' },
];

// Dropdown items for the SERVICES link
const serviceDropdownItems = [

  // CORRECTLY LINKED: Digital Marketing
    { title: 'Digital Marketing', href: '/services/digital-marketing' },
    // CORRECTLY LINKED: Software Development
    { title: 'Software Development', href: '/software-development' },
    // Updated link for the Odoo page (already correct)
    { title: 'Odoo ERP Implementation', href: '/services/odoo-erp' },
    // Placeholder links (Mobile link matches the assumption: /services/mobile)
    { title: 'Mobile Application Development', href: '/services/mobile' },
    { title: 'Enterprise Application Development', href: '/services/enterprise' },
    { title: 'System Intergration', href: '/services/integration' },
];

// Helper Component for Social Icons
const SocialNav = ({ isMobile }) => (
    <div className={`social-nav ${isMobile ? 'mobile' : 'desktop'}`}>
        {socialLinks.map((link, index) => (
            <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`social-icon-nav ${link.name === 'WhatsApp' ? 'whatsapp-icon' : ''}`}
                aria-label={`Follow/Contact on ${link.name}`}
            >
                {link.icon}
            </a>
        ))}
    </div>
);


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prev => !prev);
    setIsDropdownOpen(false); 
  }, []);
  
  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };
  
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('drawer-open');
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.classList.remove('drawer-open');
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      document.body.classList.remove('drawer-open');
      document.body.style.overflow = 'auto'; 
    };
  }, [isDrawerOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={mainLogo} alt="Beytech Software Group Logo" className="logo-image" />
        </a>

        <div className="menu-icon" onClick={toggleDrawer}>
          <span className="icon-line">{isDrawerOpen ? '\u2715' : '\u2261'}</span> 
        </div>

        <ul className={`nav-menu ${isDrawerOpen ? 'active' : ''}`}>
          
          {/* 1. HOME */}
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={toggleDrawer}>HOME</a>
          </li>
          
          {/* 2. ABOUT */}
          <li className="nav-item">
            <a href="/about" className="nav-links" onClick={toggleDrawer}>ABOUT</a>
          </li>
          
          {/* 3. SERVICES Dropdown Item */}
          <li 
            className="nav-item dropdown-item"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="nav-links nav-dropdown-header">
                {/* Changed the base link for SERVICES to '#' since it's a dropdown host */}
                <a href="/services" className="nav-link-base" onClick={toggleDrawer}>SERVICES</a>
                {/* Chevron icon for desktop */}
                <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`} onClick={handleDropdownToggle} />
            </div>
            
            {/* Desktop Dropdown Menu */}
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                {serviceDropdownItems.map((item, index) => (
                    <li key={index}>
                        <a 
                            href={item.href} 
                            className="dropdown-link" 
                            onClick={closeDropdown}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
            
            {/* Mobile Dropdown Menu (always visible in drawer but styled differently) */}
            <ul className="dropdown-mobile">
                {serviceDropdownItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href} className="dropdown-link-mobile" onClick={toggleDrawer}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

          </li>

          {/* 4. TEAM */}
          <li className="nav-item">
            <a href="/team" className="nav-links" onClick={toggleDrawer}>TEAM</a>
          </li>
          
          {/* 5. PRODUCTS (NEW POSITION) */}
          <li className="nav-item">
            <a href="/products" className="nav-links" onClick={toggleDrawer}>PRODUCTS</a>
          </li>

          {/* 6. CONTACT (NEW POSITION) */}
          <li className="nav-item">
            <a href="/contact" className="nav-links" onClick={toggleDrawer}>CONTACT</a>
          </li>
          
          {/* Social Icons for Mobile Drawer */}
          <li className="nav-item-mobile social-mobile-container">
            <SocialNav isMobile={true} />
          </li>
          
          
        </ul>
        
        {/* Social Icons for Desktop */}
        <SocialNav isMobile={false} />
        
        {/* CTA Button for Desktop */}
      </div>
    </nav>
  );
};

export default Navbar;