import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Basant Abdalla</h3>
            <p className="footer-description">
              Undergraduate Software Engineer passionate about creating innovative solutions
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="footer-social">
              <a 
                href="https://github.com/BasantAwad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/basantabdalla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:basant.abdalla@example.com" 
                className="footer-social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <div className="footer-links">
              <a href="/projects" className="footer-link">Projects</a>
              <a href="/resume" className="footer-link">Resume</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Basant Abdalla.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
