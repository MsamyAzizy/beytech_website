// src/components/Accordion.jsx
import React, { useState } from 'react';
import './Accordion.css'; // We'll create this CSS next
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionItem = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={toggleOpen}>
                <span className="accordion-number">{item.id}</span>
                <h4 className="accordion-title">{item.title}</h4>
                <span className="accordion-icon">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p>{item.content}</p>
                </div>
            )}
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className="accordion-container">
            {items.map((item, index) => (
                <AccordionItem key={item.id} item={item} index={index} />
            ))}
        </div>
    );
};

export default Accordion;