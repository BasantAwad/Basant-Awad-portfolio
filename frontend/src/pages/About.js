import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaCode, 
  FaTools, 
  FaHeart, 
  FaBook, 
  FaMusic,
  FaPalette,
  FaCoffee
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      year: '2019 - 2022',
      degree: 'High School Diploma (American Diploma)',
      institution: 'Modern American School (MAS)',
      description: 'Completed a well-rounded program that included SAT preparation, American and Chinese history, along with a variety of fun and educational activities that built both academic and personal growth.'
        },
    {
      year: '2022 - 2026',
      degree: 'BSc Computer Science - Software Engineering',
      institution: 'Alamein International University',
      description: 'Comprehensive program emphasizing modern software engineering principles, full-stack development, database systems, and artificial intelligence fundamentals, with practical projects and research experience.'
    }
  ];
  

  const skills = {
    languages: [
      'Java',
      'Python',
      'JavaScript',
      'HTML/CSS',
      'SQL'
    ],
    frameworks: [
      'Django',
      'React',
      'Node.js',
      'Express.js',
      'Spring Boot',
      'Bootstrap',
      'Tailwind CSS'
    ],
    tools: [
      'Git',
      'Docker',
      'VS Code',
      'IntelliJ IDEA',
      'Postman',
      'Arduino IDE',
      'Figma'
    ],
    databases: [
      'MySQL',
      'MongoDB',
      'SQLite'
    ],
    softSkills: [
      'Problem-Solving',
      'Team Collaboration',
      'Leadership',
      'Adaptability',
      'Time Management',
      'Communication',
      'Critical Thinking',
      'Creativity',
      'Project Management'
    ]
  };
  

  const interests = [
    { icon: <FaBook />, title: 'Reading', description: 'Tech blogs, sci-fi novels, and programming books' },
    { icon: <FaMusic />, title: 'Music', description: 'Classical, electronic, and ambient sounds' },
    { icon: <FaPalette />, title: 'Design', description: 'UI/UX design and creative coding' },
    { icon: <FaCoffee />, title: 'Coffee', description: 'Exploring new coffee shops and brewing methods' },
    { icon: <FaVrCardboard />, title: 'Virtual Reality', description: 'Exploring immersive VR experiences and future tech' },
    { icon: <FaGlobe />, title: 'Traveling', description: 'Discovering new cultures, places, and perspectives' }
  ];
  

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="about-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Get to know the person behind the code</p>
        </motion.section>

        {/* Bio Section */}
        <motion.section 
          className="bio-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bio-content">
            <div className="bio-text">
              <h2>Who I Am</h2>
              <p>
                I'm Basant Abdalla, a passionate undergraduate software engineer with a deep love for 
                creating innovative solutions through code. My journey in technology began with curiosity and has evolved 
                into a commitment to building software that makes a difference in people's lives.
              </p>
              <p>
                I am currently pursuing a degree in Software Engineering with a strong focus on full-stack development. 
                Passionate about leveraging technology to solve real-world challenges, I continuously explore emerging tools, 
                frameworks, and methodologies to stay at the forefront of innovation and deliver impactful solutions.
              </p>

              <p>
                When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects, 
                or mentoring fellow students. I'm passionate about creating inclusive technology solutions and 
                believe in the importance of continuous learning and collaboration in the tech community.
              </p>
            </div>
            <div className="bio-image">
              <div className="bio-placeholder">
                <FaCode className="bio-icon" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Timeline */}
        <motion.section 
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education Journey</h2>
          <div className="timeline">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <div className="timeline-institution">{item.institution}</div>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section 
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3><FaCode /> Programming Languages</h3>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3><FaCode /> Frameworks & Libraries</h3>
              <div className="skills-list">
                {skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3><FaTools /> Development Tools</h3>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3><FaCode /> Databases</h3>
              <div className="skills-list">
                {[...skills.databases].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3><FaTools /> Soft skills</h3>
              <div className="skills-list">
                {skills.softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section 
          className="interests-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Beyond the Code</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="interest-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="interest-icon">{interest.icon}</div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
