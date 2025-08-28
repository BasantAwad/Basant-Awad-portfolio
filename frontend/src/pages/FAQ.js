import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaQuestionCircle, 
  FaChevronDown, 
  FaChevronUp,
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaRobot,
  FaShieldAlt,
  FaMicrochip
} from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      id: 1,
      question: 'What services do you offer as a software engineer?',
      answer: 'I offer comprehensive software development services including web development (React, Django, Spring Boot), AI and machine learning solutions, IoT development, cybersecurity tools, and mobile app development. I specialize in creating scalable, secure, and user-friendly applications.',
      category: 'services'
    },
    {
      id: 2,
      question: 'What is your experience level and background?',
      answer: 'I am an undergraduate software engineering student with 2+ years of hands-on experience in software development. I have worked on various projects including web applications, AI systems, IoT solutions, and cybersecurity tools. I maintain a 3.8/4.0 GPA and have received multiple awards and certifications.',
      category: 'background'
    },
    {
      id: 3,
      question: 'Do you work on freelance projects?',
      answer: 'Yes, I am available for freelance projects! I enjoy working on diverse projects and can help with web development, AI implementation, IoT solutions, and more. I\'m flexible with project timelines and can work remotely or on-site depending on requirements.',
      category: 'freelance'
    },
    {
      id: 4,
      question: 'What technologies and programming languages do you know?',
      answer: 'I am proficient in multiple programming languages including Java, Python, JavaScript, C++, and SQL. I work with frameworks like React, Django, Spring Boot, and Node.js. I also have experience with AI/ML libraries (TensorFlow, Scikit-learn), cloud platforms (AWS, Google Cloud), and IoT technologies (Arduino, ESP32).',
      category: 'technical'
    },
    {
      id: 5,
      question: 'How do you ensure the security of your applications?',
      answer: 'Security is a top priority in all my projects. I implement best practices including input validation, secure authentication, data encryption, regular security updates, and following OWASP guidelines. I also conduct security testing and vulnerability assessments to ensure robust protection.',
      category: 'security'
    },
    {
      id: 6,
      question: 'What is your development process and methodology?',
      answer: 'I follow an agile development methodology with iterative development cycles. My process includes requirements gathering, planning, development, testing, and deployment. I use version control (Git), implement CI/CD practices, and maintain clear documentation throughout the project lifecycle.',
      category: 'process'
    },
    {
      id: 7,
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, I provide ongoing support and maintenance for all projects I develop. This includes bug fixes, performance optimizations, security updates, and feature enhancements. I believe in building long-term relationships with clients and ensuring their applications continue to perform optimally.',
      category: 'support'
    },
    {
      id: 8,
      question: 'How do you handle project communication and updates?',
      answer: 'I maintain transparent communication throughout the project with regular updates, progress reports, and milestone reviews. I use project management tools, provide detailed documentation, and am always available for questions and feedback. I believe clear communication is key to project success.',
      category: 'communication'
    },
    {
      id: 9,
      question: 'What are your rates and payment terms?',
      answer: 'My rates vary depending on project complexity, timeline, and requirements. I offer competitive pricing for quality work and can work on hourly, project-based, or retainer arrangements. Payment terms are flexible and can be discussed based on project scope and client preferences.',
      category: 'pricing'
    },
    {
      id: 10,
      question: 'How can I get started with a project?',
      answer: 'Getting started is easy! Simply reach out through the contact form, email, or LinkedIn. I\'ll schedule a consultation to discuss your project requirements, timeline, and budget. From there, we can create a detailed project plan and begin development.',
      category: 'getting-started'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Questions', icon: <FaQuestionCircle />, count: faqs.length },
    { key: 'services', label: 'Services', icon: <FaCode />, count: faqs.filter(f => f.category === 'services').length },
    { key: 'background', label: 'Background', icon: <FaUser />, count: faqs.filter(f => f.category === 'background').length },
    { key: 'freelance', label: 'Freelance', icon: <FaEnvelope />, count: faqs.filter(f => f.category === 'freelance').length },
    { key: 'technical', label: 'Technical', icon: <FaRobot />, count: faqs.filter(f => f.category === 'technical').length },
    { key: 'security', label: 'Security', icon: <FaShieldAlt />, count: faqs.filter(f => f.category === 'security').length },
    { key: 'process', label: 'Process', icon: <FaMicrochip />, count: faqs.filter(f => f.category === 'process').length },
    { key: 'support', label: 'Support', icon: <FaPhone />, count: faqs.filter(f => f.category === 'support').length },
    { key: 'communication', label: 'Communication', icon: <FaEnvelope />, count: faqs.filter(f => f.category === 'communication').length },
    { key: 'pricing', label: 'Pricing', icon: <FaDownload />, count: faqs.filter(f => f.category === 'pricing').length },
    { key: 'getting-started', label: 'Getting Started', icon: <FaPaperPlane />, count: faqs.filter(f => f.category === 'getting-started').length }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredFaqs = activeFilter === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFilter);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'basant.abdalla@email.com',
      link: 'mailto:basant.abdalla@email.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Available for remote work worldwide',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/BasantAwad',
      link: 'https://github.com/BasantAwad'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/basantabdalla',
      link: 'https://www.linkedin.com/in/basantabdalla'
    }
  ];

  return (
    <div className="faq">
      <div className="container">
        <motion.section 
          className="faq-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">Find answers to common questions or get in touch</p>
        </motion.section>

        <div className="faq-content">
          <div className="faq-filters">
            <div className="filter-header">
              <FaQuestionCircle />
              <h3>Filter Questions</h3>
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

          <div className="faq-section">
            <h2>Common Questions</h2>
            <div className="faq-list">
              {filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    {openFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <motion.div
                    className={`faq-answer ${openFaq === faq.id ? 'open' : ''}`}
                    initial={false}
                    animate={{ height: openFaq === faq.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-info">
              <h2>Still Have Questions?</h2>
              <p>Feel free to reach out directly or use the contact form below.</p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-detail">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <span className="contact-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="contact-value">{info.value}</a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h3>Connect With Me</h3>
                <div className="social-buttons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Me a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane /> Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
