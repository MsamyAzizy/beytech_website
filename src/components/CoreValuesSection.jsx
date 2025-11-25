// src/components/CoreValuesSection.jsx
import React from 'react';
import './CoreValuesSection.css';
import BeyVideo from '../assets/bey.mp4'; // Use the video file

const CoreValuesSection = () => {
    return (
        <section className="core-values-section">
            
            {/* Background Video and Overlay */}
            <video autoPlay loop muted playsInline className="core-values-background-video">
                <source src={BeyVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="core-values-video-overlay"></div> 

            <div className="core-values-content-container">
                
                {/* Left Side: Title */}
                <div className="core-values-title-block">
                    <h2 className="core-values-main-title">
                        STAYING TRUE TO 
                        <br />
                        OUR CORE VALUES
                    </h2>
                    <hr className="core-values-underline" />
                </div>
                
                {/* Right Side: Values List */}
                <div className="core-values-list">
                    
                    {/* Value 1: Quality */}
                    <div className="value-item">
                        <h3 className="value-title">Quality</h3>
                        <p className="value-description">
                            We deliver high quality, scalable and secure solutions to serve your business objectives.
                        </p>
                    </div>

                    {/* Value 2: Value for Money */}
                    <div className="value-item">
                        <h3 className="value-title">Value for money</h3>
                        <p className="value-description">
                            Our cutting-edge software solutions help organizations to streamline their business operation, 
                            reduce cost, enable automation in process and increase revenue.
                        </p>
                    </div>

                    {/* Value 3: Timely */}
                    <div className="value-item">
                        <h3 className="value-title">Timely</h3>
                        <p className="value-description">
                            Transparent project management with maximum adherence to deadlines.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoreValuesSection;