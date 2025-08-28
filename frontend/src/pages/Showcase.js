import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRobot, 
  FaShieldAlt, 
  FaMicrochip, 
  FaGithub,
  FaExternalLinkAlt,
  FaEye,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaPalette,
  FaUsers,
  FaChartLine,
  FaCog,
  FaRocket
} from 'react-icons/fa';
import './Showcase.css';

const Showcase = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      category: 'web',
      client: 'TechRetail Solutions',
      duration: '3 months',
      teamSize: '3 developers',
      challenge: 'Modernize legacy e-commerce system with poor performance, outdated UI, and limited mobile support.',
      solution: 'Developed a full-stack React application with Django backend, implementing modern architecture, responsive design, and performance optimizations.',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'Stripe API', 'Docker'],
      results: [
        'Improved page load speed by 60%',
        'Increased mobile conversion rate by 45%',
        'Reduced server costs by 30%',
        'Enhanced user experience with modern UI/UX'
      ],
      process: [
        'Requirements analysis and user research',
        'Architecture design and technology selection',
        'Agile development with 2-week sprints',
        'Comprehensive testing and quality assurance',
        'Deployment and performance monitoring'
      ],
      images: ['/showcase/ecommerce-1.jpg', '/showcase/ecommerce-2.jpg'],
      github: 'https://github.com/BasantAwad/ecommerce-platform',
      live: 'https://ecommerce-demo.basant.dev'
    },
    {
      id: 2,
      title: 'AI-Powered Customer Service Chatbot',
      category: 'ai',
      client: 'ServiceCorp Inc.',
      duration: '4 months',
      teamSize: '2 developers + 1 ML engineer',
      challenge: 'Reduce customer service response time and handle 24/7 inquiries with intelligent automation.',
      solution: 'Built an NLP-powered chatbot using TensorFlow and NLTK, integrated with existing CRM systems for seamless customer support.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'Redis', 'Docker'],
      results: [
        'Reduced response time from 2 hours to 2 minutes',
        'Handled 80% of common inquiries automatically',
        'Improved customer satisfaction by 35%',
        'Reduced support staff workload by 40%'
      ],
      process: [
        'Data collection and preprocessing',
        'Model training and optimization',
        'API development and integration',
        'User acceptance testing',
        'Production deployment and monitoring'
      ],
      images: ['/showcase/chatbot-1.jpg', '/showcase/chatbot-2.jpg'],
      github: 'https://github.com/BasantAwad/ai-chatbot',
      live: 'https://chatbot-demo.basant.dev'
    },
    {
      id: 3,
      title: 'Smart Home Automation System',
      category: 'iot',
      client: 'HomeTech Innovations',
      duration: '5 months',
      teamSize: '4 developers + 2 hardware engineers',
      challenge: 'Create an integrated smart home system controlling multiple devices with energy optimization and security features.',
      solution: 'Developed IoT solution using Arduino microcontrollers, MQTT protocol, and mobile app for centralized control and automation.',
      technologies: ['Arduino', 'Python', 'MQTT', 'React Native', 'Node.js', 'MongoDB'],
      results: [
        'Reduced energy consumption by 25%',
        'Enhanced home security with smart monitoring',
        'Improved user convenience with automation',
        'Scalable architecture for future expansion'
      ],
      process: [
        'Hardware selection and prototyping',
        'Firmware development and testing',
        'Backend API and database design',
        'Mobile app development',
        'Integration testing and deployment'
      ],
      images: ['/showcase/iot-1.jpg', '/showcase/iot-2.jpg'],
      github: 'https://github.com/BasantAwad/iot-home-automation',
      live: null
    },
    {
      id: 4,
      title: 'Cybersecurity Network Monitor',
      category: 'cybersecurity',
      client: 'SecureNet Corp.',
      duration: '3 months',
      teamSize: '2 developers + 1 security expert',
      challenge: 'Develop real-time network monitoring tool with threat detection and automated response capabilities.',
      solution: 'Built network security monitoring system using Python, implementing packet analysis, intrusion detection, and machine learning for threat detection.',
      technologies: ['Python', 'Snort', 'Scapy', 'Machine Learning', 'Flask', 'SQLite'],
      results: [
        'Detected 95% of network threats in real-time',
        'Reduced false positives by 60%',
        'Automated response to common threats',
        'Comprehensive logging and reporting'
      ],
      process: [
        'Security requirements analysis',
        'Network protocol implementation',
        'ML model development',
        'Security testing and validation',
        'Deployment and monitoring'
      ],
      images: ['/showcase/security-1.jpg', '/showcase/security-2.jpg'],
      github: 'https://github.com/BasantAwad/network-monitor',
      live: null
    }
  ];

  const categories = [
    { key: 'all', label: 'All Case Studies', icon: <FaCode />, count: caseStudies.length },
    { key: 'web', label: 'Web Development', icon: <FaLaptopCode />, count: caseStudies.filter(c => c.category === 'web').length },
    { key: 'ai', label: 'AI & Machine Learning', icon: <FaRobot />, count: caseStudies.filter(c => c.category === 'ai').length },
    { key: 'iot', label: 'IoT & Hardware', icon: <FaMicrochip />, count: caseStudies.filter(c => c.category === 'iot').length },
    { key: 'cybersecurity', label: 'Cybersecurity', icon: <FaShieldAlt />, count: caseStudies.filter(c => c.category === 'cybersecurity').length }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === activeFilter);

  const openCaseStudyModal = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeCaseStudyModal = () => {
    setSelectedCaseStudy(null);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      web: <FaLaptopCode />,
      ai: <FaRobot />,
      iot: <FaMicrochip />,
      cybersecurity: <FaShieldAlt />
    };
    return icons[category] || <FaCode />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      web: '#8E9AAF',
      ai: '#CBC0D3',
      iot: '#EFD3D7',
      cybersecurity: '#EBCEE5'
    };
    return colors[category] || '#8E9AAF';
  };

  return (
    <div className="showcase">
      <div className="container">
        <motion.section 
          className="showcase-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Case Studies & Showcase</h1>
          <p className="page-subtitle">Detailed project presentations and success stories</p>
        </motion.section>

        <div className="showcase-content">
          <div className="showcase-filters">
            <div className="filter-header">
              <FaCode />
              <h3>Filter Case Studies</h3>
            </div>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.key)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  <span className="filter-label">{category.label}</span>
                  <span className="filter-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            className="showcase-grid"
            layout
          >
            {filteredCaseStudies.map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                className="case-study-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="case-study-header">
                  <div 
                    className="case-study-icon"
                    style={{ backgroundColor: getCategoryColor(caseStudy.category) }}
                  >
                    {getCategoryIcon(caseStudy.category)}
                  </div>
                  <div className="case-study-meta">
                    <span className="category">{caseStudy.category}</span>
                    <span className="duration">{caseStudy.duration}</span>
                  </div>
                </div>

                <div className="case-study-content">
                  <h3>{caseStudy.title}</h3>
                  <p className="client">{caseStudy.client}</p>
                  <p className="team-size">{caseStudy.teamSize}</p>
                  
                  <div className="case-study-summary">
                    <h4>Challenge</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>

                  <div className="case-study-summary">
                    <h4>Solution</h4>
                    <p>{caseStudy.solution}</p>
                  </div>

                  <div className="technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {caseStudy.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {caseStudy.technologies.length > 4 && (
                        <span className="tech-tag more">+{caseStudy.technologies.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="case-study-actions">
                  <button 
                    className="view-case-study-btn"
                    onClick={() => openCaseStudyModal(caseStudy)}
                  >
                    <FaEye /> View Full Case Study
                  </button>
                  <div className="case-study-links">
                    <a 
                      href={caseStudy.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="case-study-link github"
                    >
                      <FaGithub /> Code
                    </a>
                    {caseStudy.live && (
                      <a 
                        href={caseStudy.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="case-study-link live"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Case Study Modal */}
        {selectedCaseStudy && (
          <div className="case-study-modal-overlay" onClick={closeCaseStudyModal}>
            <motion.div 
              className="case-study-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-title">
                  <div 
                    className="modal-icon"
                    style={{ backgroundColor: getCategoryColor(selectedCaseStudy.category) }}
                  >
                    {getCategoryIcon(selectedCaseStudy.category)}
                  </div>
                  <h2>{selectedCaseStudy.title}</h2>
                </div>
                <button className="close-modal" onClick={closeCaseStudyModal}>×</button>
              </div>

              <div className="modal-content">
                <div className="case-study-overview">
                  <div className="overview-grid">
                    <div className="overview-item">
                      <span className="overview-label">Client</span>
                      <span className="overview-value">{selectedCaseStudy.client}</span>
                    </div>
                    <div className="overview-item">
                      <span className="overview-label">Duration</span>
                      <span className="overview-value">{selectedCaseStudy.duration}</span>
                    </div>
                    <div className="overview-item">
                      <span className="overview-label">Team Size</span>
                      <span className="overview-value">{selectedCaseStudy.teamSize}</span>
                    </div>
                    <div className="overview-item">
                      <span className="overview-label">Category</span>
                      <span className="overview-value">{selectedCaseStudy.category}</span>
                    </div>
                  </div>
                </div>

                <div className="case-study-details">
                  <div className="detail-section">
                    <h3>Challenge</h3>
                    <p>{selectedCaseStudy.challenge}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Solution</h3>
                    <p>{selectedCaseStudy.solution}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Development Process</h3>
                    <ol>
                      {selectedCaseStudy.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="detail-section">
                    <h3>Technologies Used</h3>
                    <div className="tech-list">
                      {selectedCaseStudy.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Results & Impact</h3>
                    <ul>
                      {selectedCaseStudy.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="case-study-actions-modal">
                  <a 
                    href={selectedCaseStudy.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaGithub /> View Code
                  </a>
                  {selectedCaseStudy.live && (
                    <a 
                      href={selectedCaseStudy.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
