import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrophy, 
  FaCertificate, 
  FaMedal, 
  FaStar, 
  FaAward,
  FaGraduationCap,
  FaCode,
  FaExternalLinkAlt,
  FaDownload,
  FaEye,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaLaptopCode,
  FaRobot,
  FaShieldAlt,
  FaDatabase,
  FaGithub
} from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      title: 'Academic Excellence',
      category: 'academic',
      year: '2023',
      issuer: 'University of Technology',
      description: 'Maintained strong academic performance in Software Engineering program, demonstrating excellence in programming, database systems, and computer science fundamentals.',
      icon: <FaGraduationCap />,
      color: '#8E9AAF',
      certificate: null,
      verification: null
    },
    {
      id: 2,
      title: 'Programming Tutor Recognition',
      category: 'volunteering',
      year: '2023',
      issuer: 'Student Learning Center',
      description: 'Recognized for outstanding contribution as a programming tutor, helping fellow students improve their coding skills and understanding of computer science concepts.',
      icon: <FaUsers />,
      color: '#FF6B6B',
      certificate: null,
      verification: null
    },
    {
      id: 3,
      title: 'Web Development Projects',
      category: 'projects',
      year: '2025',
      issuer: 'Personal Portfolio',
      description: 'Successfully developed multiple web applications including car rental system, sustainable development goals showcase, and modern portfolio website.',
      icon: <FaLaptopCode />,
      color: '#4ECDC4',
      certificate: null,
      verification: 'https://github.com/BasantAwad'
    },
    {
      id: 4,
      title: 'Database Management Excellence',
      category: 'academic',
      year: '2025',
      issuer: 'University of Technology',
      description: 'Demonstrated advanced understanding of database systems through comprehensive project development and implementation of complex data management solutions.',
      icon: <FaDatabase />,
      color: '#45B7D1',
      certificate: null,
      verification: 'https://github.com/BasantAwad/Advanced-Database-Project'
    },
    {
      id: 5,
      title: 'Theory of Computation Project',
      category: 'academic',
      year: '2025',
      issuer: 'Computer Science Department',
      description: 'Successfully implemented Theory of Computation concepts including automata, formal languages, and computational complexity in Java.',
      icon: <FaCode />,
      color: '#96CEB4',
      certificate: null,
      verification: 'https://github.com/BasantAwad/TOC'
    },
    {
      id: 6,
      title: 'Open Source Contribution',
      category: 'community',
      year: '2024',
      issuer: 'GitHub Community',
      description: 'Active contributor to open-source projects and maintainer of personal repositories showcasing various programming skills and project implementations.',
      icon: <FaGithub />,
      color: '#333333',
      certificate: null,
      verification: 'https://github.com/BasantAwad'
    },
    {
      id: 7,
      title: 'Data Management Project',
      category: 'projects',
      year: '2025',
      issuer: 'Personal Portfolio',
      description: 'Developed Python-based publication log system for managing and tracking academic documents and research papers.',
      icon: <FaDatabase />,
      color: '#FFA07A',
      certificate: null,
      verification: 'https://github.com/BasantAwad/Publication_Log'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Achievements', icon: <FaTrophy />, count: achievements.length },
    { key: 'academic', label: 'Academic', icon: <FaGraduationCap />, count: achievements.filter(a => a.category === 'academic').length },
    { key: 'certification', label: 'Certifications', icon: <FaCertificate />, count: achievements.filter(a => a.category === 'certification').length },
    { key: 'competition', label: 'Competitions', icon: <FaMedal />, count: achievements.filter(a => a.category === 'competition').length },
    { key: 'recognition', label: 'Recognition', icon: <FaAward />, count: achievements.filter(a => a.category === 'recognition').length }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeFilter);

  const openAchievementModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeAchievementModal = () => {
    setSelectedAchievement(null);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      academic: <FaGraduationCap />,
      certification: <FaCertificate />,
      competition: <FaTrophy />,
      recognition: <FaAward />
    };
    return icons[category] || <FaTrophy />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      academic: '#8E9AAF',
      certification: '#CBC0D3',
      competition: '#EFD3D7',
      recognition: '#EBCEE5'
    };
    return colors[category] || '#8E9AAF';
  };

  return (
    <div className="achievements">
      <div className="container">
        <motion.section 
          className="achievements-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Achievements & Certifications</h1>
          <p className="page-subtitle">Recognition of my hard work and dedication</p>
        </motion.section>

        <div className="achievements-content">
          <div className="achievements-filters">
            <div className="filter-header">
              <FaTrophy />
              <h3>Filter Achievements</h3>
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
            className="achievements-grid"
            layout
          >
            {filteredAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="achievement-header">
                  <div 
                    className="achievement-icon"
                    style={{ backgroundColor: achievement.color }}
                  >
                    {achievement.icon}
                  </div>
                  <div className="achievement-meta">
                    <span className="category">{achievement.category}</span>
                    <span className="year">{achievement.year}</span>
                  </div>
                </div>

                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p className="issuer">{achievement.issuer}</p>
                  <p className="description">{achievement.description}</p>
                </div>

                <div className="achievement-actions">
                  <button 
                    className="view-btn"
                    onClick={() => openAchievementModal(achievement)}
                  >
                    <FaEye /> View Details
                  </button>
                  <a 
                    href={achievement.certificate} 
                    download 
                    className="download-btn"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="achievements-cta">
            <h3>Interested in my qualifications?</h3>
            <p>Download my complete resume or get in touch to discuss opportunities.</p>
            <div className="cta-buttons">
              <a 
                href="/resume" 
                className="btn btn-primary"
              >
                View Resume
              </a>
              <a 
                href="/contact" 
                className="btn btn-outline"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Achievement Modal */}
        {selectedAchievement && (
          <div className="achievement-modal-overlay" onClick={closeAchievementModal}>
            <motion.div 
              className="achievement-modal"
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
                    style={{ backgroundColor: selectedAchievement.color }}
                  >
                    {selectedAchievement.icon}
                  </div>
                  <h2>{selectedAchievement.title}</h2>
                </div>
                <button className="close-modal" onClick={closeAchievementModal}>×</button>
              </div>

              <div className="modal-content">
                <div className="achievement-details">
                  <div className="detail-row">
                    <span className="detail-label">Category:</span>
                    <span className="detail-value">{selectedAchievement.category}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Year:</span>
                    <span className="detail-value">{selectedAchievement.year}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Issuer:</span>
                    <span className="detail-value">{selectedAchievement.issuer}</span>
                  </div>
                </div>

                <div className="achievement-description">
                  <h4>Description</h4>
                  <p>{selectedAchievement.description}</p>
                </div>

                <div className="achievement-actions-modal">
                  <a 
                    href={selectedAchievement.certificate} 
                    download 
                    className="btn btn-primary"
                  >
                    <FaDownload /> Download Certificate
                  </a>
                  <a 
                    href={selectedAchievement.verification} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <FaExternalLinkAlt /> Verify Online
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
