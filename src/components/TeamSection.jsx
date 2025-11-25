// src/components/TeamSection.jsx
import React, { useState, useRef } from 'react';
import './TeamSection.css';
import { FaChevronLeft, FaChevronRight, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

// Placeholder imports for team member images (Using generic placeholder)
import B_placeholderImg from '../assets/B.png'; 


// Placeholder data structure for 10 members
const teamMembers = [
    { name: 'BEY STAFF NAME', role: 'Project Manager', imgSrc: B_placeholderImg, description: 'XXXXXXXXXXX', twitter: '#', facebook: '#', instagram: '#', linkedin: '#' },
    { name: 'BEY STAFF NAME', role: 'Chief Technology Officer', imgSrc: B_placeholderImg, description: 'XXXXXXXXXXX', twitter: '#', facebook: '#', instagram: '#', linkedin: '#' },
    { name: 'BEY STAFF NAME', role: 'Product Designer', imgSrc: B_placeholderImg, description: 'XXXXXXXXXXX', twitter: '#', facebook: '#', instagram: '#', linkedin: '#' },
    { name: 'BEY STAFF NAME', role: 'Marketing Specialist', imgSrc: B_placeholderImg, description: 'XXXXXXXXXXX', twitter: '#', facebook: '#', instagram: '#', linkedin: '#' },
    { name: 'BEY STAFF NAME', role: 'Software Engineer', imgSrc: B_placeholderImg, description: 'XXXXXXXXXXX.', twitter: '#', facebook: '#', instagram: '#', linkedin: '#' },
   
];

// Configuration
const CARDS_VISIBLE = 4; // Number of cards visible at one time
const TOTAL_CARDS = teamMembers.length;

const TeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    // Determines the last possible starting index (10 total - 4 visible = 6)
    const maxIndex = TOTAL_CARDS - CARDS_VISIBLE; 

    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(0, prevIndex - CARDS_VISIBLE));
    };

    const handleNext = () => {
        // Stops the slide when the last card is visible
        setCurrentIndex(prevIndex => Math.min(maxIndex, prevIndex + CARDS_VISIBLE));
    };
    
    // Disable logic based on non-wrapping carousel
    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex >= maxIndex; 
    
    // Calculate the translation shift percentage for 4 cards to move
    const translateValue = (currentIndex / CARDS_VISIBLE) * 100;
    
    // Calculate the total width of the grid based on the number of cards
    const gridWidth = (TOTAL_CARDS / CARDS_VISIBLE) * 100;


    return (
        <section className="team-section">
            <div className="team-content-wrapper">
                
                {/* Header and Arrows Wrapper */}
                <div className="team-header-and-nav">
                    {/* Centered Section Header */}
                    <div className="team-header-new">
                        <h2 className="team-title-new">Our Professional Team</h2>
                        <hr className="header-underline" />
                        <p className="team-description-new">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec 
                            ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    
                    {/* Navigation Arrows for the carousel */}
                    <div className="team-nav-arrows-new">
                        <span 
                            className={`arrow-new left-arrow-new ${isPrevDisabled ? 'disabled' : ''}`}
                            onClick={handlePrev}
                        >
                            <FaChevronLeft />
                        </span>
                        <span 
                            className={`arrow-new right-arrow-new ${isNextDisabled ? 'disabled' : ''}`}
                            onClick={handleNext}
                        >
                            <FaChevronRight />
                        </span>
                    </div>
                </div>

                {/* Team Member Carousel Container */}
                <div className="team-carousel-wrapper">
                    <div 
                        ref={carouselRef} 
                        className="team-members-grid-new"
                        // Apply CSS translation based on the calculated percentage
                        style={{ 
                            transform: `translateX(-${translateValue}%)`,
                            width: `${gridWidth}%` 
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <div className="member-card-new" key={index}>
                                <div className="member-image-container-new">
                                    <img 
                                        src={member.imgSrc} 
                                        alt={member.name} 
                                        className="member-image-new" 
                                    />
                                    {/* --- SOCIAL MEDIA OVERLAY --- */}
                                    <div className="social-media-overlay-new">
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-new twitter-icon"><FaTwitter /></a>
                                        <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-new facebook-icon"><FaFacebookF /></a>
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-new instagram-icon"><FaInstagram /></a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-new linkedin-icon"><FaLinkedinIn /></a>
                                    </div>
                                    {/* --------------------------- */}
                                </div>
                                <div className="member-details-new">
                                    <h3 className="member-name-new">{member.name}</h3>
                                    <p className="member-role-new">{member.role}</p>
                                    <p className="member-description-new">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> {/* End of team-carousel-wrapper */}
            </div>
        </section>
    );
};

export default TeamSection;