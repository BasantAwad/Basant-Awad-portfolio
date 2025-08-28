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
  FaGithub
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
      { name: 'Java', level: 85, icon: <FaCode /> },
      { name: 'Python', level: 80, icon: <FaCode /> },
      { name: 'JavaScript', level: 75, icon: <FaCode /> },
      { name: 'HTML/CSS', level: 85, icon: <FaCode /> },
      { name: 'SQL', level: 80, icon: <FaDatabase /> }
    ],
    technologies: [
      { name: 'Web Development', level: 80, icon: <FaLaptopCode /> },
      { name: 'Database Design', level: 85, icon: <FaDatabase /> },
      { name: 'Git & GitHub', level: 90, icon: <FaGithub /> },
      { name: 'Data Management', level: 75, icon: <FaDatabase /> },
      { name: 'Computer Science', level: 80, icon: <FaGraduationCap /> }
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
      title: 'Car Rental App',
      description: 'JavaScript-based car rental application with modern UI/UX design',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      link: 'https://github.com/BasantAwad/car-rental-app'
    },
    {
      title: 'Advanced Database Project',
      description: 'Java-based database management system demonstrating advanced database concepts',
      technologies: ['Java', 'SQL', 'Database Design'],
      link: 'https://github.com/BasantAwad/Advanced-Database-Project'
    },
    {
      title: 'Publication Log',
      description: 'Python application for managing and tracking publications and academic documents',
      technologies: ['Python', 'Data Management'],
      link: 'https://github.com/BasantAwad/Publication_Log'
    },
    {
      title: 'Theory of Computation (TOC)',
      description: 'Java implementation of Theory of Computation concepts including automata and formal languages',
      technologies: ['Java', 'Algorithms', 'Computer Science'],
      link: 'https://github.com/BasantAwad/TOC'
    }
  ];

  const renderSkillBar = (skill) => (
    <div key={skill.name} className="skill-item">
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
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
