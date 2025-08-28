import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaCode, 
  FaTools, 
  FaDownload, 
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaMicrochip,
  FaGithub,
  FaProjectDiagram,
  FaCogs
} from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      period: '2021 - 2025',
      degree: 'Bachelor of Software Engineering',
      institution: 'University of Technology',
      location: 'Software Engineering Department',
      description: 'Comprehensive program covering software development, database systems, web technologies, and computer science fundamentals.',
      achievements: [
        'Focus on web development, database management, and programming fundamentals',
        'Active participation in academic projects and research',
        'Strong foundation in Java, Python, JavaScript, and SQL',
        'Understanding of software engineering principles and best practices'
      ]
    }
  ];

  const skills = {
    programming: [
      { name: 'Java', icon: <FaCode /> },
      { name: 'Python', icon: <FaCode /> },
      { name: 'JavaScript', icon: <FaCode /> },
      { name: 'HTML/CSS', icon: <FaCode /> },
      { name: 'SQL', icon: <FaDatabase /> }
    ],
    technologies: [
      { name: 'Web Development', icon: <FaLaptopCode /> },
      { name: 'Database Design', icon: <FaDatabase /> },
      { name: 'Git & GitHub', icon: <FaGithub /> },
      { name: 'Data Management', icon: <FaDatabase /> },
      { name: 'Computer Science', icon: <FaGraduationCap /> }
    ],
    frameworks: [
      { name: 'React', icon: <FaLaptopCode /> },
      { name: 'Node.js', icon: <FaLaptopCode /> },
      { name: 'Express.js', icon: <FaLaptopCode /> },
      { name: 'Spring Boot', icon: <FaLaptopCode /> }
    ],
  
    tools: [
      { name: 'Git & GitHub', icon: <FaGithub /> },
      { name: 'VS Code / IntelliJ', icon: <FaTools /> },
      { name: 'Postman', icon: <FaTools /> },
      { name: 'Docker (basics)', icon: <FaCogs /> }
    ],
  
    domains: [
      { name: 'Web Development', icon: <FaLaptopCode /> },
      { name: 'Database Design', icon: <FaDatabase /> },
      { name: 'Data Management', icon: <FaDatabase /> },
      { name: 'Computer Science Fundamentals', icon: <FaGraduationCap /> },
      { name: 'Software Engineering Concepts', icon: <FaProjectDiagram /> }
    ]
  };

  const experience = [
    {
      period: '2021 - Present',
      role: 'Software Engineering Student',
      company: 'University of Technology',
      location: 'Software Engineering Department',
      description: 'Currently pursuing degree in Software Engineering with focus on web development, database systems, and computer science fundamentals.',
      achievements: [
        'Developed multiple web applications using JavaScript, HTML, and CSS',
        'Implemented database management systems using Java and SQL',
        'Created Python applications for data management and analysis',
        'Participated in academic projects covering Theory of Computation',
        'Maintained strong academic performance while working on complex projects'
      ]
    },
    {
      period: '2022 - 2023',
      role: 'Programming Tutor',
      company: 'Student Learning Center',
      location: 'University Campus',
      description: 'Provided one-on-one and group tutoring sessions for programming courses, helping students understand complex concepts.',
      achievements: [
        'Tutored 20+ students in Java and Python programming',
        'Improved student success rates by 25%',
        'Developed study materials and practice exercises',
        'Received excellent feedback from students and faculty'
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Car Rental App',
      category: 'web',
      image: '/project-images/car-rental.jpg',
      description: 'A JavaScript-based car rental application with modern UI/UX design. Features include vehicle browsing, booking management, and user authentication.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
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
      tech: ['Java', 'SQL', 'Database Design'],
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
      tech: ['Python', 'Data Management'],
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
      tech: ['Java', 'Algorithms', 'Computer Science'],
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
      tech: ['HTML', 'CSS', 'Web Development'],
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
      tech: ['React', 'CSS3', 'Framer Motion', 'React Router', 'Responsive Design'],
      features: ['Responsive Design', 'Dark/Light Mode', 'Smooth Animations', 'Multiple Pages', 'Interactive Elements', 'Modern UI/UX'],
      github: 'https://github.com/BasantAwad/portfolio',
      live: 'https://basant.dev',
      status: 'Completed',
      year: '2024'
    }
  ];
  

  const renderSkillBar = (skill) => (
    <div key={skill.name} className="skill-item">
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
      </div>
      <div className="skill-bar">
      </div>
    </div>
  );

  return (
    <div className="resume">
      <div className="container">
        <motion.section 
          className="resume-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Interactive Resume</h1>
          <p className="page-subtitle">Professional experience, skills, and achievements</p>
          <div className="resume-actions">
            <a 
              href="/Basant_Abdalla_CV.pdf" 
              download 
              className="btn btn-primary"
            >
              <FaDownload /> Download PDF
            </a>
            <a 
              href="https://www.linkedin.com/in/basantabdalla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FaExternalLinkAlt /> View LinkedIn
            </a>
          </div>
        </motion.section>

        <div className="resume-content">
          <div className="resume-tabs">
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap /> Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <FaCode /> Skills
            </button>
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <FaTools /> Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <FaLaptopCode /> Projects
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'education' && (
              <motion.div 
                className="education-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Education</h2>
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-header">
                      <div className="education-info">
                        <h3>{edu.degree}</h3>
                        <p className="institution">{edu.institution}</p>
                        <p className="location">{edu.location}</p>
                      </div>
                      <div className="education-meta">
                        <span className="year">{edu.period}</span>
                      </div>
                    </div>
                    <p className="description">{edu.description}</p>
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div 
                className="skills-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Technical Skills</h2>
                
                <div className="skills-category">
                  <h3>Programming Languages</h3>
                  {skills.programming.map(renderSkillBar)}
                </div>

                <div className="skills-category">
                  <h3>Frameworks & Libraries</h3>
                  {skills.frameworks.map(renderSkillBar)}
                </div>

                <div className="skills-category">
                  <h3>Tools & Technologies</h3>
                  {skills.tools.map(renderSkillBar)}
                </div>

                <div className="skills-category">
                  <h3>Domain Expertise</h3>
                  {skills.domains.map(renderSkillBar)}
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div 
                className="experience-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Professional Experience</h2>
                {experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-info">
                        <h3>{exp.role}</h3>
                        <p className="company">{exp.company}</p>
                        <p className="location">{exp.location}</p>
                      </div>
                      <div className="experience-meta">
                        <span className="period">{exp.period}</span>
                      </div>
                    </div>
                    <p className="description">{exp.description}</p>
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div 
                className="projects-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div key={index} className="project-card">
                      <h3>{project.title}</h3>
                      <div className="project-tech">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <p className="project-description">{project.description}</p>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt /> View Project
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
