// src/components/PortfolioSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import './PortfolioSection.css';
import { FaArrowRight } from 'react-icons/fa'; 

// --- Custom Hook for Persistent On-Scroll Visibility (Re-used) ---
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

// Placeholder images for the projects (replace with your actual image paths)
import projectImage1 from '../assets/CCTV.jpeg'; 
import projectImage2 from '../assets/IOT.jpeg'; 
import projectImage3 from '../assets/MAL.jpeg'; 
import projectImage4 from '../assets/MOBILE.jpeg'; 
import projectImage5 from '../assets/pharmacy.png'; 
import projectImage6 from '../assets/winny.png'; 

const projects = [
    {
        id: 1,
        category: 'Mobile Apps',
        // UPDATED TEXT
        title: 'Real-Time Fleet Management System',
        description: 'Developed a high-performance native mobile application for logistics tracking, featuring geo-fencing and real-time data sync for delivery optimization.',
        tags: ['React Native', 'Geo-Fencing', 'Redux'],
        imgSrc: projectImage1,
        year: 2024,
        cornerTag: 'New Update',
    },
    {
        id: 2,
        category: 'Web Development',
        // UPDATED TEXT
        title: 'Scalable SaaS E-learning Platform',
        description: 'Engineered a multi-tenant education platform using Next.js and serverless functions, supporting millions of concurrent users and secure content delivery.',
        tags: ['Next.js', 'Serverless', 'Microservices'],
        imgSrc: projectImage2,
        year: 2024,
        cornerTag: 'Award Winner',
    },
    {
        id: 3,
        category: 'Branding',
        // UPDATED TEXT
        title: 'AI Startup Visual Identity',
        description: 'Comprehensive brand overhaul and design system creation for a B2B machine learning company, ensuring a modern, trust-inspiring aesthetic across all touchpoints.',
        tags: ['Design System', 'Logo', 'Art Direction'],
        imgSrc: projectImage3,
        year: 2023,
        cornerTag: 'Limited Stock',
    },
    {
        id: 4,
        category: 'UI/UX Design',
        // UPDATED TEXT
        title: 'Enterprise Data Visualization Dashboard',
        description: 'Designed an intuitive and complex dashboard interface for visualizing large financial datasets, reducing reporting time by 40% through enhanced UX.',
        tags: ['Figma', 'Data Viz', 'User Testing'],
        imgSrc: projectImage4,
        year: 2024,
        cornerTag: 'Best Seller',
    },
    {
        id: 5,
        category: 'Web Development',
        // UPDATED TEXT
        title: 'Custom Headless E-commerce Solution',
        description: 'Built a decoupled, high-speed e-commerce storefront using Shopify (Headless) and a Django backend for custom order processing and inventory management.',
        tags: ['Shopify Headless', 'Django', 'GraphQL'],
        imgSrc: projectImage5,
        year: 2023,
        cornerTag: 'Trending',
    },
    {
        id: 6,
        category: 'Mobile Apps',
        // UPDATED TEXT
        title: 'Secure Fintech Investment Tracker',
        description: 'A cross-platform mobile app offering secure portfolio tracking, real-time stock market data, and biometric authentication for seamless user access.',
        tags: ['React Native', 'Fintech', 'Biometrics'],
        imgSrc: projectImage6,
        year: 2024,
        cornerTag: 'Featured',
    },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'Branding', 'UI/UX Design'];

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [displayProjects, setDisplayProjects] = useState([]); 
    const [outgoingProjects, setOutgoingProjects] = useState([]); 
    const [incomingProjects, setIncomingProjects] = useState([]); 
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [sectionRef, isSectionVisible] = useVisibilityEffect({ threshold: 0.1 });

    const TRANSITION_DURATION = 450; // Milliseconds, MUST match CSS filter-animation-duration

    useEffect(() => {
        // Initial load
        setDisplayProjects(projects);
    }, []);

    const handleCategoryChange = (cat) => {
        if (cat === selectedCategory || isTransitioning) return;

        setIsTransitioning(true);
        setSelectedCategory(cat);

        const currentProjects = displayProjects;
        const newFilteredProjects = cat === 'All'
            ? projects
            : projects.filter(project => project.category === cat);

        // Identify projects that are leaving and entering
        const leaving = currentProjects.filter(p => !newFilteredProjects.some(np => np.id === p.id));
        const entering = newFilteredProjects.filter(np => !currentProjects.some(p => p.id === np.id));
        
        setOutgoingProjects(leaving);
        setIncomingProjects(entering);

        // This setTimeout should match the duration of the 'exit' animation
        setTimeout(() => {
            setDisplayProjects(newFilteredProjects); // Update the displayed projects
            setOutgoingProjects([]); // Clear outgoing
            setIncomingProjects([]); // Clear incoming
            setIsTransitioning(false); // End transition
        }, TRANSITION_DURATION); 
    };

    return (
        <section className="portfolio-section" ref={sectionRef}>
            <div className="portfolio-container">
                
                {/* --- NEW HEADER STRUCTURE --- */}
                <div className="portfolio-header">
                    <h2 className="portfolio-title">Recent Projects & Case Studies</h2>
                    <hr className="header-underline" />
                    <p className="portfolio-description">
                        Explore our featured work, demonstrating our expertise in full-stack development, design, and branding.
                    </p>
                </div>
                {/* --- END HEADER STRUCTURE --- */}

                {/* Category Filter Buttons */}
                <div className="category-filters">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(cat)}
                            disabled={isTransitioning} 
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {displayProjects.map((project, index) => {
                        const isLeaving = outgoingProjects.some(p => p.id === project.id);
                        const isEntering = incomingProjects.some(p => p.id === project.id);
                        const delay = index * 0.08; 

                        return (
                            <div 
                                key={project.id} 
                                className={`project-card 
                                    ${isSectionVisible ? 'is-visible-fade-up' : 'initial-hidden'}
                                    ${isLeaving ? 'animate-out-crosscut' : ''}
                                    ${isEntering && !isLeaving ? 'animate-in-crosscut' : ''}
                                `}
                                style={{ 
                                    animationDelay: `${isLeaving ? 0 : delay}s`, 
                                    transitionDelay: `${isLeaving ? 0 : delay}s` 
                                }}
                            >
                                <div className="project-image-wrapper">
                                    <img src={project.imgSrc} alt={project.title} className="project-image" />
                                    {project.cornerTag && <span className="corner-tag">{project.cornerTag}</span>}
                                </div>
                                <div className="project-info">
                                    <div className="project-meta">
                                        <span className="project-category">{project.category}</span>
                                        <span className="project-year">{project.year}</span>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a href="#" className="case-study-link">
                                        View Case Study <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;