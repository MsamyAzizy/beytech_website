// src/pages/Products.jsx

import React from 'react';
import './Products.css';
import ProductsHeroIllustration from '../assets/hero-image_dspush1025.webp'; // Placeholder image

// --- Product Data ---
const beytechProducts = [
  { 
    id: 1, 
    name: "BeyERP Cloud", 
    tag: "ERP Solution", 
    description: "Streamline finance, inventory, and operations with our custom cloud-based ERP suite.", 
    icon: "fas fa-database", // Example Icon
    link: "/products/beyerp-cloud",
    color: "#3B4FEA" // Blue
  },
  { 
    id: 2, 
    name: "Analytics Dash", 
    tag: "Business Intelligence", 
    description: "Visualize key performance indicators in real-time to make data-driven decisions instantly.", 
    icon: "fas fa-chart-area", 
    link: "/products/analytics-dash",
    color: "#F63C6D" // Red/Pink
  },
  { 
    id: 3, 
    name: "Supply Chain Manager", 
    tag: "Logistics", 
    description: "Optimize logistics and track assets across the supply chain using advanced algorithms.", 
    icon: "fas fa-truck-moving", 
    link: "/products/scm",
    color: "#00BA5E" // Green
  },
  { 
    id: 4, 
    name: "Customer Connect", 
    tag: "CRM", 
    description: "Build stronger client relationships with a centralized platform for sales and customer support.", 
    icon: "fas fa-users-cog", 
    link: "/products/customer-connect",
    color: "#F59E0B" // Amber/Yellow
  },
  { 
    id: 5, 
    name: "TechStack Monitor", 
    tag: "DevOps Tool", 
    description: "Monitor application performance and infrastructure health with AI-powered anomaly detection.", 
    icon: "fas fa-server", 
    link: "/products/techstack-monitor",
    color: "#8B5CF6" // Violet/Purple
  },
];
// -----------------------------

const Products = () => {
  return (
    <div className="products-page-container">
      
      {/* 1. HERO SECTION */}
      <div className="products-hero-section">
        <div className="products-hero-wrapper">
          <div className="products-hero-text">
            <h1 className="products-hero-title">
                <span className="products-hero-highlight">BUILT ON EXPERTISE.</span> OPTIMIZED FOR YOU.
            </h1>
            <p className="products-hero-subtitle">
              From powerful ERP solutions to custom business intelligence tools, our proprietary software is engineered to streamline your operations and drive significant efficiency.
            </p>
            <a href="#product-grid-section" className="products-hero-cta">
              VIEW ALL SOLUTIONS
            </a>
          </div>
          <div className="products-hero-image">
            <img 
              src={ProductsHeroIllustration} 
              alt="Products illustration showcasing interconnected software" 
              className="products-illustration"
            />
          </div>
        </div>
      </div>
      
      {/* 2. PRODUCTS GRID SECTION */}
      <div id="product-grid-section" className="products-grid-section">
        <h2 className="grid-section-title">Our Proprietary Software</h2>
        <p className="grid-section-subtitle">
            Explore the tools we've engineered to solve critical business challenges.
        </p>
        <div className="products-grid">
          {beytechProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              // Pass color as a CSS variable for gradient effect
              style={{ '--product-base-color': product.color }}
            >
              <div className="product-icon-wrapper">
                <i className={`${product.icon} product-icon`} style={{ color: product.color }}></i>
              </div>
              <span className="product-tag">{product.tag}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <a href={product.link} className="product-card-link">
                Explore Features <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FINAL CTA SECTION (Testimonials/Lead Gen) */}
      <div className="products-cta-section">
        <div className="cta-wrapper">
            <h2 className="cta-title">Ready to Transform Your Operations?</h2>
            <p className="cta-text">
                Schedule a personalized consultation with our product specialists to see live demos and understand how our software integrates seamlessly into your ecosystem.
            </p>
            <a href="/contact" className="products-final-cta-button">
                Schedule a Free Consultation
            </a>
            {/* Simple placeholder for a testimonial quote */}
            <blockquote className="cta-quote">
                "The BeyERP Cloud completely modernized our supply chain, saving us 15% in logistics costs alone." - **CEO, Global Logistics Corp**
            </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Products;