const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// POST /api/analytics/pageview - Track page view
router.post('/pageview', async (req, res) => {
  try {
    const { page, referrer, userAgent, ipAddress } = req.body;
    await analyticsController.trackPageView({
      page,
      referrer,
      userAgent,
      ipAddress: ipAddress || req.ip
    });
    
    res.status(200).json({
      success: true,
      message: 'Page view tracked'
    });
  } catch (error) {
    console.error('Page view tracking error:', error);
    // Don't send error response to avoid breaking user experience
    res.status(200).json({
      success: true,
      message: 'Page view tracked'
    });
  }
});

// POST /api/analytics/event - Track custom event
router.post('/event', async (req, res) => {
  try {
    const { event, category, action, label, value } = req.body;
    await analyticsController.trackEvent({
      event,
      category,
      action,
      label,
      value,
      userAgent: req.get('User-Agent'),
      ipAddress: req.ip
    });
    
    res.status(200).json({
      success: true,
      message: 'Event tracked'
    });
  } catch (error) {
    console.error('Event tracking error:', error);
    res.status(200).json({
      success: true,
      message: 'Event tracked'
    });
  }
});

// POST /api/analytics/contact - Track contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { source, success } = req.body;
    await analyticsController.trackContact({
      source,
      success,
      userAgent: req.get('User-Agent'),
      ipAddress: req.ip
    });
    
    res.status(200).json({
      success: true,
      message: 'Contact event tracked'
    });
  } catch (error) {
    console.error('Contact tracking error:', error);
    res.status(200).json({
      success: true,
      message: 'Contact event tracked'
    });
  }
});

// POST /api/analytics/download - Track file download
router.post('/download', async (req, res) => {
  try {
    const { file, type } = req.body;
    await analyticsController.trackDownload({
      file,
      type,
      userAgent: req.get('User-Agent'),
      ipAddress: req.ip
    });
    
    res.status(200).json({
      success: true,
      message: 'Download tracked'
    });
  } catch (error) {
    console.error('Download tracking error:', error);
    res.status(200).json({
      success: true,
      message: 'Download tracked'
    });
  }
});

// GET /api/analytics/summary - Get analytics summary (public)
router.get('/summary', async (req, res) => {
  try {
    const { period = '30d' } = req.query;
    const summary = await analyticsController.getSummary(period);
    
    res.json({
      success: true,
      data: summary
    });
  } catch (error) {
    console.error('Analytics summary error:', error);
    res.status(500).json({
      error: 'Failed to retrieve analytics summary'
    });
  }
});

// GET /api/analytics/popular-pages - Get popular pages (public)
router.get('/popular-pages', async (req, res) => {
  try {
    const { limit = 10, period = '30d' } = req.query;
    const pages = await analyticsController.getPopularPages({
      limit: parseInt(limit),
      period
    });
    
    res.json({
      success: true,
      data: pages
    });
  } catch (error) {
    console.error('Popular pages error:', error);
    res.status(500).json({
      error: 'Failed to retrieve popular pages'
    });
  }
});

// GET /api/analytics/referrers - Get top referrers (public)
router.get('/referrers', async (req, res) => {
  try {
    const { limit = 10, period = '30d' } = req.query;
    const referrers = await analyticsController.getTopReferrers({
      limit: parseInt(limit),
      period
    });
    
    res.json({
      success: true,
      data: referrers
    });
  } catch (error) {
    console.error('Referrers error:', error);
    res.status(500).json({
      error: 'Failed to retrieve referrers'
    });
  }
});

module.exports = router;
