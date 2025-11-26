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

// --- Helper function to generate random values for animations ---
const getRandomAnimationProps = () => {
    const factor = 1; // Adjust this to control intensity
    return {
        '--explode-x': `${Math.random() * 400 * (Math.random() > 0.5 ? 1 : -1) * factor}px`,
        '--explode-y': `${Math.random() * 300 * (Math.random() > 0.5 ? 1 : -1) * factor}px`,
        '--explode-rotX': `${Math.random() * 90 * (Math.random() > 0.5 ? 1 : -1)}deg`,
        '--explode-rotY': `${Math.random() * 90 * (Math.random() > 0.5 ? 1 : -1)}deg`,

        '--entry-x': `${Math.random() * 400 * (Math.random() > 0.5 ? 1 : -1) * factor}px`,
        '--entry-y': `${Math.random() * 300 * (Math.random() > 0.5 ? 1 : -1) * factor}px`,
        '--entry-rotX': `${Math.random() * 90 * (Math.random() > 0.5 ? 1 : -1)}deg`,
        '--entry-rotY': `${Math.random() * 90 * (Math.random() > 0.5 ? 1 : -1)}deg`,

        '--random-x': `${Math.random() * 50 * (Math.random() > 0.5 ? 1 : -1)}px`, // Mid-point slight randomness
        '--random-y': `${Math.random() * 50 * (Math.random() > 0.5 ? 1 : -1)}px`,
        '--random-rotX': `${Math.random() * 20 * (Math.random() > 0.5 ? 1 : -1)}deg`,
        '--random-rotY': `${Math.random() * 20 * (Math.random() > 0.5 ? 1 : -1)}deg`,
        '--random-scale': `${1 + Math.random() * 0.2 - 0.1}`, // Small scale variation
    };
};
// ------------------------------------------------------------------


// Placeholder images for the projects (replace with your actual image paths)
import projectImage1 from '../assets/CCTV.jpeg'; 
import projectImage2 from '../assets/IOT.jpeg'; 
import projectImage3 from '../assets/MAL.jpeg'; 
import projectImage4 from '../assets/MOBILE.jpeg'; 
import projectImage5 from '../assets/pharmacy.png'; 
import projectImage6 from '../assets/winny.png'; 
import projectImage7 from '../assets/MOBILE.jpeg'; 
import projectImage8 from '../assets/MOBILE.jpeg'; 
import projectImage9 from '../assets/MOBILE.jpeg'; 


const projects = [
    {
        id: 1,
        category: 'Mobile Apps',
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
        title: 'Secure Fintech Investment Tracker',
        description: 'A cross-platform mobile app offering secure portfolio tracking, real-time stock market data, and biometric authentication for seamless user access.',
        tags: ['React Native', 'Fintech', 'Biometrics'],
        imgSrc: projectImage6,
        year: 2024,
        cornerTag: 'Featured',
    },
    {
        id: 7,
        category: 'Web Development',
        title: 'Custom ERP Logistics Module',
        description: 'Integrated a tailored module into an existing Odoo ERP system to manage complex international freight and customs documentation.',
        tags: ['Odoo', 'Python/Odoo', 'PostgreSQL'],
        imgSrc: projectImage7,
        year: 2023,
        cornerTag: 'Integration',
    },
    {
        id: 8,
        category: 'Branding',
        title: 'Fintech App Icon & Micro-Animations',
        description: 'Designed a unique, modern app icon and a suite of subtle, delightful micro-animations to enhance user interaction and brand recall for a financial app.',
        tags: ['Lottie', 'UI Animation', 'Illustrator'],
        imgSrc: projectImage8,
        year: 2024,
        cornerTag: 'Design Lead',
    },
    {
        id: 9,
        category: 'UI/UX Design',
        title: 'Hospital Management System Redesign',
        description: 'Complete UX overhaul of a legacy hospital management system, focusing on reducing administrative error rates and improving nurse workflow efficiency.',
        tags: ['UX Research', 'Wireframing', 'Accessibility'],
        imgSrc: projectImage9,
        year: 2024,
        cornerTag: 'Ongoing',
    },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'Branding', 'UI/UX Design'];
// Define the required categories array for easy comparison
const REQUIRED_CATEGORIES = ["All", "Web Development", "Mobile Apps", "Branding", "UI/UX Design"];

