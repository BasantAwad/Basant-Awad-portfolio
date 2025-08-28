const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

// All admin routes require authentication
router.use(authMiddleware);

// GET /api/admin/dashboard - Get dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    const stats = await adminController.getDashboardStats();
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({
      error: 'Failed to retrieve dashboard statistics'
    });
  }
});

// GET /api/admin/contacts - Get all contact submissions
router.get('/contacts', async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const contacts = await adminController.getContacts({
      page: parseInt(page),
      limit: parseInt(limit),
      status
    });
    
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      error: 'Failed to retrieve contacts'
    });
  }
});

// PUT /api/admin/contacts/:id/read - Mark contact as read
router.put('/contacts/:id/read', async (req, res) => {
  try {
    const contact = await adminController.markContactAsRead(req.params.id);
    if (!contact) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Contact marked as read',
      data: contact
    });
  } catch (error) {
    console.error('Mark contact as read error:', error);
    res.status(500).json({
      error: 'Failed to mark contact as read'
    });
  }
});

// PUT /api/admin/contacts/:id/reply - Mark contact as replied
router.put('/contacts/:id/reply', async (req, res) => {
  try {
    const contact = await adminController.markContactAsReplied(req.params.id);
    if (!contact) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Contact marked as replied',
      data: contact
    });
  } catch (error) {
    console.error('Mark contact as replied error:', error);
    res.status(500).json({
      error: 'Failed to mark contact as replied'
    });
  }
});

// GET /api/admin/analytics - Get analytics data
router.get('/analytics', async (req, res) => {
  try {
    const { period = '30d' } = req.query;
    const analytics = await adminController.getAnalytics(period);
    
    res.json({
      success: true,
      data: analytics
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({
      error: 'Failed to retrieve analytics'
    });
  }
});

// GET /api/admin/settings - Get admin settings
router.get('/settings', async (req, res) => {
  try {
    const settings = await adminController.getSettings();
    res.json({
      success: true,
      data: settings
    });
  } catch (error) {
    console.error('Get settings error:', error);
    res.status(500).json({
      error: 'Failed to retrieve settings'
    });
  }
});

// PUT /api/admin/settings - Update admin settings
router.put('/settings', async (req, res) => {
  try {
    const settings = await adminController.updateSettings(req.body);
    res.json({
      success: true,
      message: 'Settings updated successfully',
      data: settings
    });
  } catch (error) {
    console.error('Update settings error:', error);
    res.status(400).json({
      error: 'Failed to update settings',
      message: error.message
    });
  }
});

// POST /api/admin/backup - Create backup
router.post('/backup', async (req, res) => {
  try {
    const backup = await adminController.createBackup();
    res.json({
      success: true,
      message: 'Backup created successfully',
      data: backup
    });
  } catch (error) {
    console.error('Backup error:', error);
    res.status(500).json({
      error: 'Failed to create backup'
    });
  }
});

// GET /api/admin/logs - Get system logs
router.get('/logs', async (req, res) => {
  try {
    const { level, limit = 100 } = req.query;
    const logs = await adminController.getLogs({
      level,
      limit: parseInt(limit)
    });
    
    res.json({
      success: true,
      data: logs
    });
  } catch (error) {
    console.error('Get logs error:', error);
    res.status(500).json({
      error: 'Failed to retrieve logs'
    });
  }
});

module.exports = router;
