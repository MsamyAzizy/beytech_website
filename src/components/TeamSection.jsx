// src/components/TeamSection.jsx
import React from 'react';
import './TeamSection.css';

// 1. IMPORT THE IMAGE using the specified path
import B_placeholderImg from '../assets/B.png'; // Assuming B.png is a generic placeholder

// Placeholder imports for team member images (These files need to exist in '../assets/')
// import simonImg from '../assets/jayvion-simon.jpg';
// import obrienImg from '../assets/lucian-obrien.jpg';
// import bradyImg from '../assets/deja-brady.jpg';
// import steinImg from '../assets/harrison-stein.jpg';


const teamMembers = [
    { 
        name: 'Boss', 
        role: 'CEO', 
        // 2. USE THE IMPORTED VARIABLE
        imgSrc: B_placeholderImg 
    },
    { 
        name: 'MKUU', 
        role: 'Technical Director', 
        // 2. USE THE IMPORTED VARIABLE
        imgSrc: B_placeholderImg 
    },
    { 
        name: 'MADAM', 
        role: 'Chief OPerating Officer', 
        // 2. USE THE IMPORTED VARIABLE
        imgSrc: B_placeholderImg 
    },
    { 
        name: 'XXX', 
        role: 'Chief Technical Officer', 
        // 2. USE THE IMPORTED VARIABLE
        imgSrc: B_placeholderImg 
    },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-content-wrapper">
        <div className="team-header">
          <p className="team-tagline">TEAM</p>
          <h2 className="team-title">Meet our team</h2>
          <p className="team-description">
            Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases.
          </p>
          {/* Placeholder for navigation arrows shown in the image */}
          <div className="team-nav-arrows">
            <span className="arrow left-arrow">{'<'}</span>
            <span className="arrow right-arrow">{'>'}</span>
          </div>
        </div>

        <div className="team-members-grid">
          {teamMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-image-container">
                {/* 3. SWITCH TO USING THE <img> TAG */}
                <img 
                    src={member.imgSrc} 
                    alt={member.name} 
                    className="member-image" 
                />
                {/* Removed the old <div> placeholder */}
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;