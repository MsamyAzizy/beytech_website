// src/pages/Products.jsx
import React from 'react';
import './Products.css';
import ProductsHeroIllustration from '../assets/pngwing.com-1.png';

// Service Images - Add these to your assets folder
import CustomSoftwareImg from '../assets/hero-image_dspush1025.webp';
import SoftwareMaintenanceImg from '../assets/hero-image_dspush1025.webp';
import MobileAppImg from '../assets/hero-image_dspush1025.webp';
import SystemIntegrationImg from '../assets/hero-image_dspush1025.webp';
import EmbeddedSystemsImg from '../assets/hero-image_dspush1025.webp';
import AIBigDataImg from '../assets/hero-image_dspush1025.webp';

// React Icons
import { FaDatabase, FaChartLine, FaTruck, FaUsers, FaServer, FaArrowRight, FaPlay, FaStar, FaCheck, FaMobile, FaCogs, FaMicrochip, FaBrain } from 'react-icons/fa';

// --- Product Data ---
const beytechProducts = [
  { 
    id: 1, 
    name: "BeyERP Cloud", 
    tag: "ERP Solution", 
    description: "Streamline finance, inventory, and operations with our custom cloud-based ERP suite designed for modern businesses.", 
    icon: <FaDatabase />,
    link: "/products/beyerp-cloud",
    color: "#3B4FEA",
    features: ["Real-time Analytics", "Multi-currency", "Inventory Management", "CRM Integration"]
  },
  { 
    id: 2, 
    name: "Analytics Dash", 
    tag: "Business Intelligence", 
    description: "Visualize key performance indicators in real-time to make data-driven decisions instantly with AI-powered insights.", 
    icon: <FaChartLine />,
    link: "/products/analytics-dash",
    color: "#F63C6D",
    features: ["Custom Dashboards", "Predictive Analytics", "Data Export", "Team Collaboration"]
  },
  { 
    id: 3, 
    name: "Supply Chain Pro", 
    tag: "Logistics", 
    description: "Optimize logistics and track assets across the supply chain using advanced algorithms and real-time monitoring.", 
    icon: <FaTruck />,
    link: "/products/scm",
    color: "#00BA5E",
    features: ["GPS Tracking", "Inventory Optimization", "Supplier Portal", "Route Planning"]
  },
  { 
    id: 4, 
    name: "Customer Connect", 
    tag: "CRM", 
    description: "Build stronger client relationships with a centralized platform for sales automation and customer support management.", 
    icon: <FaUsers />,
    link: "/products/customer-connect",
    color: "#F59E0B",
    features: ["Lead Management", "Email Automation", "Support Tickets", "Performance Analytics"]
  },
  { 
    id: 5, 
    name: "TechStack Monitor", 
    tag: "DevOps Tool", 
    description: "Monitor application performance and infrastructure health with AI-powered anomaly detection and automated alerts.", 
    icon: <FaServer />,
    link: "/products/techstack-monitor",
    color: "#8B5CF6",
    features: ["Real-time Monitoring", "Automated Alerts", "Performance Metrics", "Security Scans"]
  },
  { 
    id: 6, 
    name: "HR Management Suite", 
    tag: "Human Resources", 
    description: "Streamline HR processes with automated payroll, employee management, and performance tracking systems.", 
    icon: <FaUsers />,
    link: "/products/hr-suite",
    color: "#EC4899",
    features: ["Payroll Automation", "Employee Portal", "Performance Reviews", "Attendance Tracking"]
  },
];

