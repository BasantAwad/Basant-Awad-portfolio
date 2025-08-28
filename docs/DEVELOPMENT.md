# Development Guide

This guide explains how to work with the separated frontend, backend, and styling architecture.

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

## Initial Setup

### 1. Clone the Repository
```bash
git clone https://github.com/BasantAwad/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
# Install all dependencies (root, frontend, backend, styles)
npm run install:all

# Or install individually:
npm install                    # Root dependencies
npm run install:frontend      # Frontend dependencies
npm run install:backend       # Backend dependencies
npm run install:styles        # Styles dependencies
```

### 3. Environment Setup

#### Frontend Environment
Create `.env` file in the `frontend/` directory:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENVIRONMENT=development
REACT_APP_GA_TRACKING_ID=GA-XXXXXXXXX
```

#### Backend Environment
Create `.env` file in the `backend/` directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/basant-portfolio
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
FRONTEND_URL=http://localhost:3000
```

## Development Workflow

### Starting Development Servers

#### Option 1: Start All Services
```bash
# Start frontend and backend simultaneously
npm run dev
```

#### Option 2: Start Services Individually
```bash
# Frontend (port 3000)
npm run dev:frontend

# Backend (port 5000)
npm run dev:backend

# Styles (watch mode)
npm run dev:styles
```

### Development URLs
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## Working with Different Parts

### Frontend Development

#### Structure
```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Frontend-specific utilities
```

#### Adding New Components
1. Create component in `frontend/src/components/`
2. Import shared utilities from `../shared/`
3. Use design system classes from styles
4. Add component-specific CSS if needed

#### Example Component
```jsx
// frontend/src/components/Button.js
import React from 'react';
import { validateEmail } from '../../shared/utils';

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

### Backend Development

#### Structure
```
backend/
├── routes/            # API route definitions
├── controllers/       # Business logic
├── models/           # Database models
├── middleware/       # Custom middleware
├── config/           # Configuration files
└── utils/            # Backend utilities
```

#### Adding New API Endpoints
1. Create route file in `backend/routes/`
2. Create controller in `backend/controllers/`
3. Add model if needed in `backend/models/`
4. Register route in `backend/server.js`

#### Example Route
```javascript
// backend/routes/example.js
const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.get('/', exampleController.getAll);
router.post('/', exampleController.create);

module.exports = router;
```

### Styling Development

#### Structure
```
styles/
├── design-system.css  # Main design system
├── components.css     # Component-specific styles
├── utilities.css      # Utility classes
└── themes.css         # Theme configurations
```

#### Adding New Styles
1. Add CSS custom properties to `:root`
2. Create component styles
3. Add utility classes if needed
4. Build with PostCSS: `npm run build`

#### Example Style Addition
```css
/* styles/design-system.css */
:root {
  /* Add new custom properties */
  --color-brand: #ff6b6b;
  --spacing-xl: 2rem;
}

/* Add new component styles */
.brand-button {
  background-color: var(--color-brand);
  padding: var(--spacing-xl);
}
```

### Shared Code Development

#### Structure
```
shared/
├── constants.js       # API endpoints, status codes
├── utils.js          # Common utility functions
└── validation.js     # Shared validation rules
```

#### Adding Shared Code
1. Add constants to `shared/constants.js`
2. Add utilities to `shared/utils.js`
3. Import in both frontend and backend

#### Example Shared Utility
```javascript
// shared/utils.js
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
};
```

## Testing

### Frontend Testing
```bash
cd frontend
npm test                    # Run tests
npm run test:coverage      # Run with coverage
npm run test:watch         # Run in watch mode
```

### Backend Testing
```bash
cd backend
npm test                   # Run tests
npm run test:coverage     # Run with coverage
```

### Shared Code Testing
```bash
# Test shared utilities
node -e "const { validateEmail } = require('./shared/utils'); console.log(validateEmail('test@example.com'));"
```

## Code Quality

### Linting
```bash
# Lint all code
npm run lint

# Lint specific parts
npm run lint:frontend
npm run lint:backend
npm run lint:styles
```

### Formatting
```bash
# Format all code
npm run format

# Format specific parts
npm run format:frontend
npm run format:backend
npm run format:styles
```

## Building for Production

### Build All
```bash
npm run build
```

### Build Individual Parts
```bash
npm run build:frontend
npm run build:backend
npm run build:styles
```

## Database Setup

### MongoDB (Recommended)
1. Install MongoDB locally or use MongoDB Atlas
2. Update `MONGODB_URI` in backend `.env`
3. Run backend server to create collections

### PostgreSQL (Alternative)
1. Install PostgreSQL
2. Update database configuration in backend
3. Run migrations

## Common Development Tasks

### Adding a New Page
1. Create page component in `frontend/src/pages/`
2. Add route in `frontend/src/App.js`
3. Add navigation link in `frontend/src/components/Navbar.js`
4. Add page-specific styles if needed

### Adding a New API Endpoint
1. Create route file in `backend/routes/`
2. Create controller in `backend/controllers/`
3. Add validation using shared constants
4. Register route in `backend/server.js`
5. Test with Postman or similar tool

### Adding New Styling
1. Add CSS custom properties to `styles/design-system.css`
2. Create component styles
3. Build styles: `cd styles && npm run build`
4. Import in frontend components

### Updating Shared Code
1. Modify files in `shared/` directory
2. Update both frontend and backend imports
3. Test changes in both environments

## Debugging

### Frontend Debugging
- Use React Developer Tools
- Check browser console for errors
- Use `console.log` for debugging
- Check network tab for API calls

### Backend Debugging
- Use `console.log` for debugging
- Check server logs
- Use Postman for API testing
- Check database connections

### Database Debugging
- Use MongoDB Compass or similar tool
- Check connection strings
- Verify database permissions

## Performance Optimization

### Frontend Performance
- Use React.memo for expensive components
- Implement code splitting
- Optimize images
- Use lazy loading

### Backend Performance
- Optimize database queries
- Implement caching
- Use compression middleware
- Monitor API response times

## Security Best Practices

### Frontend Security
- Validate all inputs
- Sanitize user data
- Use HTTPS in production
- Implement proper error handling

### Backend Security
- Use environment variables for secrets
- Implement rate limiting
- Validate all inputs
- Use HTTPS in production
- Implement proper authentication

## Deployment

### Frontend Deployment
1. Build frontend: `npm run build:frontend`
2. Deploy to static hosting (Netlify, Vercel, etc.)
3. Update environment variables

### Backend Deployment
1. Build backend: `npm run build:backend`
2. Deploy to cloud hosting (Heroku, AWS, etc.)
3. Set environment variables
4. Configure database

### Styles Deployment
1. Build styles: `npm run build:styles`
2. Include in frontend build
3. Deploy with frontend

## Troubleshooting

### Common Issues

#### Frontend Not Connecting to Backend
- Check `REACT_APP_API_URL` in frontend `.env`
- Verify backend is running on correct port
- Check CORS configuration in backend

#### Backend Database Connection Issues
- Verify database is running
- Check connection string in `.env`
- Verify database permissions

#### Styling Not Updating
- Rebuild styles: `cd styles && npm run build`
- Clear browser cache
- Check CSS imports in frontend

#### Shared Code Not Working
- Verify imports are correct
- Check file paths
- Ensure shared code is built

### Getting Help
1. Check the documentation
2. Review error messages
3. Check GitHub issues
4. Create new issue if needed
