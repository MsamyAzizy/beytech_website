// src/components/TeamSection.jsx
import React from 'react'; // Removed useState, useRef
import './TeamSection.css';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Only keeping relevant icons

// Placeholder imports for team member images (Using generic placeholder)
// NOTE: These images should be circular or easily crop to circles.
import B_placeholderImg from '../assets/B.png'; 


// Placeholder data structure for the 4 members visible in the image
const teamMembers = [
    { 
        name: 'BOSS', 
        role: 'Chief Executive Officer', 
        imgSrc: B_placeholderImg, 
        description: 'Drives the company\'s overall vision, strategy, and growth, ensuring alignment with long-term objectives and fostering a culture of innovation and excellence.', 
        twitter: '#', facebook: '#', instagram: '#' 
    },
    { 
        name: 'BENJAMIN DEUS', 
        role: 'Technical Director', 
        imgSrc: B_placeholderImg, 
        description: 'Oversees all technical strategy and execution, ensuring our software architecture is scalable, secure, and utilizes the best modern technologies for superior client solutions.', 
        twitter: '#', facebook: '#', instagram: '#' 
    },
    { 
        name: 'Cessilia Nkuba', 
        role: 'Chief Operating Officer', 
        imgSrc: B_placeholderImg, 
        description: 'Manages the day-to-day operational efficiency and organizational structure. Responsible for optimizing workflows, client success, and translating.', 
        twitter: '#', facebook: '#', instagram: '#' 
    },
    { 
        name: 'Ramadhani Selemani', 
        role: 'Human Resource Manager', 
        imgSrc: B_placeholderImg, 
        description: 'Leads talent acquisition, retention, and development initiatives. Focuses on fostering an inclusive, high-performance work environment that supports employee growth and well-being.', 
        twitter: '#', facebook: '#', instagram: '#' 
    },
    // You can add more members here; the grid will wrap them
];


const TeamSection = () => {
    // The component is now a static grid container, no complex state needed.
    return (
        <section className="team-section">
            <div className="team-content-wrapper">
                
                {/* Header: Centered, Orange Title */}
                <header className="team-header-static">
                    <h2 className="team-title-static">Meet Our Team</h2>
                </header>
                

                {/* Team Member Grid Container: Simple Flex/Grid layout */}
                <div className="team-members-grid-static">
                    {teamMembers.map((member, index) => (
                        <div className="member-card-static" key={index}>
                            
                            {/* Image Container with Orange Ring */}
                            <div className="member-image-container-static">
                                <img 
                                    src={member.imgSrc} 
                                    alt={member.name} 
                                    className="member-image-static" 
                                />
                            </div>
                            
                            <div className="member-details-static">
                                <h3 className="member-name-static">{member.name}</h3>
                                
                                {/* Description sits between name and role in the image */}
                                <p className="member-description-static">{member.description}</p>
                                
                                <p className="member-role-static">{member.role}</p>

                                {/* Social Media Icons at the bottom */}
                                <div className="social-media-icons-static">
                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-static"><FaFacebookF /></a>
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-static"><FaTwitter /></a>
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-static"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;