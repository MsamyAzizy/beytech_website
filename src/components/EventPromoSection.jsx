// src/components/EventPromoSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import './EventPromoSection.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMoneyBillWave, FaVideo, FaNetworkWired } from 'react-icons/fa';
import eventImage from '../assets/hero-image_dspush1025.webp'; // Placeholder for the actual image

// --- Custom Hook for Repeating On-Scroll Visibility (Unchanged) ---
const useVisibilityEffect = (options) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Set true when entering, set false when leaving (allows repeat animation)
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false); 
            }
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (elementRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
};
// ------------------------------------------------------------------


// Component for the feature badges on the image (Unchanged)
const FeatureBadge = ({ icon, text, positionClass, isVisible }) => (
    // Apply 'is-animated' class only when the element is visible
    <div className={`feature-badge ${positionClass} ${isVisible ? 'is-animated' : ''}`}>
        {icon} {text}
    </div>
);


const EventPromoSection = () => {
    
    // State for CURRENT TIME (Hour:Minute:Second)
    const [currentTime, setCurrentTime] = useState({});

    // *** NEW: Function to get the current date string ***
    const getCurrentDateString = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // Passing 'undefined' uses the user's locale
        return new Date().toLocaleDateString(undefined, options);
    };

    // Calculate the current date string
    const currentDateString = getCurrentDateString();


    // Helper to extract and format current time data (Unchanged)
    const updateCurrentTime = () => {
        const now = new Date();
        const hour = now.getHours();
        
        // Determine the time of day period
        let period = 'Night';
        if (hour >= 5 && hour < 12) {
            period = 'Morning';
        } else if (hour >= 12 && hour < 17) {
            period = 'Afternoon';
        } else if (hour >= 17 && hour < 22) {
            period = 'Evening';
        }

        setCurrentTime({
            hour: now.getHours() % 12 || 12, // 12-hour format
            minute: now.getMinutes().toString().padStart(2, '0'),
            second: now.getSeconds().toString().padStart(2, '0'),
            amPm: now.getHours() >= 12 ? 'PM' : 'AM',
            period: period
        });
    };

    // Hook to track when the image card becomes visible/invisible (Unchanged)
    const [imageCardRef, isImageVisible] = useVisibilityEffect({ threshold: 0.05 });

    // Effect to update CURRENT TIME and run on mount (Unchanged)
    useEffect(() => {
        updateCurrentTime(); // Initial run
        const timeUpdater = setInterval(updateCurrentTime, 1000);

        return () => clearInterval(timeUpdater);
    }, []); 

    return (
        <div className="event-promo-wrapper">
            <div className="event-promo-container">
                
                {/* 1. Left Content Column */}
                <div className="event-content-left">
                    <h1 className="event-heading-main">
                        BEY Tech ERP Company<br />
                    </h1>
                    <h2 className="event-heading-sub">Accelerate Your Business For the Future of Innovation</h2>
                    
                    <p className="current-time">
                        <span className="time-label">Current Local Time:</span> 
                        <span className="time-value">
                            {currentTime.hour}:{currentTime.minute}:{currentTime.second} {currentTime.amPm} 
                        </span>
                        <span className={`time-period time-period-${currentTime.period ? currentTime.period.toLowerCase() : ''}`}>
                            — Good {currentTime.period}!
                        </span>
                    </p>

                    <p className="event-description">
"Convene with the world's foremost technical leadership to explore the bleeding edge of innovation. Participate in three days dedicated to disruptive discussions, optimized networking pipelines, and actionable insights that will re-architect the trajectory of next-generation technology."                    </p>

                    {/* Meta Data */}
                    <div className="event-meta-group">
                        {/* *** UPDATED: Show current calendar date here *** */}
                        <p className="event-meta-item"><FaCalendarAlt /> {currentDateString}</p>
                        <p className="event-meta-item"><FaMapMarkerAlt /> Mwenge, Josam house-Floor 4 Dar es salaam</p>
                        <p className="event-meta-item"><FaUsers /> 5000+ Use BEY ERP Suite</p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="event-cta-group">
                        <button className="cta-register">REQUEST NOW</button>
                        <button className="cta-schedule">VIEW COMPANY PROFILE</button>
                    </div>

                    {/* Countdown Timer (Removed) */}
                </div>

                {/* 2. Right Image Column */}
                <div className="event-image-right">
                    <div ref={imageCardRef} className="image-card">
                        <img src={eventImage} alt="Large crowd attending the Global Tech Summit" className="summit-image" />
                        
                        {/* Feature Badges - Pass isImageVisible state */}
                        <FeatureBadge 
                            icon={<FaMoneyBillWave />} 
                            text="Microfinance" 
                            positionClass="badge-top-right" 
                            isVisible={isImageVisible}
                        />
                        <FeatureBadge 
                            icon={<FaVideo />} 
                            text="Digital Marketing" 
                            positionClass="badge-mid-right" 
                            isVisible={isImageVisible}
                        />
                        <FeatureBadge 
                            icon={<FaNetworkWired />} 
                            text="Networking Security" 
                            positionClass="badge-bottom-right" 
                            isVisible={isImageVisible}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventPromoSection;