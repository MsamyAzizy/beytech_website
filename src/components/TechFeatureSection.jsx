// src/components/JobListingSection.jsx
import React from 'react';
import './JobListingSection.css';

// Component for the individual job card
const JobCard = ({ logo, title, company, location, postedDate, details }) => (
    <div className="job-card">
        {/* Top Row: Logo and Heart Icon */}
        <div className="card-header">
            <div className="card-logo">{logo}</div>
            <div className="card-favorite">❤️</div> {/* Placeholder for heart icon */}
        </div>

        {/* Job Title and Company Info */}
        <h3 className="job-title">{title}</h3>
        <p className="company-info">{company}</p>
        
        {/* Location and Date */}
        <div className="job-meta">
            <span className="meta-item location">📍 {location}</span>
            <span className="meta-item posted">Posted: {postedDate}</span>
        </div>
        
        {/* Horizontal Separator */}
        <hr className="card-divider" />

        {/* Job Details (Bottom Row) */}
        <div className="job-details-grid">
            {details.map((detail, index) => (
                <div key={index} className="detail-item">
                    <span className="detail-value">{detail.value}</span>
                    <span className="detail-label">{detail.label}</span>
                </div>
            ))}
        </div>
    </div>
);

// Main Section Component
const JobListingSection = () => {
    // Dummy Tech-focused Job Data
    const jobData = [
        {
            logo: "🤖",
            title: "Senior AI Engineer",
            company: "NeuralTech Labs",
            location: "San Francisco, USA",
            postedDate: "23 Nov 2025",
            details: [
                { value: "8 year exp", label: "Experience" },
                { value: "Full Time", label: "Type" },
                { value: "$180k", label: "Salary" },
                { value: "Senior", label: "Level" }
            ]
        },
        {
            logo: "☁️",
            title: "Cloud Architect",
            company: "GlobalScale Solutions",
            location: "Dublin, Ireland",
            postedDate: "22 Nov 2025",
            details: [
                { value: "10 year exp", label: "Experience" },
                { value: "Contract", label: "Type" },
                { value: "Competitive", label: "Salary" },
                { value: "Manager", label: "Level" }
            ]
        },
        {
            logo: "🛡️",
            title: "Cybersecurity Analyst",
            company: "Fortress Security Group",
            location: "Berlin, Germany",
            postedDate: "21 Nov 2025",
            details: [
                { value: "5 year exp", label: "Experience" },
                { value: "Full Time", label: "Type" },
                { value: "$110k", label: "Salary" },
                { value: "Mid-level", label: "Level" }
            ]
        },
        {
            logo: "📊",
            title: "Data Scientist Lead",
            company: "Insight Analytics Corp.",
            location: "Toronto, Canada",
            postedDate: "20 Nov 2025",
            details: [
                { value: "7 year exp", label: "Experience" },
                { value: "Part Time", label: "Type" },
                { value: "$130k", label: "Salary" },
                { value: "Lead", label: "Level" }
            ]
        },
        {
            logo: "📱",
            title: "Mobile Dev (Flutter)",
            company: "Connect Apps Inc.",
            location: "Sydney, Australia",
            postedDate: "19 Nov 2025",
            details: [
                { value: "3 year exp", label: "Experience" },
                { value: "Freelance", label: "Type" },
                { value: "Competitive", label: "Salary" },
                { value: "Junior", label: "Level" }
            ]
        },
        {
            logo: "🖥️",
            title: "DevOps Specialist",
            company: "Pipeline Systems",
            location: "Tokyo, Japan",
            postedDate: "18 Nov 2025",
            details: [
                { value: "6 year exp", label: "Experience" },
                { value: "Full Time", label: "Type" },
                { value: "$150k", label: "Salary" },
                { value: "Mid-level", label: "Level" }
            ]
        },
    ];

    return (
        <div className="job-listing-wrapper">
            <div className="job-listing-container">
                <h2 className="listing-main-heading">Explore Tech Opportunities</h2>
                <p className="listing-sub-heading">Find the next step in your technology career across the globe.</p>
                <div className="job-cards-grid">
                    {jobData.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobListingSection;