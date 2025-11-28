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
  "Microfinance | Pharmacy | Petrol Station",
];

const RIGHT_CARDS = [
  { img: bey1Img, title: "Microfinance", desc: "Microfinance management" },
  { img: pharmacyImg, title: "Pharmacy", desc: "Health management" },
  { img: heroImg, title: "System Security", desc: "Technology" },
  { img: tempImg1, title: "Mobile applications", desc: "Mobile Application Development" },
  { img: tempImg2, title: "CCTV security camera", desc: "CCTV Camera Installation" },
  { img: tempImg3, title: "Cloud and hosting", desc: "Domain, Server and IoT" },
];

// Banner pairs
const TECH_BANNERS_PAIRS = [
  [
    { title: "Innovative Technology ", desc: "ERP | Mobile Apps | CCTV | IoT | Cloud Hosting" },
    { title: "Next-Gen Business ", desc: "Automation | AI | Security | Cloud Management" },
  ],
  [
    { title: "Smart Business Tools", desc: "ERP | CRM | AI Analytics | Security" },
    { title: "Future Ready Solutions", desc: "IoT | Mobile Apps | Cloud | Automation" },
  ]
];

const Hero = () => {
  // We only rotate between index 0 and 1.
  const [currentRotatingIndex, setCurrentRotatingIndex] = useState(0); 
  const [showFinalText, setShowFinalText] = useState(false);
  
  const [currentCard, setCurrentCard] = useState(0);
  const [currentBannerPair, setCurrentBannerPair] = useState(0);
  const [showBanner, setShowBanner] = useState(true);

  // Time constants must match CSS animation timing (0.5s in + 1.5s visible + 0.5s out = 2.5s)
  const CYCLE_DURATION = 2500; 

  // Custom effect for sequential line rotation
  useEffect(() => {
    // 💥 The rotation stops after line 1 (index 1) completes its cycle.
    if (currentRotatingIndex >= TYPING_TEXTS.length - 2) { 
        // This means we are currently showing TYPING_TEXTS[1] and need to transition to the final text (index 2).
        
        // Wait for line 1's full animation cycle (in/pause/out) to finish.
        const finalTimeout = setTimeout(() => {
            setShowFinalText(true);
            // Optionally, stop rotation entirely by setting index to a non-existent value
            setCurrentRotatingIndex(-1); 
        }, CYCLE_DURATION); 
        return () => clearTimeout(finalTimeout);
    }
    
    // --- Standard Rotation Logic (for index 0 only, which transitions to 1) ---
    // Advance to the next rotating line after the current line completes its animation cycle
    const rotationTimeout = setTimeout(() => {
        setCurrentRotatingIndex((prev) => prev + 1);
    }, CYCLE_DURATION);

    return () => clearTimeout(rotationTimeout);
  }, [currentRotatingIndex]); 
  
  // Right cards cycle
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
      }, 800); 
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const [leftBanner, rightBanner] = TECH_BANNERS_PAIRS[currentBannerPair];

  // 💥 Determine which text to display:
  let displayedText = '';
  let lineClass = '';
  let animationKey = 'initial';

  if (showFinalText) {
      // 💥 Phase 3: Lock the final text (Index 2)
      displayedText = TYPING_TEXTS[2]; 
      lineClass = 'final';
      animationKey = 'final';
  } else {
      // Phase 1 & 2: Show the rotating lines (Index 0 and 1)
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
        <p className="small-country-label">BEY TECHNOLOGIES COMPANY</p>
        <h1 className="hero-title">
          <span 
            key={animationKey} // Key change forces the animation reset
            className={`rotating-line ${lineClass}`}
          >
            {displayedText}
          </span>
        </h1>
        <div className="info-row">
          <div className="info-item">🕒 24 hours services</div>
          <div className="info-item">⭐ 4.2 reviews</div>
          <div className="info-item">🕒 Starting at 08:00am</div>
        </div>
        <button className="book-btn">Review Now</button>
      </div>

      <div className="right-cards">
        {RIGHT_CARDS.map((card, idx) => (
          <div
            key={idx}
            className={`location-card ${
              idx === currentCard ? "card-enter" : "card-exit"
            }`}
          >
            <img src={card.img} alt={card.title} />
            <div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Banners */}
      <div className={`tech-banner left-banner ${showBanner ? "show" : ""}`}>
        <h2>{leftBanner.title}</h2>
        <p>{leftBanner.desc}</p>
        <button className="banner-btn">Discover More</button>
      </div>

      <div className={`tech-banner right-banner ${showBanner ? "show" : ""}`}>
        <h2>{rightBanner.title}</h2>
        <p>{rightBanner.desc}</p>
        <button className="banner-btn">Discover More</button>
      </div>
    </section>
  );
};

export default Hero;