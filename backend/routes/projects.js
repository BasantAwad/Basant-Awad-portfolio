const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');
const authMiddleware = require('../middleware/auth');

// GET /api/projects - Get all projects (public)
router.get('/', async (req, res) => {
  try {
    const { category, technology, limit, page } = req.query;
    const projects = await projectsController.getAllProjects({
      category,
      technology,
      limit: parseInt(limit) || 10,
      page: parseInt(page) || 1
    });
    
    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      error: 'Failed to retrieve projects'
    });
  }
});

// GET /api/projects/:id - Get single project (public)
router.get('/:id', async (req, res) => {
  try {
    const project = await projectsController.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({
        error: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      error: 'Failed to retrieve project'
    });
  }
});

// POST /api/projects - Create new project (admin only)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const project = await projectsController.createProject(req.body);
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(400).json({
      error: 'Failed to create project',
      message: error.message
    });
  }
});

// PUT /api/projects/:id - Update project (admin only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const project = await projectsController.updateProject(req.params.id, req.body);
    if (!project) {
      return res.status(404).json({
        error: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(400).json({
      error: 'Failed to update project',
      message: error.message
    });
  }
});

// DELETE /api/projects/:id - Delete project (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const result = await projectsController.deleteProject(req.params.id);
    if (!result) {
      return res.status(404).json({
        error: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({
      error: 'Failed to delete project'
    });
  }
});

// GET /api/projects/categories - Get all categories (public)
router.get('/categories', async (req, res) => {
  try {
    const categories = await projectsController.getCategories();
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      error: 'Failed to retrieve categories'
    });
  }
});

// GET /api/projects/technologies - Get all technologies (public)
router.get('/technologies', async (req, res) => {
  try {
    const technologies = await projectsController.getTechnologies();
    res.json({
      success: true,
      data: technologies
    });
  } catch (error) {
    console.error('Get technologies error:', error);
    res.status(500).json({
      error: 'Failed to retrieve technologies'
    });
  }
});

module.exports = router;
