import React, { useState, useEffect } from "react";
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
  "Microfinance | Pharmacy | Petrol Station | Restaurant | Hospital",
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

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentBannerPair, setCurrentBannerPair] = useState(0);
  const [showBanner, setShowBanner] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === TYPING_TEXTS[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(TYPING_TEXTS[index].substring(0, subIndex));
    }, deleting ? 50 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

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
      setShowBanner(false); // slide out current pair
      setTimeout(() => {
        setCurrentBannerPair((prev) => (prev + 1) % TECH_BANNERS_PAIRS.length);
        setShowBanner(true); // slide in next pair
      }, 800); // match CSS transition duration
    }, 5000); // 5s per pair
    return () => clearInterval(interval);
  }, []);

  const [leftBanner, rightBanner] = TECH_BANNERS_PAIRS[currentBannerPair];

  return (
    <section className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={beyVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <p className="small-country-label">BEY TECHNOLOGIES COMPANY</p>
        <h1 className="hero-title">
          {text}
          <span className="cursor">|</span>
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
}
