// src/pages/DigitalMarketing.jsx

import React from 'react';
import './DigitalMarketing.css';
// 💥 NEW: Import the hero illustration image
import DigitalMarketingHeroIllustration from '../assets/hero-image_dspush1025.webp'; 

// --- Digital Marketing Service Data ---
const marketingServicesData = [
  {
    id: 1,
    title: "SEO Optimization",
    icon: "fas fa-tag", 
    description: "Drive organic growth and maximize visibility. We focus on technical SEO audits, strategic keyword mapping, and content optimization to rank you higher.", 
    color: "#00BA5E" // Green
  },
  {
    id: 2,
    title: "Web Analysis",
    icon: "fas fa-chart-bar", 
    description: "Translate complex data into actionable insights. We implement advanced analytics tracking and conversion funnels to identify performance bottlenecks and opportunities.", 
    color: "#F63C6D" // Red/Pink
  },
  {
    id: 3,
    title: "Email Automation",
    icon: "fas fa-envelope", 
    description: "Automate personalized customer journeys. Deploy segmented email campaigns and nurturing sequences designed to convert leads and retain high-value clients.", 
    color: "#3B4FEA" // Blue
  },
  {
    id: 4,
    title: "Conversion Optimization (CRO)",
    icon: "fas fa-funnel-dollar", 
    description: "Leverage A/B testing and user heatmaps to optimize page elements. We systematically boost conversion rates for landing pages and checkout flows.", 
    color: "#F59E0B" // Amber/Yellow
  },
  {
    id: 5,
    title: "Social Media Strategy",
    icon: "fab fa-facebook-square", 
    description: "Develop data-driven social strategies based on audience segmentation and platform analytics to maximize engagement and lead generation across channels.", 
    color: "#8B5CF6" // Violet/Purple
  },
  {
    id: 6,
    title: "PPC Management",
    icon: "fas fa-search-dollar", 
    description: "Execute highly technical search engine and social media ad campaigns, focusing on bid optimization algorithms and precise audience targeting for maximum ROI.", 
    color: "#06B6D4" // Cyan/Light Blue
  },
];
// -----------------------------


const DigitalMarketing = () => {
  return (
    <div className="marketing-page-container">

      {/* 💥 HERO SECTION */}
      <div className="marketing-hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text-block">
            <p className="hero-pre-title animate-in-slideup">LET US MARKETING YOUR BUSINESS</p>
            {/* 💥 MODIFIED CLASS: Added 'animated-text-background' for the effect */}
            <h1 className="hero-main-title animated-text-background animate-in-slideup" style={{ animationDelay: '0.2s' }}>YOUR WEBSITE STAND OUT</h1>
            <p className="hero-description animate-in-slideup" style={{ animationDelay: '0.4s' }}>
              "Navigating the complexities of modern software development requires deep technical expertise across multiple stacks.
               We specialize in building custom, cross-platform applications, leveraging best practices in clean code and CI/CD pipelines to guarantee stability,
                security, and long-term maintainability, delivering true ROI on your technology investment."
            </p>
            <button className="hero-cta-button animate-in-slideup" style={{ animationDelay: '0.6s' }}>LEARN MORE</button>
          </div>
          <div className="hero-image-block">
            <img 
              src={DigitalMarketingHeroIllustration} 
              alt="Digital Marketing Illustration" 
              className="hero-illustration animate-in-zoom" 
            />
          </div>
        </div>
        {/* Abstract shapes/elements */}
        <div className="abstract-shape-1 animate-in-shape" style={{ animationDelay: '0.8s' }}></div>
        <div className="abstract-shape-2 animate-in-shape" style={{ animationDelay: '1.0s' }}></div>
        <div className="abstract-shape-3 animate-in-shape" style={{ animationDelay: '1.2s' }}></div>
        <div className="abstract-shape-4 animate-in-shape" style={{ animationDelay: '1.4s' }}></div>
      </div>

      {/* 💥 SERVICE CARDS SECTION */}
      <div className="marketing-cards-section">
        <div className="service-cards-grid-image-style animate-cards-stagger">
          {marketingServicesData.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card-image-style card-animate-in" 
              style={{ 
                // 💥 MODIFIED: Passing the color as a CSS variable instead of background-color
                '--card-base-color': service.color, 
                animationDelay: `${0.2 * (index + 1) + 0.8}s` 
              }} 
            >
              <i className={`${service.icon} card-icon-image-style`}></i> 
              <h3>{service.title}</h3>
              <p className="card-description-image-style">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;