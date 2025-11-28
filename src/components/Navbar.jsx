// src/components/Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react'; 
import './Navbar.css';
import mainLogo from '../assets/Main-Logo-01.png'; 
import { FaInstagram, FaDribbble, FaLinkedin, FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

// WhatsApp Configuration
const WHATSAPP_NUMBER = '+255762292250';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

// Social media data
const socialLinks = [
    { icon: <FaXTwitter />, name: 'X', href: 'https://www.beytech.co.tz', color: '#000' },
    { icon: <FaInstagram />, name: 'Instagram', href: 'https://www.beytech.co.tz', color: '#E1306C' },
    { icon: <FaDribbble />, name: 'Dribbble', href: 'https://www.beytech.co.tz', color: '#EA4C89' },
    { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.beytech.co.tz', color: '#0077B5' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', href: WHATSAPP_LINK, color: '#25D366' },
];

// Dropdown items for the SERVICES link
const serviceDropdownItems = [
    { title: 'Digital Marketing', href: '/services/digital-marketing' },
    { title: 'Software Development', href: '/software-development' },
    { title: 'Odoo ERP Implementation', href: '/services/odoo-erp' },
    { title: 'Mobile Application Development', href: '/services/mobile' },
    { title: 'Enterprise Application Development', href: '/services/enterprise' },
    { title: 'System Integration', href: '/services/integration' },
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
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={mainLogo} alt="Beytech Software Group Logo" className="logo-image" />
        </a>

        <ul className="nav-menu">
          
          {/* 1. HOME */}
          <li className="nav-item">
            <a href="/" className="nav-links">HOME</a>
          </li>
          
          {/* 2. ABOUT */}
          <li className="nav-item">
            <a href="/about" className="nav-links">ABOUT</a>
          </li>
          
          {/* 3. SERVICES Dropdown Item */}
          <li 
            className="nav-item dropdown-item"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="nav-links nav-dropdown-header">
                <a href="/services" className="nav-link-base">SERVICES</a>
                <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`} />
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
          </li>

          {/* 4. TEAM */}
          <li className="nav-item">
            <a href="/team" className="nav-links">TEAM</a>
          </li>
          
          {/* 5. PRODUCTS */}
          <li className="nav-item">
            <a href="/products" className="nav-links">PRODUCTS</a>
          </li>

          {/* 6. CONTACT */}
          <li className="nav-item">
            <a href="/contact" className="nav-links">CONTACT</a>
          </li>
        </ul>
        
        {/* Right Section - Social Icons & CTA */}
        <div className="nav-right-section">
          <SocialNav isMobile={false} />
          <div className="desktop-cta">
            <button className="cta-button">View Company Profile</button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleDrawer}>
          <div className={`hamburger ${isDrawerOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-drawer ${isDrawerOpen ? 'active' : ''}`}>
          <div className="drawer-content">
            <div className="drawer-header">
              <img src={mainLogo} alt="Beytech Logo" className="drawer-logo" />
            </div>
            
            <ul className="drawer-menu">
              <li><a href="/" onClick={toggleDrawer}>HOME</a></li>
              <li><a href="/about" onClick={toggleDrawer}>ABOUT</a></li>
              
              {/* Services Dropdown in Mobile */}
              <li className="drawer-dropdown">
                <div className="drawer-dropdown-header">
                  SERVICES
                  <FaChevronDown className="drawer-dropdown-icon" />
                </div>
                <ul className="drawer-dropdown-menu">
                  {serviceDropdownItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} onClick={toggleDrawer}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </li>

              <li><a href="/team" onClick={toggleDrawer}>TEAM</a></li>
              <li><a href="/products" onClick={toggleDrawer}>PRODUCTS</a></li>
              <li><a href="/contact" onClick={toggleDrawer}>CONTACT</a></li>
            </ul>

            {/* Mobile Social Icons */}
            <div className="drawer-social">
              <SocialNav isMobile={true} />
            </div>

            {/* Mobile CTA */}
            <div className="drawer-cta">
              <button className="cta-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;