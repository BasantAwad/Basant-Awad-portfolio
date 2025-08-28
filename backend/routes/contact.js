const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Validation middleware
const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Subject must be between 5 and 100 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
    .escape()
];

// POST /api/contact - Submit contact form
router.post('/', validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: errors.array() 
      });
    }

    const result = await contactController.submitContact(req.body);
    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: result
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      error: 'Failed to submit contact form',
      message: 'Please try again later or contact me directly.'
    });
  }
});

// GET /api/contact - Get contact information (public)
router.get('/', async (req, res) => {
  try {
    const contactInfo = await contactController.getContactInfo();
    res.json(contactInfo);
  } catch (error) {
    console.error('Get contact info error:', error);
    res.status(500).json({
      error: 'Failed to retrieve contact information'
    });
  }
});

module.exports = router;
