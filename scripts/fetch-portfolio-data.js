const axios = require('axios');
const fs = require('fs');
const path = require('path');

// GitHub API configuration
const GITHUB_USERNAME = 'BasantAwad';
const GITHUB_API_BASE = 'https://api.github.com';

// LinkedIn data (since we can't scrape LinkedIn directly, we'll use manual data)
const LINKEDIN_DATA = {
  profile: {
    name: 'Basant Abdalla',
    headline: 'Undergraduate Software Engineer',
    location: 'Egypt',
    summary: 'Passionate software engineering student with expertise in full-stack development, AI, and cybersecurity.',
    url: 'https://www.linkedin.com/in/basantabdalla/'
  },
  experience: [
    {
      title: 'Software Engineering Student',
      company: 'University of Technology',
      duration: '2021 - Present',
      description: 'Pursuing degree in Software Engineering with focus on web development, AI, and cybersecurity.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'University of Technology',
      duration: '2021 - 2025',
      description: 'Focus on software development, artificial intelligence, and cybersecurity'
    }
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-123456789'
    },
    {
      name: 'Google Cloud Fundamentals',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-987654321'
    }
  ],
  volunteering: [
    {
      role: 'Programming Tutor',
      organization: 'Student Learning Center',
      duration: '2022 - 2023',
      description: 'Provided one-on-one and group tutoring sessions for programming courses'
    },
    {
      role: 'Open Source Contributor',
      organization: 'Various Projects',
      duration: '2022 - Present',
      description: 'Contributing to open-source projects and mentoring junior developers'
    }
  ],
  events: [
    {
      name: 'University Hackathon 2023',
      role: 'Participant',
      date: '2023',
      description: 'Developed AI-powered educational platform'
    },
    {
      name: 'Tech Conference 2023',
      role: 'Attendee',
      date: '2023',
      description: 'Attended sessions on AI, cybersecurity, and web development'
    }
  ]
};

async function fetchGitHubProjects() {
  try {
    console.log('Fetching GitHub projects...');
    
    // Fetch user repositories
    const reposResponse = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    const repos = reposResponse.data;
    
    // Filter and process repositories
    const projects = repos
      .filter(repo => !repo.fork && !repo.private)
      .map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        category: determineCategory(repo),
        description: repo.description || `A ${repo.language || 'software'} project`,
        technologies: [repo.language, ...(repo.topics || [])].filter(Boolean),
        github: repo.html_url,
        live: repo.homepage || null,
        status: repo.archived ? 'Archived' : 'Active',
        year: new Date(repo.created_at).getFullYear(),
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        updated: repo.updated_at,
        topics: repo.topics || []
      }))
      .sort((a, b) => new Date(b.updated) - new Date(a.updated));
    
    return projects;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error.message);
    return [];
  }
}

function determineCategory(repo) {
  const name = repo.name.toLowerCase();
  const description = (repo.description || '').toLowerCase();
  const topics = (repo.topics || []).map(t => t.toLowerCase());
  
  if (topics.includes('ai') || topics.includes('ml') || topics.includes('machine-learning') || 
      name.includes('ai') || name.includes('ml') || description.includes('ai') || description.includes('machine learning')) {
    return 'ai';
  }
  
  if (topics.includes('web') || topics.includes('frontend') || topics.includes('backend') || 
      name.includes('web') || name.includes('app') || description.includes('web')) {
    return 'web';
  }
  
  if (topics.includes('mobile') || topics.includes('android') || topics.includes('ios') || 
      name.includes('mobile') || name.includes('app')) {
    return 'mobile';
  }
  
  if (topics.includes('iot') || topics.includes('arduino') || topics.includes('raspberry') || 
      name.includes('iot') || name.includes('arduino')) {
    return 'iot';
  }
  
  if (topics.includes('security') || topics.includes('cybersecurity') || topics.includes('crypto') || 
      name.includes('security') || name.includes('crypto')) {
    return 'cybersecurity';
  }
  
  return 'other';
}

async function generatePortfolioData() {
  try {
    console.log('Generating portfolio data...');
    
    // Fetch GitHub projects
    const githubProjects = await fetchGitHubProjects();
    
    // Combine all data
    const portfolioData = {
      personal: {
        name: 'Basant Abdalla',
        title: 'Undergraduate Software Engineer',
        email: 'basant.abdalla@example.com',
        location: 'Egypt',
        github: `https://github.com/${GITHUB_USERNAME}`,
        linkedin: 'https://www.linkedin.com/in/basantabdalla/',
        summary: 'Passionate software engineering student with expertise in full-stack development, AI, and cybersecurity. Currently pursuing my degree while actively contributing to open-source projects and participating in hackathons.'
      },
      projects: githubProjects,
      linkedin: LINKEDIN_DATA,
      skills: {
        programming: ['JavaScript', 'Python', 'Java', 'C++', 'SQL'],
        web: ['React', 'Node.js', 'Django', 'HTML/CSS', 'Bootstrap'],
        ai: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
        databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
        tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Arduino'],
        soft: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership']
      },
      achievements: [
        {
          title: 'Dean\'s List Recognition',
          category: 'academic',
          year: '2023',
          description: 'Maintained academic excellence with high GPA'
        },
        {
          title: 'Hackathon Winner',
          category: 'competition',
          year: '2023',
          description: 'Won first place in university hackathon'
        },
        {
          title: 'AWS Cloud Practitioner',
          category: 'certification',
          year: '2024',
          description: 'Earned AWS Cloud Practitioner certification'
        }
      ]
    };
    
    // Save to file
    const outputPath = path.join(__dirname, '../data/portfolio-data.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(portfolioData, null, 2));
    
    console.log(`✅ Portfolio data generated successfully!`);
    console.log(`📁 Saved to: ${outputPath}`);
    console.log(`📊 Found ${githubProjects.length} GitHub projects`);
    console.log(`🎯 Categories: ${[...new Set(githubProjects.map(p => p.category))].join(', ')}`);
    
    return portfolioData;
  } catch (error) {
    console.error('Error generating portfolio data:', error);
    throw error;
  }
}

// Run the script
if (require.main === module) {
  generatePortfolioData()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = { generatePortfolioData, fetchGitHubProjects };
