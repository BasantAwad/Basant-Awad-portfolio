// Security utilities for the portfolio website

// Content Security Policy (CSP) headers
export const CSP_HEADERS = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'img-src': ["'self'", "data:", "https:"],
  'connect-src': ["'self'", "https://api.github.com", "https://www.linkedin.com"],
  'frame-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'upgrade-insecure-requests': []
};

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
};

// Input validation and sanitization
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  // Remove potentially dangerous characters
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  return nameRegex.test(name);
};

export const validateMessage = (message) => {
  return message.length >= 10 && message.length <= 1000;
};

// XSS Protection
export const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

// CSRF Protection
export const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

export const validateCSRFToken = (token, storedToken) => {
  return token === storedToken;
};

// Password strength validation
export const validatePasswordStrength = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const score = [
    password.length >= minLength,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSpecialChar
  ].filter(Boolean).length;
  
  return {
    score,
    isStrong: score >= 4,
    feedback: {
      length: password.length >= minLength ? '✓' : `At least ${minLength} characters`,
      uppercase: hasUpperCase ? '✓' : 'Include uppercase letter',
      lowercase: hasLowerCase ? '✓' : 'Include lowercase letter',
      numbers: hasNumbers ? '✓' : 'Include number',
      special: hasSpecialChar ? '✓' : 'Include special character'
    }
  };
};

// File upload validation
export const validateFileUpload = (file, allowedTypes, maxSize) => {
  const allowedMimeTypes = allowedTypes || ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
  const maxFileSize = maxSize || 5 * 1024 * 1024; // 5MB default
  
  if (!file) return { valid: false, error: 'No file provided' };
  
  if (!allowedMimeTypes.includes(file.type)) {
    return { valid: false, error: 'File type not allowed' };
  }
  
  if (file.size > maxFileSize) {
    return { valid: false, error: 'File size too large' };
  }
  
  return { valid: true };
};

// Session management
export const createSecureSession = (userId) => {
  const sessionId = generateCSRFToken();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  
  return {
    id: sessionId,
    userId,
    expiresAt,
    createdAt: new Date()
  };
};

export const isSessionValid = (session) => {
  if (!session || !session.expiresAt) return false;
  return new Date() < new Date(session.expiresAt);
};

// Frontend-only security utilities
export const generateSecureId = () => {
  return 'id_' + Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

export const validateSecureId = (id) => {
  const idRegex = /^id_[a-z0-9]{26}$/;
  return idRegex.test(id);
};

// Logging and monitoring
export const logSecurityEvent = (event, details) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href
  };
  
  // In production, send to logging service
  console.log('Security Event:', logEntry);
  
  // Store in localStorage for demo purposes
  const securityLogs = JSON.parse(localStorage.getItem('securityLogs') || '[]');
  securityLogs.push(logEntry);
  if (securityLogs.length > 100) securityLogs.shift(); // Keep only last 100 logs
  localStorage.setItem('securityLogs', JSON.stringify(securityLogs));
};

// Environment-based security
export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

export const getSecurityHeaders = () => {
  const baseHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
  };
  
  if (isProduction()) {
    baseHeaders['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains';
    baseHeaders['Content-Security-Policy'] = Object.entries(CSP_HEADERS)
      .map(([key, values]) => `${key} ${values.join(' ')}`)
      .join('; ');
  }
  
  return baseHeaders;
};

// Security middleware for forms
export const secureFormSubmission = (formData, validationRules) => {
  const errors = {};
  const sanitizedData = {};
  
  Object.keys(validationRules).forEach(field => {
    const value = formData[field];
    const rules = validationRules[field];
    
    if (rules.required && !value) {
      errors[field] = `${field} is required`;
      return;
    }
    
    if (value) {
      // Sanitize input
      let sanitizedValue = sanitizeInput(value);
      
      // Apply validation rules
      if (rules.minLength && sanitizedValue.length < rules.minLength) {
        errors[field] = `${field} must be at least ${rules.minLength} characters`;
        return;
      }
      
      if (rules.maxLength && sanitizedValue.length > rules.maxLength) {
        errors[field] = `${field} must be no more than ${rules.maxLength} characters`;
        return;
      }
      
      if (rules.pattern && !rules.pattern.test(sanitizedValue)) {
        errors[field] = rules.message || `${field} format is invalid`;
        return;
      }
      
      sanitizedData[field] = sanitizedValue;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData
  };
};

// Export default security configuration
const securityConfig = {
  CSP_HEADERS,
  RATE_LIMIT_CONFIG,
  sanitizeInput,
  validateEmail,
  validateName,
  validateMessage,
  escapeHtml,
  generateCSRFToken,
  validateCSRFToken,
  validatePasswordStrength,
  validateFileUpload,
  createSecureSession,
  isSessionValid,
  generateSecureId,
  validateSecureId,
  logSecurityEvent,
  isProduction,
  getSecurityHeaders,
  secureFormSubmission
};

export default securityConfig;
