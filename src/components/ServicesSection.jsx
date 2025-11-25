// src/components/ServicesSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ServicesSection.css';
// *** NEW ICON IMPORTS ***
import { FaCode, FaChartBar, FaPalette, FaBullhorn } from 'react-icons/fa'; // FaBullhorn is back


// --- Custom Hook for Persistent On-Scroll Visibility ---
const useVisibilityEffect = (options) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
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
        title: 'Full-Stack Software Development', 
        description: 'We specialize in end-to-end development of web and mobile applications using modern frameworks like React, Next.js, and Node.js. We ensure your solution is secure, fast, and built to handle massive scale.',
        icon: <FaCode />, 
        hasColorBlock: false,
    },
    { 
        id: '02', 
        title: 'Digital Product Design (UI/UX)', 
        description: 'Our design process is rooted in user research and prototyping to create intuitive and engaging user interfaces (UI) that meet your business objectives and maximize conversion rates.',
        icon: <FaPalette />, 
        hasColorBlock: true, 
    },
    { 
        id: '03', 
        title: 'Data & Business Intelligence', 
        description: 'Leverage your business data to make smarter decisions. We provide comprehensive data solutions, including setting up real-time analytics dashboards and implementing machine learning models.',
        icon: <FaChartBar />, 
        hasColorBlock: false,
    },
    { 
        id: '04', 
        // Restoring the original placeholder content for the fourth card
        title: 'Digital Marketing & SEO', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.',
        icon: <FaBullhorn />, 
        hasColorBlock: true,
    },
];

const ServicesSection = () => {
    const [sectionRef, isSectionVisible] = useVisibilityEffect({ threshold: 0.1 });
    
    // We update the grid class based on the number of cards (4 cards usually looks best in a 2x2 layout on desktop)
    const gridColumnCountClass = serviceItems.length === 4 ? 'services-grid-4' : 'services-grid-auto'; 


    return (
        <section className="services-section" ref={sectionRef}>
            <div className="services-container">
                {/* Section Header */}
                <div className={`section-header ${isSectionVisible ? 'is-visible-header' : 'initial-hidden'}`}>
                    <p className="services-tagline">SERVICES</p>
                    <h2 className="services-heading">
                        Building Scalable, Future-Ready Applications
                    </h2>
                </div>

                {/* Services Grid (Using the new class to handle 4 items) */}
                <div className={`services-grid ${gridColumnCountClass}`}>
                    {serviceItems.map((service, index) => (
                        <div 
                            className={`service-card ${isSectionVisible ? 'is-visible-card' : 'initial-hidden'} ${service.hasColorBlock ? 'with-color-block' : ''}`} 
                            key={service.id}
                            style={isSectionVisible ? { animationDelay: `${0.2 + index * 0.15}s` } : {}} 
                        >
                            {/* The colored sidebar for items 02 and 04 */}
                            {service.hasColorBlock && <div className="color-block"></div>}

                            <div className="card-content">
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

                {/* Bottom CTA Banner */}
                <div className={`cta-banner ${isSectionVisible ? 'is-visible-cta' : 'initial-hidden'}`} style={isSectionVisible ? { animationDelay: `${0.2 + serviceItems.length * 0.15}s` } : {}}>
                    <div className="cta-content">
                        <div className="cta-image-placeholder"></div>
                        <div className="cta-text">
                            <p className="cta-message">Need a Custom Solution? Let's discuss your vision.</p>
                            <button className="cta-button">Contact Us Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll-to-top button placeholder */}
            {isSectionVisible && <a href="#top" className="scroll-to-top">^</a>}
        </section>
    );
};

export default ServicesSection;