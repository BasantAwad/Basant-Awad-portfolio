import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaUsers, 
  FaEye, 
  FaCode, 
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaMobile,
  FaDesktop,
  FaTablet,
  FaSearch,
  FaFilter,
  FaCog,
  FaShieldAlt,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import analyticsService from '../services/analytics';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      loadAnalyticsData();
    }
  }, [isAuthenticated]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    try {
      const data = analyticsService.getDashboardData();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };



  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check for demo (in real app, use proper authentication)
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  // Helper methods for analytics
  const getEventIcon = (eventName) => {
    const icons = {
      'contact_form_submitted': <FaEnvelope />,
      'page_view': <FaEye />,
      'download': <FaDownload />,
      'github_click': <FaGithub />,
      'linkedin_click': <FaLinkedin />,
      'project_view': <FaCode />
    };
    return icons[eventName] || <FaUsers />;
  };

  const getEventMessage = (event) => {
    const messages = {
      'contact_form_submitted': 'New contact form submission',
      'page_view': `Page viewed: ${event.page}`,
      'download': 'Resume downloaded',
      'github_click': 'GitHub profile accessed',
      'linkedin_click': 'LinkedIn profile accessed',
      'project_view': 'Project page viewed'
    };
    return messages[event.name] || 'User activity detected';
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const eventTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - eventTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  const renderOverview = () => {
    if (loading || !analyticsData) {
      return (
        <div className="loading-section">
          <div className="loading-spinner"></div>
          <p>Loading analytics data...</p>
        </div>
      );
    }

    return (
      <div className="overview-section">
        <div className="stats-grid">
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="stat-icon visitors">
              <FaUsers />
            </div>
            <div className="stat-content">
              <h3>Total Visitors</h3>
              <p className="stat-number">{analyticsData.visitors.total.toLocaleString()}</p>
              <span className={`stat-growth ${analyticsData.visitors.growth >= 0 ? 'positive' : 'negative'}`}>
                {analyticsData.visitors.growth >= 0 ? '+' : ''}{analyticsData.visitors.growth}%
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="stat-icon pageviews">
              <FaEye />
            </div>
            <div className="stat-content">
              <h3>Page Views</h3>
              <p className="stat-number">{analyticsData.pageViews.total.toLocaleString()}</p>
              <span className={`stat-growth ${analyticsData.pageViews.growth >= 0 ? 'positive' : 'negative'}`}>
                {analyticsData.pageViews.growth >= 0 ? '+' : ''}{analyticsData.pageViews.growth}%
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="stat-icon projects">
              <FaCode />
            </div>
            <div className="stat-content">
              <h3>Projects</h3>
              <p className="stat-number">{analyticsData.projects.total}</p>
              <span className="stat-subtitle">{analyticsData.projects.completed} completed</span>
            </div>
          </motion.div>

          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="stat-icon contact">
              <FaEnvelope />
            </div>
            <div className="stat-content">
              <h3>Contact Forms</h3>
              <p className="stat-number">{analyticsData.contact.total}</p>
              <span className="stat-subtitle">{analyticsData.contact.responseRate}% response rate</span>
            </div>
          </motion.div>
        </div>

        <div className="charts-section">
          <div className="chart-container">
            <h3>Visitor Demographics</h3>
            <div className="demographics-grid">
              <div className="demographic-item">
                <h4>Top Countries</h4>
                <div className="country-list">
                  {analyticsData.visitorStats.countries.map((country, index) => (
                    <div key={index} className="country-item">
                      <span className="country-name">{country.name}</span>
                      <span className="country-visitors">{country.visitors}</span>
                      <span className="country-percentage">{country.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="demographic-item">
                <h4>Device Types</h4>
                <div className="device-list">
                  {analyticsData.visitorStats.devices.map((device, index) => (
                    <div key={index} className="device-item">
                      <span className="device-type">{device.type}</span>
                      <span className="device-visitors">{device.visitors}</span>
                      <span className="device-percentage">{device.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAnalytics = () => {
    if (loading || !analyticsData) {
      return (
        <div className="loading-section">
          <div className="loading-spinner"></div>
          <p>Loading analytics data...</p>
        </div>
      );
    }

    return (
      <div className="analytics-section">
        <div className="page-performance">
          <h3>Page Performance</h3>
          <div className="performance-table">
            <div className="table-header">
              <span>Page</span>
              <span>Views</span>
              <span>Unique Visitors</span>
              <span>Avg. Time</span>
              <span>Bounce Rate</span>
            </div>
            {analyticsData.topPages.map((page, index) => (
              <motion.div 
                key={index} 
                className="table-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="page-name">{page.page}</span>
                <span className="page-views">{page.views}</span>
                <span className="page-unique">{Math.floor(page.views * 0.8)}</span>
                <span className="page-time">2:30</span>
                <span className="page-bounce">25%</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {analyticsData.recentEvents.map((event, index) => (
              <motion.div 
                key={index} 
                className="activity-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="activity-icon">
                  {this.getEventIcon(event.name)}
                </div>
                <div className="activity-content">
                  <p className="activity-message">{this.getEventMessage(event)}</p>
                  <span className="activity-time">{this.getTimeAgo(event.timestamp)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderSettings = () => (
    <div className="settings-section">
      <h3>Admin Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <h4>Security</h4>
          <p>Manage authentication and access controls</p>
          <button className="btn btn-outline">Configure</button>
        </div>
        <div className="setting-item">
          <h4>Analytics</h4>
          <p>Configure tracking and reporting options</p>
          <button className="btn btn-outline">Configure</button>
        </div>
        <div className="setting-item">
          <h4>Backup</h4>
          <p>Manage data backup and recovery</p>
          <button className="btn btn-outline">Configure</button>
        </div>
        <div className="setting-item">
          <h4>Updates</h4>
          <p>Check for system updates and patches</p>
          <button className="btn btn-outline">Check</button>
        </div>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="container">
          <motion.div 
            className="login-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="login-header">
              <FaShieldAlt />
              <h2>Admin Access</h2>
              <p>Enter password to access admin dashboard</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Access Dashboard
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="container">
        <motion.section 
          className="admin-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Analytics, insights, and management tools</p>
        </motion.section>

        <div className="admin-content">
          <div className="admin-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <FaChartLine /> Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <FaDatabase /> Analytics
            </button>
            <button 
              className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <FaCog /> Settings
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'analytics' && renderAnalytics()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
