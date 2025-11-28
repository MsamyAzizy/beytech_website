// src/components/Hero.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";
import beyVideo from "../assets/bey.mp4";
import bey1Img from "../assets/bey1.png";
import pharmacyImg from "../assets/pharmacy.png";
import heroImg from "../assets/hero-image_dspush1025.webp";
import tempImg1 from "../assets/MOBILE.jpeg";
import tempImg2 from "../assets/CCTV.jpeg";
import tempImg3 from "../assets/IOT.jpeg";

const TYPING_TEXTS = [
  "Bey Technologies Company",
  "For Best ERP Suite For Your Business",
  "Microfinance | Pharmacy | Restaurant",
];

const RIGHT_CARDS = [
  { 
    img: bey1Img, 
    title: "Microfinance", 
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  { 
    img: pharmacyImg, 
    title: "Pharmacy", 
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  { 
    img: heroImg, 
    title: "System Security", 
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  { 
    img: tempImg1, 
    title: "Mobile Apps", 
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  { 
    img: tempImg2, 
    title: "Security", 
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  { 
    img: tempImg3, 
    title: "Cloud & Hosting", 
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
];

// Banner pairs
const TECH_BANNERS_PAIRS = [
  [
    { title: "Innovative Technology", desc: "ERP | Mobile Apps | CCTV | IoT | Cloud Hosting" },
    { title: "Next-Gen Business", desc: "Automation | AI | Security | Cloud Management" },
  ],
  [
    { title: "Smart Business Tools", desc: "ERP | CRM | AI Analytics | Security" },
    { title: "Future Ready Solutions", desc: "IoT | Mobile Apps | Cloud | Automation" },
  ]
];

const Hero = () => {
  const [currentRotatingIndex, setCurrentRotatingIndex] = useState(0); 
  const [showFinalText, setShowFinalText] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentBannerPair, setCurrentBannerPair] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [showElements, setShowElements] = useState({
    subtitle: false,
    infoItems: [false, false, false],
    buttons: false
  });

  const CYCLE_DURATION = 1500; 

  // Typing text effect
  useEffect(() => {
    if (currentRotatingIndex >= TYPING_TEXTS.length - 2) { 
        const finalTimeout = setTimeout(() => {
            setShowFinalText(true);
            setCurrentRotatingIndex(-1); 
            
            // Start showing other elements after final text appears
            setTimeout(() => setShowElements(prev => ({...prev, subtitle: true})), 100);
            setTimeout(() => setShowElements(prev => ({...prev, infoItems: [true, false, false]})), 600);
            setTimeout(() => setShowElements(prev => ({...prev, infoItems: [true, true, false]})), 900);
            setTimeout(() => setShowElements(prev => ({...prev, infoItems: [true, true, true]})), 1200);
            setTimeout(() => setShowElements(prev => ({...prev, buttons: true})), 1500);
            
        }, CYCLE_DURATION); 
        return () => clearTimeout(finalTimeout);
    }
    
    const rotationTimeout = setTimeout(() => {
        setCurrentRotatingIndex((prev) => prev + 1);
    }, CYCLE_DURATION);

    return () => clearTimeout(rotationTimeout);
  }, [currentRotatingIndex]); 
  
  // Single card cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % RIGHT_CARDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Tech banners slide cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBanner(false); 
      setTimeout(() => {
        setCurrentBannerPair((prev) => (prev + 1) % TECH_BANNERS_PAIRS.length);
        setShowBanner(true); 
      }, 300); 
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  const [leftBanner, rightBanner] = TECH_BANNERS_PAIRS[currentBannerPair];

  let displayedText = '';
  let lineClass = '';
  let animationKey = 'initial';

  if (showFinalText) {
      displayedText = TYPING_TEXTS[2]; 
      lineClass = 'final';
      animationKey = 'final';
  } else {
      displayedText = TYPING_TEXTS[currentRotatingIndex];
      lineClass = '';
      animationKey = currentRotatingIndex;
  }

  return (
    <section className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={beyVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="company-badge">
          <span className="badge-dot"></span>
          <p className="small-country-label">BEY TECHNOLOGIES COMPANY</p>
        </div>
        
        <h1 className="hero-title">
          <span 
            key={animationKey}
            className={`rotating-line ${lineClass}`}
          >
            {displayedText}
          </span>
        </h1>
        
        <p className={`hero-subtitle ${showElements.subtitle ? 'show' : ''}`}>
          Transform your business with cutting-edge technology solutions tailored for growth and efficiency.
        </p>
        
        <div className="info-row">
          {showElements.infoItems.map((show, index) => (
            <div 
              key={index} 
              className={`info-item ${show ? 'show' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <span className="info-icon">
                {index === 0 ? '' : index === 1 ? '' : ''}
              </span>
              <span>
                {index === 0 ? '24/7 Support' : index === 1 ? '4.9/5 Reviews' : 'Fast Deployment'}
              </span>
            </div>
          ))}
        </div>
        
        <div className={`cta-buttons ${showElements.buttons ? 'show' : ''}`}>
          <button className="primary-btn">Request Appointment</button>
          <button className="secondary-btn">View Solutions</button>
        </div>
      </div>

      {/* Single Card Cycling */}
      <div className="right-cards-container">
        <div className="cards-header">
          <div className="header-line"></div>
          <span className="header-text">Our Solutions</span>
          <div className="header-line"></div>
        </div>
        
        <div className="right-cards">
          {RIGHT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`modern-card ${
                idx === currentCard ? "card-active" : "card-inactive"
              }`}
              style={{ '--card-gradient': card.gradient }}
            >
              <div className="card-background"></div>
              
              <div className="card-header">
                <div className="card-badge">New</div>
              </div>
              
              <div className="card-image-container">
                <img src={card.img} alt={card.title} className="card-image" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="card-content">
                <h4 className="card-title">{card.title}</h4>
                <div className="card-footer">
                  <div className="progress-dots">
                    {RIGHT_CARDS.map((_, dotIdx) => (
                      <div 
                        key={dotIdx} 
                        className={`progress-dot ${dotIdx === currentCard ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Banners */}
      <div className={`tech-banner left-banner ${showBanner ? "show" : ""}`}>
        <div className="banner-icon"></div>
        <h2>{leftBanner.title}</h2>
        <p>{leftBanner.desc}</p>
        <button className="banner-btn">Explore Solutions</button>
      </div>

      <div className={`tech-banner right-banner ${showBanner ? "show" : ""}`}>
        <div className="banner-icon"></div>
        <h2>{rightBanner.title}</h2>
        <p>{rightBanner.desc}</p>
        <button className="banner-btn">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;