import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRobot, 
  FaShieldAlt, 
  FaMicrochip, 
  FaLaptopCode,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaCog,
  FaRocket,
  FaPaintBrush,
  FaClipboardList,
  FaFileAlt,
  FaKeyboard,
  FaProjectDiagram,
  FaHeadset,
  FaUserTie 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: 'Web Design',
      description: 'Creative, user-friendly, and modern designs tailored to client needs.',
      features: ['UI/UX Design', 'Prototyping', 'Responsive Layouts', 'Branding'],
      color: '#FFD6A5'
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Responsive websites and scalable web applications using modern technologies.',
      features: ['Full-Stack Development', 'API Integration', 'Performance Optimization', 'Cross-Browser Support'],
      color: '#8E9AAF'
    },
    {
      icon: <FaRobot />,
      title: 'AI & Machine Learning',
      description: 'Python-based AI projects, data analysis, and intelligent system development.',
      features: ['Data Analysis', 'ML Models', 'Automation', 'Algorithm Implementation'],
      color: '#CBC0D3'
    },
    {
      icon: <FaMicrochip />,
      title: 'Arduino & IoT Projects',
      description: 'Smart hardware projects integrating sensors, microcontrollers, and software.',
      features: ['Embedded Systems', 'IoT Development', 'Sensor Programming', 'Automation'],
      color: '#EBCEE5'
    },
    {
      icon: <FaClipboardList />,
      title: 'Event Planning',
      description: 'Organizing and managing events with attention to detail and creativity.',
      features: ['Planning & Scheduling', 'Team Coordination', 'Logistics Management', 'Budgeting'],
      color: '#FDE2E4'
    },
    {
      icon: <FaFileAlt />,
      title: 'Technical Writing',
      description: 'Clear and structured technical content for documentation and reports.',
      features: ['Documentation', 'Research Reports', 'User Manuals', 'Content Editing'],
      color: '#CDEAC0'
    },
    {
      icon: <FaKeyboard />,
      title: 'Data Entry',
      description: 'Efficient, accurate, and reliable data entry and management services.',
      features: ['Data Cleaning', 'Database Updates', 'Spreadsheet Management', 'Fast Turnaround'],
      color: '#FFF1C1'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Project Management',
      description: 'Effective coordination and delivery of projects within deadlines.',
      features: ['Task Tracking', 'Agile/Scrum Methods', 'Team Leadership', 'Goal-Oriented Execution'],
      color: '#FFDAC1'
    },
    {
      icon: <FaHeadset />,
      title: 'Technical Support',
      description: 'Assisting users and teams with software, hardware, and troubleshooting.',
      features: ['System Setup', 'Bug Fixing', 'User Assistance', 'Remote Support'],
      color: '#B5EAD7'
    },
    {
      icon: <FaUserTie />,
      title: 'Virtual Assistance',
      description: 'Administrative and professional support for businesses and individuals.',
      features: ['Email Management', 'Scheduling', 'Task Automation', 'Client Support'],
      color: '#FFB7B2'
    }
  ];

  const technologies = [
    { name: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'] },
    { name: 'Backend', items: ['Django', 'Node.js', 'Python', 'Java', 'Express.js'] },
    { name: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'] },
    { name: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Arduino IDE', 'Postman'] }
  ];

  return (
    <div className="services">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="services-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">What I Do</h1>
          <p className="page-subtitle">Professional services and solutions I can offer</p>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="services-grid-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Core Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ '--service-color': service.color }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section 
          className="technologies-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technologies I Work With</h2>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="tech-category-title">{tech.name}</h3>
                <div className="tech-items">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-item">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          className="process-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Development Process</h2>
          <div className="process-steps">
            <motion.div
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery & Planning</h3>
                <p>Understanding requirements, planning architecture, and setting project goals</p>
              </div>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Design & Development</h3>
                <p>Creating wireframes, developing features, and implementing functionality</p>
              </div>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Testing & Quality</h3>
                <p>Rigorous testing, bug fixes, and ensuring high code quality</p>
              </div>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Deployment & Support</h3>
                <p>Launching projects, monitoring performance, and providing ongoing support</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Let's discuss your project and see how I can help bring your ideas to life</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                <FaRocket /> Get Started
              </a>
              <a href="/projects" className="btn btn-outline">
                <FaLaptopCode /> View My Work
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
