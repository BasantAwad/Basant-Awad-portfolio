import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaRobot, 
  FaShieldAlt, 
  FaMicrochip, 
  FaGithub,
  FaExternalLinkAlt,
  FaFilter,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaPalette
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Car Rental App',
      category: 'web',
      image: '/project-images/car-rental.jpg',
      description: 'A JavaScript-based car rental application with modern UI/UX design. Features include vehicle browsing, booking management, and user authentication.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      features: ['Vehicle Catalog', 'Booking System', 'User Authentication', 'Responsive Design', 'Modern UI/UX'],
      github: 'https://github.com/BasantAwad/car-rental-app',
      live: null,
      status: 'Completed',
      year: '2025'
    },
    {
      id: 2,
      title: 'Advanced Database Project',
      category: 'database',
      image: '/project-images/database-project.jpg',
      description: 'A comprehensive Java-based database management system demonstrating advanced database concepts and SQL operations.',
      technologies: ['Java', 'SQL', 'Database Design'],
      features: ['Database Management', 'SQL Operations', 'Data Modeling', 'CRUD Operations'],
      github: 'https://github.com/BasantAwad/Advanced-Database-Project',
      live: null,
      status: 'Completed',
      year: '2025'
    },
    {
      id: 3,
      title: 'Publication Log',
      category: 'data',
      image: '/project-images/publication-log.jpg',
      description: 'A Python application for managing and tracking publications, research papers, and academic documents.',
      technologies: ['Python', 'Data Management'],
      features: ['Publication Tracking', 'Document Management', 'Search Functionality', 'Data Organization'],
      github: 'https://github.com/BasantAwad/Publication_Log',
      live: null,
      status: 'Active',
      year: '2025'
    },
    {
      id: 4,
      title: 'Theory of Computation (TOC)',
      category: 'academic',
      image: '/project-images/toc-project.jpg',
      description: 'Java implementation of Theory of Computation concepts including automata, formal languages, and computational complexity.',
      technologies: ['Java', 'Algorithms', 'Computer Science'],
      features: ['Automata Implementation', 'Language Processing', 'Algorithm Analysis', 'Educational Tools'],
      github: 'https://github.com/BasantAwad/TOC',
      live: null,
      status: 'Completed',
      year: '2025'
    },
    {
      id: 5,
      title: 'Sustainable Development Goals (SDGs)',
      category: 'web',
      image: '/project-images/sdgs-project.jpg',
      description: 'An HTML-based project showcasing the United Nations Sustainable Development Goals with interactive elements and educational content.',
      technologies: ['HTML', 'CSS', 'Web Design'],
      features: ['Interactive Content', 'Educational Resources', 'Responsive Design', 'Goal Tracking'],
      github: 'https://github.com/BasantAwad/SDGs',
      live: null,
      status: 'Completed',
      year: '2025'
    },
    {
      id: 6,
      title: 'ZelleXY',
      category: 'web',
      image: '/project-images/zellexy.jpg',
      description: 'A web-based project with HTML implementation, showcasing modern web development practices and design principles.',
      technologies: ['HTML', 'CSS', 'Web Development'],
      features: ['Modern Design', 'Responsive Layout', 'Interactive Elements', 'Cross-browser Compatibility'],
      github: 'https://github.com/BasantAwad/ZelleXY',
      live: null,
      status: 'Completed',
      year: '2025'
    },
    {
      id: 7,
      title: 'Portfolio Website',
      category: 'web',
      image: '/project-images/portfolio.jpg',
      description: 'Personal portfolio website built with React and styled using the Dreamy Princess color palette. Features dark/light mode, responsive design, and smooth animations.',
      technologies: ['React', 'CSS3', 'Framer Motion', 'React Router', 'Responsive Design'],
      features: ['Responsive Design', 'Dark/Light Mode', 'Smooth Animations', 'Multiple Pages', 'Interactive Elements', 'Modern UI/UX'],
      github: 'https://github.com/BasantAwad/portfolio',
      live: 'https://basant.dev',
      status: 'Completed',
      year: '2024'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <FaCode />, count: projects.length },
    { key: 'web', label: 'Web Development', icon: <FaLaptopCode />, count: projects.filter(p => p.category === 'web').length },
    { key: 'database', label: 'Database', icon: <FaDatabase />, count: projects.filter(p => p.category === 'database').length },
    { key: 'data', label: 'Data Management', icon: <FaDatabase />, count: projects.filter(p => p.category === 'data').length },
    { key: 'academic', label: 'Academic', icon: <FaGraduationCap />, count: projects.filter(p => p.category === 'academic').length },
    { key: 'other', label: 'Other', icon: <FaCode />, count: projects.filter(p => p.category === 'other').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      web: <FaLaptopCode />,
      database: <FaDatabase />,
      data: <FaDatabase />,
      academic: <FaGraduationCap />,
      other: <FaCode />
    };
    return icons[category] || <FaCode />;
  };

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'var(--primary-blue)' : 'var(--secondary-lavender)';
  };

  return (
    <div className="projects">
      <div className="container">
        <motion.section 
          className="projects-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">A showcase of my work across different domains</p>
        </motion.section>

        <div className="projects-content">
          <div className="projects-filters">
            <div className="filter-header">
              <FaFilter />
              <h3>Filter Projects</h3>
            </div>
            <div className="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span className="filter-label">{filter.label}</span>
                  <span className="filter-count">({filter.count})</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            className="projects-grid"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="project-image">
                    <div className="project-placeholder">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className="project-overlay">
                      <button 
                        className="view-project-btn"
                        onClick={() => openProjectModal(project)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span 
                        className="project-status"
                        style={{ backgroundColor: getStatusColor(project.status) }}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag more">+{project.technologies.length - 4}</span>
                      )}
                    </div>

                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <FaGithub /> Code
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link live"
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
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <motion.div 
              className="project-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <button className="close-modal" onClick={closeProjectModal}>×</button>
              </div>

              <div className="modal-content">
                <div className="modal-image">
                  <div className="project-placeholder large">
                    {getCategoryIcon(selectedProject.category)}
                  </div>
                </div>

                <div className="modal-info">
                  <div className="project-meta">
                    <span className="category">{selectedProject.category.toUpperCase()}</span>
                    <span className="year">{selectedProject.year}</span>
                    <span 
                      className="status"
                      style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                    >
                      {selectedProject.status}
                    </span>
                  </div>

                  <p className="description">{selectedProject.description}</p>

                  <div className="technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub /> View Code
                    </a>
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live} 
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

export default Projects;
