import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaGraduationCap
} from 'react-icons/fa';
import { secureFormSubmission, logSecurityEvent } from '../utils/security';
import analyticsService from '../services/analytics';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationRules = {
    name: { required: true, minLength: 2, maxLength: 50, pattern: /^[a-zA-Z\s]+$/, message: 'Name must contain only letters and spaces' },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
    subject: { required: true, minLength: 5, maxLength: 100 },
    message: { required: true, minLength: 10, maxLength: 1000 }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Secure form submission with validation
      const validation = secureFormSubmission(formData, validationRules);
      
      if (!validation.isValid) {
        setErrors(validation.errors);
        logSecurityEvent('form_validation_failed', { errors: validation.errors });
        return;
      }
      
      // Log successful form submission
      logSecurityEvent('contact_form_submitted', { 
        hasName: !!validation.sanitizedData.name,
        hasEmail: !!validation.sanitizedData.email,
        hasSubject: !!validation.sanitizedData.subject,
        hasMessage: !!validation.sanitizedData.message
      });
      
      // Track analytics event
      analyticsService.trackEvent('contact_form_submitted', {
        hasName: !!validation.sanitizedData.name,
        hasEmail: !!validation.sanitizedData.email,
        hasSubject: !!validation.sanitizedData.subject,
        hasMessage: !!validation.sanitizedData.message
      });
      
      // Form data processed successfully
      console.log('Form submitted:', validation.sanitizedData);
      
      // Simulate form processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
    } catch (error) {
      logSecurityEvent('form_submission_error', { error: error.message });
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'basantawad014@gmail.com',
      link: 'mailto:basantawad014@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Egypt',
      link: null
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      value: 'Software Engineering Student',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/BasantAwad',
      username: '@BasantAwad'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/basantabdalla',
      username: '@basantabdalla'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="contact-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's discuss your next project or just say hello!</p>
        </motion.section>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.section 
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3 className="contact-info-title">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="contact-info-value">
                      {info.value}
                    </a>
                  ) : (
                    <p className="contact-info-value">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="social-links-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Contact Form */}
          <motion.section 
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