// --- Service Data ---
const beytechServices = [
  {
    id: 1,
    name: "Custom Software Development",
    description: "Custom software applications that address specific enterprise needs have become an imperative component of the technology landscape today as the limitations of packaged software become apparent.",
    icon: <FaCogs />,
    image: CustomSoftwareImg,
    color: "#3B4FEA",
    link: "/services/custom-software"
  },
  {
    id: 2,
    name: "Software Maintenance",
    description: "Comprehensive software maintenance services to ensure your applications remain secure, up-to-date, and performant with continuous improvements and support.",
    icon: <FaServer />,
    image: SoftwareMaintenanceImg,
    color: "#F63C6D",
    link: "/services/software-maintenance"
  },
  {
    id: 3,
    name: "Mobile App Development",
    description: "Are you looking to develop a professional & innovative mobile app for your business? Or do you have a mobile app on one platform and want to expand your reach by developing an app on other platforms?",
    icon: <FaMobile />,
    image: MobileAppImg,
    color: "#00BA5E",
    link: "/services/mobile-app-development"
  },
  {
    id: 4,
    name: "System Integration",
    description: "Seamlessly connect your disparate systems and applications to create a unified technology ecosystem that enhances productivity and data flow across your organization.",
    icon: <FaDatabase />,
    image: SystemIntegrationImg,
    color: "#F59E0B",
    link: "/services/system-integration"
  },
  {
    id: 5,
    name: "Embedded Systems",
    description: "Are you looking for embedded software development solutions for things like industrial and home automation applications, embedded silicon, consumer electronics products, and GPS systems? Do you need...",
    icon: <FaMicrochip />,
    image: EmbeddedSystemsImg,
    color: "#8B5CF6",
    link: "/services/embedded-systems"
  },
  {
    id: 6,
    name: "AI, Big Data & Machine Learning",
    description: "Leverage the power of artificial intelligence, big data analytics, and machine learning to gain insights, automate processes, and drive innovation in your business operations.",
    icon: <FaBrain />,
    image: AIBigDataImg,
    color: "#EC4899",
    link: "/services/ai-bigdata-ml"
  }
];

const Products = () => {
  return (
    <div className="products-page-container">
      
      {/* 1. MODERN HERO SECTION */}
      <section className="products-hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="products-hero-wrapper">
          <div className="products-hero-content">
            <div className="hero-badge">
              <span>🚀 Enterprise Solutions</span>
            </div>
            <h1 className="products-hero-title">
              Transform Your Business With 
              <span className="hero-gradient-text"> Intelligent Software</span>
            </h1>
            <p className="products-hero-subtitle">
              From powerful ERP solutions to custom business intelligence tools, our proprietary software is engineered to streamline your operations and drive significant efficiency gains.
            </p>
            <div className="hero-actions">
              <a href="#services-section" className="primary-cta">
                <span>Explore Solutions</span>
                <FaArrowRight />
              </a>
              <button className="secondary-cta">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Businesses Transformed</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
          <div className="products-hero-visual">
            <div className="hero-image-container">
              <img 
                src={ProductsHeroIllustration} 
                alt="Modern software dashboard interface" 
                className="hero-illustration"
              />
              <div className="floating-card card-1">
                <FaChartLine />
                <span>Real-time Analytics</span>
              </div>
              <div className="floating-card card-2">
                <FaDatabase />
                <span>Cloud Storage</span>
              </div>
              <div className="floating-card card-3">
                <FaUsers />
                <span>Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. SERVICES SECTION */}
      <section id="services-section" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Software Solutions</h2>
            <p className="section-subtitle">
              Discover the comprehensive software services we offer to solve critical business challenges and drive growth.
            </p>
          </div>
          <div className="services-grid">
            {beytechServices.map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                style={{ '--service-color': service.color }}
              >
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="service-image"
                  />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-card-content">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper" style={{ backgroundColor: `${service.color}15` }}>
                      <div className="service-icon" style={{ color: service.color }}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="service-name">{service.name}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <a href={service.link} className="service-card-link">
                    <span>READ MORE</span>
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="products-cta-section">
        <div className="cta-background">
          <div className="cta-gradient"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-text-content">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-description">
                Schedule a personalized consultation with our product specialists to see live demos and understand how our software integrates seamlessly into your ecosystem.
              </p>
              <div className="cta-benefits">
                <div className="benefit">
                  <FaCheck />
                  <span>Free 30-day trial</span>
                </div>
                <div className="benefit">
                  <FaCheck />
                  <span>No credit card required</span>
                </div>
                <div className="benefit">
                  <FaCheck />
                  <span>Personalized onboarding</span>
                </div>
              </div>
              <div className="cta-actions">
                <a href="/contact" className="cta-button primary">
                  Start Free Trial
                </a>
                <a href="/demo" className="cta-button secondary">
                  Schedule Demo
                </a>
              </div>
            </div>
            <div className="cta-testimonial">
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <blockquote>
                  "The BeyERP Cloud completely modernized our supply chain, saving us 15% in logistics costs within the first quarter. The implementation was seamless and the support exceptional."
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <div className="author-name">Sarah Johnson</div>
                    <div className="author-role">CEO, Global Logistics Corp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;