// Helper function to check if the current categories array matches the required one
const categoriesMatch = (current, required) => {
    if (current.length !== required.length) {
        return false;
    }
    // Check if every element in the current array matches the corresponding element in the required array
    return current.every((value, index) => value === required[index]);
};

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [displayProjects, setDisplayProjects] = useState([]); 
    const [outgoingProjects, setOutgoingProjects] = useState([]); 
    const [incomingProjects, setIncomingProjects] = useState([]); 
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Create refs and visibility states for different parts
    const [sectionRef, isSectionVisible] = useVisibilityEffect({ threshold: 0.1 });
    const [headerRef, isHeaderVisible] = useVisibilityEffect({ threshold: 0.5 });
    // Check filter visibility only if we decide to render them
    const [filtersRef, isFiltersVisible] = useVisibilityEffect({ threshold: 0.3 });
    
    // Check if we should show the filters at all
    const shouldShowFilters = categoriesMatch(categories, REQUIRED_CATEGORIES);

    const TRANSITION_DURATION = 450; // Milliseconds, MUST match CSS filter-animation-duration

    useEffect(() => {
        // Initial load: Add randomProps to initial projects
        setDisplayProjects(projects.map(p => ({ ...p, randomProps: getRandomAnimationProps() })));
    }, []);

    const handleCategoryChange = (cat) => {
        if (cat === selectedCategory || isTransitioning) return;

        setIsTransitioning(true);
        setSelectedCategory(cat);

        const currentProjects = displayProjects;
        
        // Prepare new projects with random animation properties
        const newFilteredProjects = cat === 'All'
            ? projects.map(p => ({ ...p, randomProps: getRandomAnimationProps() })) 
            : projects.filter(project => project.category === cat).map(p => ({ ...p, randomProps: getRandomAnimationProps() }));

        // Use a Set for efficient lookup of new project IDs
        const newFilteredProjectIds = new Set(newFilteredProjects.map(np => np.id));

        // Identify leaving projects, retaining their current randomProps
        const leaving = currentProjects.filter(p => !newFilteredProjectIds.has(p.id));
        
        // Identify entering projects, which are in the new list but not the current list
        const entering = newFilteredProjects.filter(np => !currentProjects.some(p => p.id === np.id));
        
        // Combine all projects (current + incoming + leaving) to render the animation
        const projectsToRender = newFilteredProjects
            .filter(np => !entering.some(e => e.id === np.id)) 
            .map(np => {
                const existing = currentProjects.find(p => p.id === np.id);
                return existing ? existing : np;
            })
            .concat(entering) 
            .concat(leaving); 

            
        setOutgoingProjects(leaving);
        setIncomingProjects(entering);
        setDisplayProjects(projectsToRender);


        setTimeout(() => {
            // After animation, filter down to the final set of projects
            setDisplayProjects(newFilteredProjects); 
            setOutgoingProjects([]); 
            setIncomingProjects([]); 
            setIsTransitioning(false); 
        }, TRANSITION_DURATION); 
    };

    return (
        <section className="portfolio-section" ref={sectionRef}>
            <div className="portfolio-container">
                
                {/* --- HEADER STRUCTURE with new visibility class --- */}
                <div className={`portfolio-header ${isHeaderVisible ? 'is-visible-fade-up' : 'initial-hidden'}`} ref={headerRef}>
                    <h2 className="portfolio-title">Recent Projects & Case Studies</h2>
                    <hr className="header-underline" />
                    <p className="portfolio-description">
                        Explore our featured work, demonstrating our expertise in full-stack development, design, and branding.
                    </p>
                </div>
                
                {/* 💥 CONDITIONAL RENDERING: Only show filters if categories array matches the required list */}
                {shouldShowFilters && (
                    <div className={`category-filters ${isFiltersVisible ? 'is-visible-fade-up' : 'initial-hidden'}`} ref={filtersRef}>
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                                disabled={isTransitioning} 
                                style={{ animationDelay: isFiltersVisible ? `${0.1 * index}s` : '0s' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}
                {/* END CONDITIONAL RENDERING */}


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
                                    ${isSectionVisible ? 'is-visible-fade-up-staggered' : 'initial-hidden'}
                                    ${isLeaving ? 'animate-out-crosscut' : ''}
                                    ${isEntering && !isLeaving ? 'animate-in-crosscut' : ''}
                                `}
                                // Adjusted delay to account for staggered initial load and transitions
                                style={{ 
                                    animationDelay: isLeaving ? '0s' : isEntering ? '0s' : isSectionVisible ? `${delay}s` : '0s', 
                                    transitionDelay: isLeaving ? '0s' : isEntering ? '0s' : isSectionVisible ? `${delay}s` : '0s',
                                    ...(project.randomProps || {}) // Apply random properties for explosion effect
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