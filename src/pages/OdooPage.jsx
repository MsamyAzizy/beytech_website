// src/pages/OdooPage.jsx
import React, { useRef, useEffect, useState } from 'react';
import './OdooPage.css';
// 💥 REMOVED: import Navbar from '../components/Navbar'; 
// Placeholder image imports based on your prompt
import OdooCertifiedImage from '../assets/ODOO17CERT.webp';
//import OdooPartnerLogo from '../assets/o1.png'; // Assuming a generic partner logo asset

// --- Custom Hook for Persistent On-Scroll Visibility (Unchanged) ---
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


const OdooPage = () => {
    const [contentRef, isContentVisible] = useVisibilityEffect({ threshold: 0.1 });

    return (
        <div className="odoo-page-container">
            {/* 💥 REMOVED: <Navbar /> */}
            
            {/* 1. Hero Header Section */}
            <div className="odoo-hero-header">
                <h1 className="odoo-main-title">Odoo ERP Suite</h1>
            </div>

            <div className="odoo-content-wrapper">
                
                {/* 2. Intro Text Section */}
                <p className="odoo-intro-text">
                    Odoo is one of the best Enterprise Resource Planning (ERP) in the world with a lot of business applications suitable for businesses ranging from small, medium, and large enterprise. This solution has various modules for different operations. It is a web-based solution, so you can access your database wherever you are with any device. It has a good workflow and integration capabilities with Sales/CRM by linking with customer details available in your existing database. 
                </p>

                {/* 3. Main Two-Column Content Grid */}
                <div ref={contentRef} className="odoo-main-grid">
                    
                    {/* LEFT COLUMN: Images and Certifications */}
                    <div 
                        className={`odoo-left-column ${isContentVisible ? 'is-visible-fade' : 'initial-hidden'}`}
                    >
                        <div className="odoo-image-block">
                            <img 
                                src={OdooCertifiedImage} 
                                alt="Odoo 17 Certified Badge" 
                                className="odoo-certified-image" 
                            />
                            <p className="image-caption">Certified 17</p>
                        </div>

                        <div className="odoo-image-block">
                            <img 
                                alt="Odoo Ready Partner" 
                                className="odoo-partner-logo" 
                            />
                            <p className="image-caption">Odoo Partner</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Product Info and Module Details */}
                    <div 
                        className={`odoo-right-column ${isContentVisible ? 'is-visible-fade' : 'initial-hidden'}`}
                    >
                        
                        {/* A. Product Info Block (Revised Intro) */}
                        <div className="module-detail-block">
                            <h3 className="module-title-underline">Product Info</h3>
                            <p>
                                ODOO is widely accepted in various business sectors, including production, Food, Wholesale, Retail, Health, Construction, Agriculture, Real Estate, Transportation, and distribution sectors. In all major sectors, ODOO is one of the best ERP solutions. We have well trained and experienced system analysts and developers who are well equipped and have been working with ODOO ERP solution in different regions.
                            </p>
                        </div>

                        {/* B. Accounting Module Block */}
                        <div className="module-detail-block">
                            <h3 className="module-title-underline">Accounting Module</h3>
                            <p>
                                The Accounting module helps to create and send professional invoices, manage vendor bills, and automate follow-ups to get paid quickly. Get a clear forecast of your future bills and expenses.
                            </p>
                        </div>
                        
                        {/* C. Sales Module Block (NEW) */}
                        <div className="module-detail-block">
                            <h3 className="module-title-underline">Sales Module</h3>
                            <p>
                                The Sales module streamlines your entire sales process, from quote creation and order confirmation to invoicing. Manage your customer relationships (CRM) effectively, track leads, and gain accurate sales forecasts.
                            </p>
                        </div>
                        
                        {/* D. HR Module Block (NEW) */}
                        <div className="module-detail-block">
                            <h3 className="module-title-underline">HR Module</h3>
                            <p>
                                The HR (Human Resources) module manages all personnel-related tasks including employee records, recruitment, appraisals, and leaves. It provides a central place for employees to manage their information and requests.
                            </p>
                        </div>
                        
                        {/* E. Procurement Module Block (NEW) */}
                        <div className="module-detail-block">
                            <h3 className="module-title-underline">Procurement/Inventory Module</h3>
                            <p>
                                This module (often split into Purchase and Inventory in Odoo) manages your supplier relationships, purchase orders, and stock levels. Automate ordering based on inventory forecasts, track product movement, and optimize warehouse operations.
                            </p>
                        </div>
                        
                        {/* F. Other Modules */}
                        <div className="module-detail-block">
                            <h3 className="module-title-underline">Other Key Modules</h3>
                            <p>
                                Odoo also offers powerful applications for Manufacturing (MRP), Website & E-commerce, Project Management, and Point of Sale (PoS), providing a truly integrated solution for every business operation.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OdooPage