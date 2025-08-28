// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REFRESH_TOKEN: '/api/auth/refresh',
  ME: '/api/auth/me',
  
  // Contact
  CONTACT: '/api/contact',
  
  // Projects
  PROJECTS: '/api/projects',
  PROJECT_CATEGORIES: '/api/projects/categories',
  PROJECT_TECHNOLOGIES: '/api/projects/technologies',
  
  // Admin
  ADMIN_DASHBOARD: '/api/admin/dashboard',
  ADMIN_CONTACTS: '/api/admin/contacts',
  ADMIN_ANALYTICS: '/api/admin/analytics',
  ADMIN_SETTINGS: '/api/admin/settings',
  ADMIN_BACKUP: '/api/admin/backup',
  ADMIN_LOGS: '/api/admin/logs',
  
  // Analytics
  ANALYTICS_PAGEVIEW: '/api/analytics/pageview',
  ANALYTICS_EVENT: '/api/analytics/event',
  ANALYTICS_CONTACT: '/api/analytics/contact',
  ANALYTICS_DOWNLOAD: '/api/analytics/download',
  ANALYTICS_SUMMARY: '/api/analytics/summary',
  ANALYTICS_POPULAR_PAGES: '/api/analytics/popular-pages',
  ANALYTICS_REFERRERS: '/api/analytics/referrers',
  
  // Health
  HEALTH: '/api/health'
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
};

// Project Categories
export const PROJECT_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'AI & Machine Learning',
  'IoT Development',
  'Cybersecurity',
  'Data Science',
  'DevOps',
  'UI/UX Design',
  'Game Development',
  'Blockchain',
  'Other'
];

// Technologies
export const TECHNOLOGIES = [
  // Frontend
  'React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte',
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Sass', 'Less',
  'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Ant Design',
  
  // Backend
  'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot',
  'PHP', 'Laravel', 'Ruby on Rails', 'ASP.NET', 'FastAPI',
  
  // Databases
  'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis',
  'Firebase', 'Supabase', 'AWS DynamoDB',
  
  // Mobile
  'React Native', 'Flutter', 'Ionic', 'Xamarin', 'Swift',
  'Kotlin', 'Java', 'Objective-C',
  
  // AI & ML
  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV',
  'NLTK', 'SpaCy', 'Hugging Face', 'Keras',
  
  // DevOps & Cloud
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud',
  'Heroku', 'Vercel', 'Netlify', 'GitHub Actions', 'Jenkins',
  
  // Other
  'Git', 'GraphQL', 'REST API', 'WebSocket', 'Socket.io',
  'Three.js', 'D3.js', 'Chart.js', 'Electron', 'Tauri'
];

// Contact Status
export const CONTACT_STATUS = {
  NEW: 'new',
  READ: 'read',
  REPLIED: 'replied',
  SPAM: 'spam'
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
};

// Analytics Event Types
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  CONTACT_SUBMISSION: 'contact_submission',
  PROJECT_VIEW: 'project_view',
  DOWNLOAD: 'download',
  SOCIAL_CLICK: 'social_click',
  THEME_TOGGLE: 'theme_toggle'
};

// Theme Types
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Validation Rules
export const VALIDATION_RULES = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: /^[a-zA-Z\s]+$/
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  PASSWORD: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 128
  },
  SUBJECT: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 100
  },
  MESSAGE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 1000
  }
};

// Error Messages
export const ERROR_MESSAGES = {
  VALIDATION_FAILED: 'Validation failed',
  AUTHENTICATION_FAILED: 'Authentication failed',
  AUTHORIZATION_FAILED: 'Authorization failed',
  RESOURCE_NOT_FOUND: 'Resource not found',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  NETWORK_ERROR: 'Network error',
  UNKNOWN_ERROR: 'An unknown error occurred'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_SUBMITTED: 'Thank you for your message! I will get back to you soon.',
  LOGIN_SUCCESSFUL: 'Login successful',
  LOGOUT_SUCCESSFUL: 'Logout successful',
  PROJECT_CREATED: 'Project created successfully',
  PROJECT_UPDATED: 'Project updated successfully',
  PROJECT_DELETED: 'Project deleted successfully',
  SETTINGS_UPDATED: 'Settings updated successfully'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'basant-portfolio-theme',
  AUTH_TOKEN: 'basant-portfolio-auth-token',
  REFRESH_TOKEN: 'basant-portfolio-refresh-token',
  USER_DATA: 'basant-portfolio-user-data'
};

// API Response Structure
export const API_RESPONSE_STRUCTURE = {
  SUCCESS: {
    success: true,
    message: '',
    data: null
  },
  ERROR: {
    success: false,
    error: '',
    message: '',
    details: null
  }
};
