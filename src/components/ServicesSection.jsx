// src/components/ServicesSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ServicesSection.css';
// *** NEW ICON IMPORTS ***
import { FaCode, FaChartBar, FaPalette, FaBullhorn } from 'react-icons/fa';


// --- Custom Hook for Persistent On-Scroll Visibility ---
const useVisibilityEffect = (options) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
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


const serviceItems = [
    { 
        id: '01', 
        title: 'Custom Application Development', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.',
        // *** REPLACED WITH <FaCode /> ***
        icon: <FaCode />, 
        hasColorBlock: false,
    },
    { 
        id: '02', 
        title: 'Strategic Business Planning', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.',
        // *** REPLACED WITH <FaChartBar /> ***
        icon: <FaChartBar />, 
        hasColorBlock: true, 
    },
    { 
        id: '03', 
        title: 'Brand & Identity Design', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.',
        // *** REPLACED WITH <FaPalette /> ***
        icon: <FaPalette />, 
        hasColorBlock: false,
    },
    { 
        id: '04', 
        title: 'Digital Marketing & SEO', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.',
        // *** REPLACED WITH <FaBullhorn /> (Megaphone) ***
        icon: <FaBullhorn />, 
        hasColorBlock: true,
    },
];

const ServicesSection = () => {
    // Observe the elements. Threshold: 0.1 means 10% must be visible.
    const [headerRef, isHeaderVisible] = useVisibilityEffect({ threshold: 0.1 });
    const [gridRef, isGridVisible] = useVisibilityEffect({ threshold: 0.1 });
    const [ctaRef, isCtaVisible] = useVisibilityEffect({ threshold: 0.5 });
    

    return (
        <section className="services-section">
            <div className="services-container">
                {/* Section Header */}
                <div ref={headerRef} className={`section-header ${isHeaderVisible ? 'is-visible' : 'initial-hidden'}`}>
                    <p className="services-tagline">SERVICES</p>
                    <h2 className="services-heading">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </h2>
                </div>

                {/* Services Grid (Observed by ref) */}
                <div ref={gridRef} className="services-grid">
                    {serviceItems.map((service, index) => (
                        <div 
                            className={`service-card ${isGridVisible ? 'is-visible' : 'initial-hidden'} ${service.hasColorBlock ? 'with-color-block' : ''} card-${index + 1}`} 
                            key={service.id}
                            style={isGridVisible ? { animationDelay: `${0.1 + index * 0.15}s` } : {}} 
                        >
                            {/* The colored sidebar for items 02 and 04 */}
                            {service.hasColorBlock && <div className="color-block"></div>}

                            <div className="card-content">
                                {/* The icon now renders the React component */}
                                <div className="card-icon">{service.icon}</div>
                                <div className="card-text">
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-description">{service.description}</p>
                                    <a href="#" className="learn-more">Learn More &rarr;</a>
                                </div>
                                <div className="card-number">{service.id}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Banner (Observed by ref) */}
                <div ref={ctaRef} className={`cta-banner ${isCtaVisible ? 'is-visible' : 'initial-hidden'}`} style={isCtaVisible ? { animationDelay: '0.1s' } : {}}>
                    <div className="cta-content">
                        {/* Placeholder for person image */}
                        <div className="cta-image-placeholder"></div>
                        <div className="cta-text">
                            <p className="cta-message">Need a Custom Solution?</p>
                            <button className="cta-button">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll-to-top button placeholder from image */}
            <a href="#top" className="scroll-to-top">^</a>
        </section>
    );
};

export default ServicesSection;