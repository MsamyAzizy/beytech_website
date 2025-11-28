// src/components/AboutBey.jsx
import React, { useState, useEffect } from 'react';
import CoreValuesSection from './CoreValuesSection';
import './AboutBey.css';

import OfficeImage1 from '../assets/kindpng_146443.png';
import OfficeImage2 from '../assets/hero-image_dspush1025.webp';
import OfficeImage3 from '../assets/kindpng_146462.png';

import BeyVideo from '../assets/bey.mp4';

const AboutBey = () => {

    const sliderImages = [OfficeImage1, OfficeImage2, OfficeImage3];
    const [slideIndex, setSlideIndex] = useState(0);

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % sliderImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-bey-page">

            {/* ===================== HERO SECTION ===================== */}
            <header className="about-hero-section">
                <video autoPlay loop muted playsInline className="hero-background-video">
                    <source src={BeyVideo} type="video/mp4" />
                </video>

                <div className="hero-video-overlay"></div>

                <div className="hero-content">
                    <h1 className="hero-title-primary">Who We Are</h1>
                    <h2 className="hero-title-secondary">Control Your Business With Us</h2>
                </div>
            </header>

            <main className="about-main-content-area">

                {/* ===================== INTRO SECTION ===================== */}
                <section className="about-intro-section">
                    <div className="intro-container">
                        <h2 className="intro-title">ABOUT US</h2>
                        <hr className="intro-underline" />
                        <p className="intro-description">
                            Bey Technology is a modern IT solutions company helping organizations digitize,
                            automate and scale using intelligent business technologies.
                        </p>
                    </div>
                </section>

                {/* ===================== STORY SECTION ===================== */}
                <section className="about-details-section">
                    <div className="details-container">

                        {/* ===== IMAGE SLIDER ===== */}
                        <div className="details-image-container">
                            {sliderImages.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="Office Slide"
                                    className={`details-slider-image ${i === slideIndex ? 'active' : ''}`}
                                />
                            ))}
                        </div>

                        {/* ===== TEXT SECTION ===== */}
                        <div className="details-text-container">
                            
                            <div className="text-block">
                                <h3 className="section-heading">Our Story</h3>
                                <p className="section-paragraph">
                                    Founded in Dar es Salaam, Bey Technology provides modern IT solutions 
                                    designed to help businesses operate efficiently and achieve measurable growth. 
                                    We specialize in Odoo ERP, IT consultancy, custom software development, 
                                    cybersecurity, digital marketing, and digital transformation.
                                </p>
                            </div>

                            <div className="text-block">
                                <h3 className="section-heading">Software Development</h3>
                                <p className="section-paragraph">
                                    We build secure, scalable and user-centered applications that solve real-world business challenges.
                                </p>
                            </div>

                            <div className="text-block">
                                <h3 className="section-heading">Cyber Security</h3>
                                <p className="section-paragraph">
                                    We help businesses secure systems, protect data and strengthen resilience using modern cyber defense techniques.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* ===================== MISSION & VISION ===================== */}
                <section className="mission-vision-section">
                    <div className="mv-container">

                        <div className="mv-card">
                            <h3 className="mv-title">Our Mission</h3>
                            <p className="mv-text">
                                To deliver smart, reliable and impactful technology solutions that empower 
                                businesses to operate efficiently and compete globally.
                            </p>
                        </div>

                        <div className="mv-card">
                            <h3 className="mv-title">Our Vision</h3>
                            <p className="mv-text">
                                To become one of Africa’s most trusted technology partners recognized for innovation 
                                and long-term value creation.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ===================== WHY CHOOSE US ===================== */}
                <section className="why-us-section">
                    <h2 className="why-title">Why Choose Bey Technology?</h2>
                    <hr className="why-underline" />

                    <div className="why-container">
                        <div className="why-card">Experienced & certified team</div>
                        <div className="why-card">Tailor-made solutions for each client</div>
                        <div className="why-card">Reliable customer support</div>
                        <div className="why-card">Modern & scalable technologies</div>
                        <div className="why-card">Affordable, high-value services</div>
                        <div className="why-card">Proven results & trusted partnerships</div>
                    </div>
                </section>

                <CoreValuesSection />
            </main>
        </div>
    );
};

export default AboutBey;
