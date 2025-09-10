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
      period: '2021 - 2026',
      degree: 'Bachelor of Software Engineering',
      institution: 'AIU - Alamein International University',
      location: 'Faculty of Computer Science & Engineering',
      description: 'Comprehensive software engineering program emphasizing modern software development, database systems, web technologies, and theoretical foundations of computer science.',
      achievements: [
        'Specialized coursework in web development, database management, software architecture, and AI',
        'Active involvement in academic research projects and hands-on labs',
        'Built strong foundations in Java, Python, JavaScript, SQL, and software engineering principles',
        'Applied best practices in agile development, problem-solving, and system design'
      ]
    }
  ];
  
  const skills = {
    programming: [
      { name: 'Java', level: 90, icon: <FaCode /> },
      { name: 'Python', level: 85, icon: <FaCode /> },
      { name: 'JavaScript (ES6+)', level: 80, icon: <FaCode /> },
      { name: 'HTML5/CSS3', level: 85, icon: <FaCode /> },
      { name: 'SQL (MySQL, SQLite)', level: 85, icon: <FaDatabase /> }
    ],
    technologies: [
      { name: 'Full-Stack Web Development', level: 85, icon: <FaLaptopCode /> },
      { name: 'Database Design & Management', level: 90, icon: <FaDatabase /> },
      { name: 'Git & GitHub (Version Control)', level: 95, icon: <FaGithub /> },
      { name: 'API Development & Integration', level: 80, icon: <FaLaptopCode /> },
      { name: 'Computer Science Fundamentals', level: 85, icon: <FaGraduationCap /> }
    ],
    additional: [
      { name: 'React & Django Frameworks', level: 80, icon: <FaCode /> },
      { name: 'Cybersecurity Basics (IDS, Snort)', level: 75, icon: <FaShieldAlt /> },
      { name: 'Arduino & IoT Systems', level: 70, icon: <FaMicrochip /> },
      { name: 'Agile Project Management', level: 80, icon: <FaProjectDiagram /> },
      { name: 'Technical Writing & Documentation', level: 85, icon: <FaFileAlt /> }
    ]
  };
  
  const experience = [
    {
      period: '2021 - Present',
      role: 'Software Engineering Student',
      company: 'AIU - Alamein International University',
      location: 'Software Engineering Department',
      description: 'Gaining academic and practical experience in software development, algorithms, and database systems while contributing to multiple projects.',
      achievements: [
        'Developed and deployed full-stack web applications using JavaScript, React, and Django',
        'Implemented database systems and optimized queries with SQL and Java',
        'Built Python-based applications for data management and automation',
        'Designed DFA simulators and automata tools for Theory of Computation coursework',
        'Maintained strong academic performance and delivered high-quality projects under tight deadlines'
      ]
    },
    {
      period: '2022 - 2023',
      role: 'Programming Tutor',
      company: 'Student Learning Center',
      location: 'University Campus',
      description: 'Tutored peers in programming fundamentals, helping them strengthen problem-solving and coding skills.',
      achievements: [
        'Tutored 20+ students in Java and Python programming, leading to improved performance',
        'Increased student pass rates by 25% through tailored learning support',
        'Created structured study materials, exercises, and code walkthroughs',
        'Received strong feedback from both students and faculty for teaching effectiveness'
      ]
    },
    {
      period: '2022 - Present',
      role: 'Community & Event Organizer',
      company: 'AIU ICPC Community',
      location: 'University',
      description: 'Founded and organized a student programming community, managing events, training, and competitions.',
      achievements: [
        'Built the ICPC student community from the ground up, managing 300+ students',
        'Planned and executed coding events, workshops, and training sessions',
        'Encouraged non-technical students to join ICPC by making events engaging and rewarding',
        'Handled administrative work, documentation, and leadership responsibilities'
      ]
    }
  ];
  
  const projects = [
    {
      title: 'Car Rental App',
      description: 'Responsive JavaScript-based car rental system with a modern UI/UX, booking flow, and user interaction features.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      link: 'https://github.com/BasantAwad/car-rental-app'
    },
    {
      title: 'Advanced Database Project',
      description: 'A Java-based database management application showcasing advanced SQL concepts, schema design, and data manipulation.',
      technologies: ['Java', 'SQL', 'Database Design'],
      link: 'https://github.com/BasantAwad/Advanced-Database-Project'
    },
    {
      title: 'Publication Log System',
      description: 'Python-based research management tool for storing, tracking, and validating academic publications with automated workflows.',
      technologies: ['Python', 'Data Management', 'File Handling'],
      link: 'https://github.com/BasantAwad/Publication_Log'
    },
    {
      title: 'Theory of Computation (TOC) Tools',
      description: 'Java project implementing automata and formal language concepts, including DFA simulations and computational complexity analysis.',
      technologies: ['Java', 'Algorithms', 'Automata Theory'],
      link: 'https://github.com/BasantAwad/TOC'
    },
    {
      title: 'DFA Simulator with GUI',
      description: 'Interactive Java Swing-based DFA simulator that visualizes states, transitions, and acceptance paths in automata theory.',
      technologies: ['Java', 'Swing GUI', 'Theory of Computation'],
      link: 'https://github.com/BasantAwad/DFA-Simulator'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern and responsive portfolio showcasing projects, achievements, and services with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      link: 'https://github.com/BasantAwad/Portfolio'
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
