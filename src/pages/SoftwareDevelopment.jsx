import React, { useState } from 'react';
import './SoftwareDevelopment.css';
import CoreValuesSection from '../components/CoreValuesSection';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaCogs, FaShieldAlt, FaRobot, FaNetworkWired, FaCode } from 'react-icons/fa';

const softwareServicesData = [
  {
    id: 1,
    title: "Web Application Development",
    icon: <FaLaptopCode />,
    shortDesc: "Custom web solutions for businesses of all sizes.",
    fullDesc: "We build scalable and responsive web applications using modern technologies like React, Node.js, and Django. From e-commerce platforms to complex dashboards, our team ensures robust architecture, high performance, and maintainable code."
  },
  {
    id: 2,
    title: "Mobile Application Development",
    icon: <FaMobileAlt />,
    shortDesc: "Native and cross-platform mobile apps.",
    fullDesc: "We create mobile apps for iOS and Android using React Native and Flutter. Our apps are optimized for performance, UX, and scalability, helping businesses engage users directly on their devices."
  },
  {
    id: 3,
    title: "Database & Backend Systems",
    icon: <FaDatabase />,
    shortDesc: "Reliable and efficient data management solutions.",
    fullDesc: "Our team designs secure and scalable databases and backend systems. We ensure high availability, data integrity, and optimized queries using PostgreSQL, MySQL, MongoDB, and serverless architectures."
  },
  {
    id: 4,
    title: "Cloud Solutions",
    icon: <FaCloud />,
    shortDesc: "Cloud hosting, deployment, and infrastructure.",
    fullDesc: "We provide cloud architecture design, deployment, and management services. Using AWS, Azure, and Google Cloud, we ensure scalability, disaster recovery, and cost-effective infrastructure for modern applications."
  },
  {
    id: 5,
    title: "DevOps & CI/CD",
    icon: <FaCogs />,
    shortDesc: "Automated deployment pipelines and monitoring.",
    fullDesc: "Our DevOps team sets up CI/CD pipelines, automated testing, and monitoring tools. This ensures faster deployment, reliable updates, and smooth integration of new features."
  },
  {
    id: 6,
    title: "Cybersecurity Solutions",
    icon: <FaShieldAlt />,
    shortDesc: "Protect your digital assets with advanced security.",
    fullDesc: "We perform security audits, implement authentication systems, and apply encryption standards to safeguard your applications, data, and network infrastructure against potential threats."
  },
  {
    id: 7,
    title: "AI & Automation",
    icon: <FaRobot />,
    shortDesc: "Intelligent solutions using AI & automation.",
    fullDesc: "We develop AI-powered tools, chatbots, and process automation systems that streamline operations, improve customer experiences, and reduce operational costs using machine learning and AI technologies."
  },
  {
    id: 8,
    title: "System Integration",
    icon: <FaNetworkWired />,
    shortDesc: "Seamless integration between systems and apps.",
    fullDesc: "We connect multiple systems, APIs, and platforms to work together efficiently. Our integrations enhance data flow, improve productivity, and create a unified ecosystem for your business operations."
  },
  {
    id: 9,
    title: "Custom Software Solutions",
    icon: <FaCode />,
    shortDesc: "Tailored software for unique business needs.",
    fullDesc: "We craft custom software solutions addressing specific business challenges. From workflow automation to unique internal tools, our solutions are robust, scalable, and aligned with your objectives."
  },
];

const SoftwareDevelopment = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <div className="software-dev-page">

      {/* Hero Section */}
      <section className="sd-hero-section">
        <h1>Software Development Services</h1>
        <p>Explore the wide range of software solutions that Beytech develops to help your business scale and perform at its best.</p>
      </section>

      {/* Services Cards */}
      <section className="sd-services-section">
        <div className="sd-services-grid">
          {softwareServicesData.map(service => (
            <div key={service.id} className="sd-service-card" onClick={() => openModal(service)}>
              <div className="sd-card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="sd-modal-overlay" onClick={closeModal}>
          <div className="sd-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="sd-modal-close" onClick={closeModal}>&times;</span>
            <div className="sd-modal-icon">{selectedService.icon}</div>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.fullDesc}</p>
          </div>
        </div>
      )}

      {/* Core Values Section */}
      <CoreValuesSection />

    </div>
  );
};

export default SoftwareDevelopment;
