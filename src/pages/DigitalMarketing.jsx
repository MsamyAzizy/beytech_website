// src/pages/DigitalMarketing.jsx
import React from 'react';
import './DigitalMarketing.css';
import DigitalMarketingHeroIllustration from '../assets/hero-image_dspush1025.webp';

// Services Data
const marketingServicesData = [
  {
    id: 1,
    title: "SEO Optimization",
    icon: "fas fa-tag",
    description: "Drive organic growth and maximize visibility with advanced SEO strategies. We conduct technical audits, optimize content, build authoritative backlinks.",
    color: "#00BA5E"
  },
  {
    id: 2,
    title: "Web Analysis",
    icon: "fas fa-chart-bar",
    description: "Translate complex data into actionable insights using advanced analytics tools. We track user behavior, conversion funnels, and website performance.",
    color: "#F63C6D"
  },
  {
    id: 3,
    title: "Email Automation",
    icon: "fas fa-envelope",
    description: "Automate personalized customer journeys with targeted email campaigns.We design segmentation strategies, nurture sequences,and trigger-based communications.",
    color: "#3B4FEA"
  },
  {
    id: 4,
    title: "Conversion Optimization",
    icon: "fas fa-funnel-dollar",
    description: "Boost conversion rates and revenue through systematic CRO practices. We leverage A/B testing, user heatmaps, landing page optimization, and behavioral.",
    color: "#F59E0B"
  },
  {
    id: 5,
    title: "Social Media Strategy",
    icon: "fab fa-facebook-square",
    description: "Maximize engagement and lead generation across social platforms with strategic campaigns. We analyze audience behavior, craft platform-specific content, and implement paid and organic.",
    color: "#8B5CF6"
  },
  {
    id: 6,
    title: "PPC Management",
    icon: "fas fa-search-dollar",
    description: "Execute precise and high-performing paid campaigns across search engines and social media. We focus on bid optimization, audience targeting, ad copy testing, and continuous monitoring.",
    color: "#06B6D4"
  },
];


// Animation classes for random assignment
const animationClasses = ["slide-up", "fade-in", "zoom-in", "rotate-in"];

const DigitalMarketing = () => {
  return (
    <div className="digital-marketing-page">

      {/* HERO SECTION */}
      <section className="dm-hero-section">
        <div className="dm-hero-wrapper">
          <div className="dm-hero-text">
            <p className="dm-pretitle">LET US MARKET YOUR BUSINESS</p>
            <h1 className="dm-title animated-gradient-text">
              YOUR WEBSITE STANDS OUT
            </h1>
            <p className="dm-description">
              Navigating modern software & marketing requires technical expertise. We build data-driven strategies to maximize ROI and elevate your brand online.
            </p>
            <button className="dm-cta-button">LEARN MORE</button>
          </div>
          <div className="dm-hero-image">
            <img src={DigitalMarketingHeroIllustration} alt="Digital Marketing" className="dm-hero-illustration" />
          </div>
        </div>

        {/* Abstract floating shapes */}
        <div className="dm-abstract-shape shape1"></div>
        <div className="dm-abstract-shape shape2"></div>
        <div className="dm-abstract-shape shape3"></div>
        <div className="dm-abstract-shape shape4"></div>
      </section>

      {/* SERVICE CARDS SECTION */}
      <section className="dm-services-section">
        <div className="dm-services-grid">
          {marketingServicesData.map((service, index) => {
            const randomAnim = animationClasses[Math.floor(Math.random() * animationClasses.length)];
            return (
              <div 
                key={service.id} 
                className={`dm-service-card ${randomAnim}`} 
                style={{ '--card-color': service.color, animationDelay: `${index * 0.2}s` }}
              >
                <i className={`${service.icon} dm-card-icon`}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
