import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaImage, 
  FaVideo, 
  FaCode, 
  FaPlay, 
  FaExpand,
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaRobot,
  FaShieldAlt,
  FaMicrochip,
  FaFilter,
  FaSearch
} from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const galleryItems = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: 'web',
      type: 'image',
      thumbnail: '/gallery/ecommerce-dashboard.jpg',
      fullSize: '/gallery/ecommerce-dashboard-full.jpg',
      description: 'Admin dashboard for the e-commerce platform showing sales analytics, product management, and user statistics.',
      project: 'E-Commerce Platform',
      technologies: ['React', 'Django', 'Chart.js'],
      github: 'https://github.com/BasantAwad/ecommerce-platform',
      live: 'https://ecommerce-demo.basant.dev'
    },
    {
      id: 2,
      title: 'AI Chatbot Interface',
      category: 'ai',
      type: 'image',
      thumbnail: '/gallery/chatbot-interface.jpg',
      fullSize: '/gallery/chatbot-interface-full.jpg',
      description: 'User interface for the AI-powered customer service chatbot with conversation history and response suggestions.',
      project: 'AI Customer Service Bot',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      github: 'https://github.com/BasantAwad/ai-chatbot',
      live: 'https://chatbot-demo.basant.dev'
    },
    {
      id: 3,
      title: 'IoT Home Control App',
      category: 'iot',
      type: 'image',
      thumbnail: '/gallery/iot-control-app.jpg',
      fullSize: '/gallery/iot-control-app-full.jpg',
      description: 'Mobile application for controlling smart home devices including lights, temperature, and security systems.',
      project: 'Smart Home Automation',
      technologies: ['React Native', 'Arduino', 'MQTT'],
      github: 'https://github.com/BasantAwad/iot-home-automation',
      live: null
    },
    {
      id: 4,
      title: 'Network Security Monitor',
      category: 'cybersecurity',
      type: 'image',
      thumbnail: '/gallery/security-monitor.jpg',
      fullSize: '/gallery/security-monitor-full.jpg',
      description: 'Real-time network security monitoring dashboard showing threat detection, traffic analysis, and alerts.',
      project: 'Cybersecurity Network Monitor',
      technologies: ['Python', 'Snort', 'Machine Learning'],
      github: 'https://github.com/BasantAwad/network-monitor',
      live: null
    },
    {
      id: 5,
      title: 'Machine Learning Data Visualization',
      category: 'ai',
      type: 'image',
      thumbnail: '/gallery/ml-visualization.jpg',
      fullSize: '/gallery/ml-visualization-full.jpg',
      description: 'Interactive data visualization dashboard for machine learning model training and evaluation.',
      project: 'ML Data Analyzer',
      technologies: ['Python', 'Streamlit', 'Plotly'],
      github: 'https://github.com/BasantAwad/ml-analyzer',
      live: 'https://ml-analyzer-demo.basant.dev'
    },
    {
      id: 6,
      title: 'Portfolio Website Demo',
      category: 'web',
      type: 'video',
      thumbnail: '/gallery/portfolio-demo.jpg',
      videoUrl: '/gallery/portfolio-demo.mp4',
      description: 'Video demonstration of the portfolio website features including dark mode, animations, and responsive design.',
      project: 'Personal Portfolio',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      github: 'https://github.com/BasantAwad/portfolio',
      live: 'https://basant.dev'
    },
    {
      id: 7,
      title: 'Task Management API',
      category: 'web',
      type: 'image',
      thumbnail: '/gallery/task-api.jpg',
      fullSize: '/gallery/task-api-full.jpg',
      description: 'API documentation and testing interface for the task management system with Swagger integration.',
      project: 'Task Management API',
      technologies: ['Java', 'Spring Boot', 'Swagger'],
      github: 'https://github.com/BasantAwad/task-management-api',
      live: 'https://task-api-demo.basant.dev'
    },
    {
      id: 8,
      title: 'Weather Station Dashboard',
      category: 'iot',
      type: 'image',
      thumbnail: '/gallery/weather-dashboard.jpg',
      fullSize: '/gallery/weather-dashboard-full.jpg',
      description: 'Real-time weather monitoring dashboard displaying temperature, humidity, pressure, and air quality data.',
      project: 'IoT Weather Station',
      technologies: ['Arduino', 'ESP32', 'Flask'],
      github: 'https://github.com/BasantAwad/weather-station',
      live: null
    },
    {
      id: 9,
      title: 'Code Review Process',
      category: 'web',
      type: 'image',
      thumbnail: '/gallery/code-review.jpg',
      fullSize: '/gallery/code-review-full.jpg',
      description: 'Screenshot showing the code review process and collaboration workflow in development projects.',
      project: 'Development Workflow',
      technologies: ['Git', 'GitHub', 'Code Review'],
      github: 'https://github.com/BasantAwad',
      live: null
    },
    {
      id: 10,
      title: 'Database Schema Design',
      category: 'web',
      type: 'image',
      thumbnail: '/gallery/database-schema.jpg',
      fullSize: '/gallery/database-schema-full.jpg',
      description: 'Database schema diagram showing the structure and relationships for the e-commerce platform.',
      project: 'E-Commerce Platform',
      technologies: ['PostgreSQL', 'Database Design', 'ERD'],
      github: 'https://github.com/BasantAwad/ecommerce-platform',
      live: 'https://ecommerce-demo.basant.dev'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Media', icon: <FaImage />, count: galleryItems.length },
    { key: 'web', label: 'Web Development', icon: <FaLaptopCode />, count: galleryItems.filter(i => i.category === 'web').length },
    { key: 'ai', label: 'AI & Machine Learning', icon: <FaRobot />, count: galleryItems.filter(i => i.category === 'ai').length },
    { key: 'iot', label: 'IoT & Hardware', icon: <FaMicrochip />, count: galleryItems.filter(i => i.category === 'iot').length },
    { key: 'cybersecurity', label: 'Cybersecurity', icon: <FaShieldAlt />, count: galleryItems.filter(i => i.category === 'cybersecurity').length }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.project.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openMediaModal = (item) => {
    setSelectedMedia(item);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
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
    <div className="gallery">
      <div className="container">
        <motion.section 
          className="gallery-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Project Gallery</h1>
          <p className="page-subtitle">Visual showcase of my work and project demos</p>
        </motion.section>

        <div className="gallery-content">
          <div className="gallery-controls">
            <div className="search-section">
              <div className="search-input">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="gallery-filters">
              <div className="filter-header">
                <FaFilter />
                <h3>Filter by Category</h3>
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
          </div>

          <motion.div 
            className="gallery-grid"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="media-container">
                    <div className="media-thumbnail">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="media-placeholder">
                        {getCategoryIcon(item.category)}
                      </div>
                      {item.type === 'video' && (
                        <div className="video-overlay">
                          <FaPlay />
                        </div>
                      )}
                      <div className="media-actions">
                        <button 
                          className="expand-btn"
                          onClick={() => openMediaModal(item)}
                        >
                          <FaExpand />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="item-content">
                    <div className="item-header">
                      <h3>{item.title}</h3>
                      <span 
                        className="category-badge"
                        style={{ backgroundColor: getCategoryColor(item.category) }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <p className="item-description">{item.description}</p>
                    
                    <div className="item-project">
                      <strong>Project:</strong> {item.project}
                    </div>

                    <div className="item-technologies">
                      {item.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="tech-tag more">+{item.technologies.length - 3}</span>
                      )}
                    </div>

                    <div className="item-links">
                      <a 
                        href={item.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="item-link github"
                      >
                        <FaGithub /> Code
                      </a>
                      {item.live && (
                        <a 
                          href={item.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="item-link live"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="no-results">
              <h3>No results found</h3>
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
            </div>
          )}
        </div>

        {/* Media Modal */}
        {selectedMedia && (
          <div className="media-modal-overlay" onClick={closeMediaModal}>
            <motion.div 
              className="media-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-title">
                  <h2>{selectedMedia.title}</h2>
                  <span 
                    className="modal-category"
                    style={{ backgroundColor: getCategoryColor(selectedMedia.category) }}
                  >
                    {selectedMedia.category}
                  </span>
                </div>
                <button className="close-modal" onClick={closeMediaModal}>×</button>
              </div>

              <div className="modal-content">
                <div className="media-display">
                  {selectedMedia.type === 'image' ? (
                    <img 
                      src={selectedMedia.fullSize} 
                      alt={selectedMedia.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <video 
                      src={selectedMedia.videoUrl} 
                      controls
                      poster={selectedMedia.thumbnail}
                    />
                  )}
                  <div className="media-placeholder large">
                    {getCategoryIcon(selectedMedia.category)}
                  </div>
                </div>

                <div className="media-info">
                  <div className="info-section">
                    <h3>Description</h3>
                    <p>{selectedMedia.description}</p>
                  </div>

                  <div className="info-section">
                    <h3>Project</h3>
                    <p>{selectedMedia.project}</p>
                  </div>

                  <div className="info-section">
                    <h3>Technologies</h3>
                    <div className="tech-list">
                      {selectedMedia.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="media-actions-modal">
                    <a 
                      href={selectedMedia.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub /> View Code
                    </a>
                    {selectedMedia.live && (
                      <a 
                        href={selectedMedia.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
