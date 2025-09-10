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
    period: 'Jul 2025 - Aug 2025',
    role: 'Software Engineer Internship',
    company: 'Bibliotheca Alexandrina - مكتبة الإسكندرية',
    location: 'Alexandria, Egypt · Hybrid',
    type: 'Internship',
    description: `Developed a web-based platform for managing, tracking, and archiving research publications related to projects executed on the BA-HPC. The system streamlines follow-ups, automates archiving, and periodically harvests publications from selected sources, providing a centralized solution for researchers and administrators.`,
    achievements: [
      'Designed and implemented core features using Django and Python',
      'Automated publication archiving and PDF retrieval processes',
      'Collaborated with researchers to gather requirements and perform user acceptance testing',
      'Maintained code quality and documentation for long-term project sustainability',
    ],
    technologies: ['Python', 'Django', 'Software Development', 'User  Acceptance Testing', 'Teamwork'],
    link: 'https://github.com/BasantAwad/Publication_Log'
  },
  {
    id: 2,
    period: 'Jul 2025 - Aug 2025',
    role: 'Course Instructor',
    company: 'Bianki Modern School',
    location: 'Alexandria, Egypt · On-site',
    type: 'Seasonal',
    description: `Designed and taught a comprehensive software and hardware curriculum for summer students, covering basics to final projects.`,
    achievements: [
      'Guided students in Scratch programming from fundamentals to developing a fully working game',
      'Introduced Arduino & PictoBlox, leading to a smart greenhouse project with sensors and actuators',
      'Created all presentations and teaching materials independently under high pressure',
      'Built strong relationships with students and parents, receiving excellent feedback',
      'Encouraged creativity and independence; some students designed their own greenhouse systems',
    ],
    technologies: ['Scratch', 'Arduino', 'Arduino IDE', 'PictoBlox', 'Teaching', 'Lesson Planning', 'Working with Children'],
    link: 'https://www.facebook.com/share/r/1CKNTy5iu4/'
  },
  {
    id: 3,
    period: 'Sep 2024 - Jun 2025',
    role: 'Vice President of Organizing Committee',
    company: 'AIU ICPC Community',
    location: "El 'Alamein, Matruh, Egypt · Hybrid",
    type: 'Full-time',
    description: `Co-founded and helped organize the AIU ICPC Community, managing activities for 300+ students. Provided technical mentorship and leadership to foster a collaborative environment for competitive programming.`,
    achievements: [
      'Managed meetings, events, and documentation for the community',
      'Supported members with coding and problem-solving questions',
      'Motivated and expanded participation among initially uninterested students',
      'Strengthened leadership, organizational, and communication skills',
      'Built a supportive space for student development and competitive programming',
    ],
    technologies: ['Leadership', 'Organization Skills', 'Event Planning', 'Project Management', 'Team Motivation', 'Communication', 'Problem Solving'],
    link: 'https://www.facebook.com/share/p/1B7Shvkucq/'
  },
  {
    id: 4,
    period: 'Jul 2024 - Aug 2024',
    role: 'Intern',
    company: 'Information Technology Institute (ITI)',
    location: "El 'Alamein, Matruh, Egypt · Hybrid",
    type: 'Internship',
    description: `Completed field training in Desktop Application Development with Java, focusing on GUI development and database integration.`,
    achievements: [
      'Developed a fully functional live chat application in Java showcasing real-time communication',
      'Gained hands-on experience with Java Swing for GUI development',
      'Integrated MySQL database for persistent data storage',
      'Enhanced problem-solving and software development skills',
    ],
    technologies: ['Java', 'Java Swing', 'GUI', 'MySQL', 'Object-Oriented Programming (OOP)', 'Problem Solving'],
    link: 'https://www.linkedin.com/posts/basantabdalla_javadevelopment-fieldtraining-professionalgrowth-activity-7272370172391247872-1C8-?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdzcioBPYk6KS9KCHRKd2XYgoM2rI5ttBU'
  },
  {
    id: 5,
    period: '2023',
    role: 'Team Guide, AI Olympics & RoboFest',
    company: 'Alamein International University',
    location: 'El Alamein, Egypt',
    type: 'Volunteering',
    description: `Mentored 5+ student teams, resolving technical issues and improving development workflows.`,
    achievements: [
      'Resolved ~15 technical issues, boosting task completion rates by ~40%',
      'Organized sprint planning and led code review sessions to accelerate development',
    ],
    technologies: ['Mentoring', 'Sprint Planning', 'Code Review', 'Teamwork'],
    link: 'https://www.linkedin.com/posts/basantabdalla_aiolympiad2025-aiu-innovation-activity-7296572242035982336-aVh-?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdzcioBPYk6KS9KCHRKd2XYgoM2rI5ttBU'
  },
  {
    id: 6,
    period: '2023 - Present',
    role: 'Logistics Lead',
    company: 'Center for Student Welfare (CSW), Alamein University',
    location: 'El Alamein, Egypt',
    type: 'Volunteering',
    description: `Planned and executed multiple student events, managing resources and budgets.`,
    achievements: [
      'Planned and executed 7+ student events',
      'Managed logistics budgets and resources efficiently',
      'Collaborated with PR teams to enhance event attendance by 20% on average',
    ],
    technologies: ['Event Planning', 'Project Management', 'Collaboration', 'Leadership'],
    link: 'https://www.linkedin.com/posts/basantabdalla_being-part-of-the-centre-for-students-welfare-activity-7313613469923131392-CmDs?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdzcioBPYk6KS9KCHRKd2XYgoM2rI5ttBU'
  }
];
const skills = {
  technical: [
    { name: 'Programming Languages & Frameworks', items: ['Java', 'Python', 'Django', 'Java Swing', 'Scratch'] },
    { name: 'Web & Software Development', items: ['Django', 'Software Development', 'User  Acceptance Testing'] },
    { name: 'Hardware & Embedded Systems', items: ['Arduino', 'Arduino IDE', 'PictoBlox'] },
    { name: 'Databases', items: ['MySQL'] },
    { name: 'Tools & Practices', items: ['Git', 'Teamwork', 'Problem Solving', 'Object-Oriented Programming (OOP)'] }
  ],
  soft: [
    { name: 'Leadership & Management', items: ['Leadership', 'Organization Skills', 'Event Planning', 'Project Management', 'Team Motivation'] },
    { name: 'Communication & Teaching', items: ['Teaching', 'Lesson Planning', 'Working with Children', 'Communication'] },
    { name: 'Mentoring & Collaboration', items: ['Mentoring', 'Teamwork', 'Sprint Planning', 'Code Review'] },
    { name: 'Creativity & Problem Solving', items: ['Creativity Skills', 'Problem Solving'] }
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
