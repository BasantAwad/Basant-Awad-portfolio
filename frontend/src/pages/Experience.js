import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaUsers, 
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaRobot,
  FaShieldAlt,
  FaMicrochip
} from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      id: 1,
      period: '2021 - Present',
      role: 'Software Engineering Student',
      company: 'University of Technology',
      location: 'Software Engineering Department',
      type: 'Academic',
      description: 'Currently pursuing a Bachelor\'s degree in Software Engineering with focus on web development, database systems, and computer science fundamentals. Active participation in academic projects and research initiatives.',
      achievements: [
        'Developed multiple web applications using JavaScript, HTML, and CSS',
        'Implemented database management systems using Java and SQL',
        'Created Python applications for data management and analysis',
        'Participated in academic projects covering Theory of Computation',
        'Maintained strong academic performance while working on complex projects',
        'Collaborated with peers on innovative software solutions'
      ],
      technologies: ['JavaScript', 'Java', 'Python', 'HTML/CSS', 'SQL', 'Database Design'],
      link: 'https://www.linkedin.com/in/basantabdalla'
    },
    {
      id: 2,
      period: '2022 - 2023',
      role: 'Programming Tutor',
      company: 'Student Learning Center',
      location: 'University Campus',
      type: 'Volunteer',
      description: 'Provided one-on-one and group tutoring sessions for programming courses, helping students understand complex concepts and improve their coding skills.',
      achievements: [
        'Tutored 20+ students in Java and Python programming',
        'Improved student success rates by 25%',
        'Developed study materials and practice exercises',
        'Received excellent feedback from students and faculty',
        'Mentored junior students in programming fundamentals'
      ],
      technologies: ['Java', 'Python', 'Teaching', 'Mentoring'],
      link: null
    }
  ];

  const internships = [
    {
      id: 1,
      period: 'Summer 2023',
      role: 'Software Development Intern',
      company: 'TechStart Solutions',
      location: 'Remote',
      type: 'Internship',
      description: 'Worked on developing web applications and APIs, contributing to the company\'s product development and learning industry best practices.',
      achievements: [
        'Developed RESTful APIs using Spring Boot and Java',
        'Implemented frontend features using React and TypeScript',
        'Participated in code reviews and agile development processes',
        'Learned about CI/CD pipelines and deployment strategies',
        'Collaborated with senior developers on production code',
        'Gained experience with cloud platforms (AWS)'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'Git'],
      link: 'https://www.linkedin.com/in/basantabdalla'
    }
  ];

  const volunteering = [
    {
      id: 1,
      period: '2022 - Present',
      role: 'Open Source Contributor',
      company: 'Various Projects',
      location: 'GitHub',
      type: 'Volunteering',
      description: 'Contributing to open-source projects, helping improve software tools, and learning from the global developer community.',
      achievements: [
        'Contributed to 5+ open-source projects on GitHub',
        'Fixed bugs and implemented new features',
        'Improved documentation and code quality',
        'Received recognition from project maintainers',
        'Helped other developers through issue discussions',
        'Built a network of open-source contributors'
      ],
      technologies: ['Git', 'GitHub', 'Open Source', 'Collaboration', 'Documentation'],
      link: 'https://github.com/BasantAwad'
    },
    {
      id: 2,
      period: '2023 - Present',
      role: 'Coding Mentor',
      company: 'CodeMentor Program',
      location: 'Online',
      type: 'Volunteering',
      description: 'Volunteering as a coding mentor to help beginners learn programming and guide them through their coding journey.',
      achievements: [
        'Mentored 15+ beginner programmers',
        'Conducted weekly coding sessions',
        'Created learning resources and tutorials',
        'Helped students build their first projects',
        'Provided career guidance and advice',
        'Received positive feedback from mentees'
      ],
      technologies: ['Mentoring', 'Teaching', 'Programming', 'Leadership', 'Communication'],
      link: 'https://www.linkedin.com/in/basantabdalla'
    }
  ];

  const skills = {
    technical: [
      { name: 'Programming Languages', items: ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'SQL'] },
      { name: 'Web Development', items: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'] },
      { name: 'Database & Data', items: ['SQL', 'Database Design', 'Data Management', 'CRUD Operations'] },
      { name: 'Academic & Research', items: ['Theory of Computation', 'Algorithms', 'Computer Science', 'Research'] },
      { name: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Development Tools'] }
    ],
    soft: [
      { name: 'Leadership', items: ['Team Management', 'Project Planning', 'Decision Making'] },
      { name: 'Communication', items: ['Technical Writing', 'Presentation Skills', 'Cross-functional Collaboration'] },
      { name: 'Problem Solving', items: ['Analytical Thinking', 'Creative Solutions', 'Systematic Approach'] },
      { name: 'Learning', items: ['Fast Learner', 'Adaptability', 'Continuous Improvement'] }
    ]
  };

  const renderExperienceCard = (experience) => (
    <motion.div
      key={experience.id}
      className="experience-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="experience-header">
        <div className="experience-info">
          <h3>{experience.role}</h3>
          <p className="company">{experience.company}</p>
          <p className="location">{experience.location}</p>
        </div>
        <div className="experience-meta">
          <span className="period">{experience.period}</span>
          <span className={`type ${experience.type.toLowerCase()}`}>{experience.type}</span>
        </div>
      </div>

      <p className="description">{experience.description}</p>

      <div className="achievements">
        <h4>Key Achievements:</h4>
        <ul>
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="technologies">
        <h4>Technologies & Skills:</h4>
        <div className="tech-tags">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="experience-links">
        <a 
          href={experience.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="experience-link"
        >
          <FaExternalLinkAlt /> View Profile
        </a>
      </div>
    </motion.div>
  );

  const renderSkillsSection = (skillsData, title) => (
    <div className="skills-section">
      <h3>{title}</h3>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.name}</h4>
            <div className="skill-items">
              {category.items.map((item, idx) => (
                <span key={idx} className="skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="experience">
      <div className="container">
        <motion.section 
          className="experience-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">My professional journey, internships, and contributions</p>
        </motion.section>

        <div className="experience-content">
          <div className="experience-tabs">
            <button 
              className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              <FaBriefcase /> Work Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
              onClick={() => setActiveTab('internships')}
            >
              <FaGraduationCap /> Internships
            </button>
            <button 
              className={`tab-btn ${activeTab === 'volunteering' ? 'active' : ''}`}
              onClick={() => setActiveTab('volunteering')}
            >
              <FaUsers /> Volunteering
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <FaCode /> Skills Overview
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'work' && (
              <motion.div 
                className="work-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Work Experience</h2>
                <div className="experience-timeline">
                  {workExperience.map(renderExperienceCard)}
                </div>
              </motion.div>
            )}

            {activeTab === 'internships' && (
              <motion.div 
                className="internships-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Internships</h2>
                <div className="experience-timeline">
                  {internships.map(renderExperienceCard)}
                </div>
              </motion.div>
            )}

            {activeTab === 'volunteering' && (
              <motion.div 
                className="volunteering-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Volunteering & Contributions</h2>
                <div className="experience-timeline">
                  {volunteering.map(renderExperienceCard)}
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div 
                className="skills-overview-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Skills Overview</h2>
                {renderSkillsSection(skills.technical, 'Technical Skills')}
                {renderSkillsSection(skills.soft, 'Soft Skills & Competencies')}
              </motion.div>
            )}
          </div>

          <div className="experience-cta">
            <h3>Interested in working together?</h3>
            <p>Let's discuss how I can contribute to your team or project.</p>
            <div className="cta-buttons">
              <a 
                href="/contact" 
                className="btn btn-primary"
              >
                Get In Touch
              </a>
              <a 
                href="/resume" 
                className="btn btn-outline"
              >
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
