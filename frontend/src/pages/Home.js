import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaDownload, 
  FaCode, 
  FaRobot, 
  FaShieldAlt, 
  FaMicrochip,
  FaArrowRight
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const skills = [
    { icon: <FaCode />, name: 'Java', color: '#8E9AAF' },
    { icon: <FaCode />, name: 'Python', color: '#CBC0D3' },
    { icon: <FaCode />, name: 'JavaScript', color: '#EFD3D7' },
    { icon: <FaCode />, name: 'HTML/CSS', color: '#EBCEE5' },
    { icon: <FaCode />, name: 'SQL', color: '#8E9AAF' },
    { icon: <FaCode />, name: 'Database Design', color: '#CBC0D3' }
  ];

  const quickLinks = [
    { path: '/projects', label: 'Projects', icon: <FaCode /> },
    { path: '/resume', label: 'Resume', icon: <FaDownload /> },
    { path: '/contact', label: 'Contact', icon: <FaArrowRight /> }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm <span className="highlight">Basant Abdalla</span>
              </motion.h1>
              
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Undergraduate Software Engineer | Web Developer | Database Specialist
              </motion.h2>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Passionate about creating innovative solutions through code. 
                Currently pursuing my Bachelor's degree in Software Engineering with expertise 
                in web development, database systems, and computer science fundamentals.
              </motion.p>
              
              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <a 
                  href="/Basant_Abdalla_CV.pdf" 
                  download 
                  className="btn btn-outline"
                >
                  <FaDownload /> Download Resume
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="profile-placeholder">
                <div className="profile-initial">B</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="highlights">
        <div className="container">
          <motion.div 
            className="highlights-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Current Status</h2>
            <div className="current-role">
              <h3>BSc Software Engineering (Class of 2025)</h3>
              <p>Focusing on modern web technologies, AI fundamentals, and cybersecurity practices</p>
            </div>
            
            <div className="skills-showcase">
              <h3>Core Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="container">
          <motion.div 
            className="quick-links-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Quick Access</h2>
            <div className="links-grid">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  className="link-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={link.path} className="link-content">
                    <div className="link-icon">{link.icon}</div>
                    <h3 className="link-title">{link.label}</h3>
                    <FaArrowRight className="arrow-icon" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="social-links">
        <div className="container">
          <motion.div 
            className="social-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <div className="social-buttons">
              <a 
                href="https://github.com/BasantAwad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn github"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/basantabdalla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
