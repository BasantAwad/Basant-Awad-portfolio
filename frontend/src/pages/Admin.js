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
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Mock data for demonstration
  const analyticsData = {
    visitors: {
      total: document.getElementById('visitors').value,
      thisMonth: document.getElementById('thisMonth').value,
      thisWeek: document.getElementById('thisWeek').value,
      today: document.getElementById('today').value,
      growth: document.getElementById('growth').value
    },
    pageViews: {
      total: document.getElementById('pageViews').value,
      thisMonth: document.getElementById('thisMonth').value,
      thisWeek: document.getElementById('thisWeek').value,
      today: document.getElementById('today').value,
      growth: document.getElementById('growth').value
    },
    projects: {
      total: document.getElementById('projects').value,
      completed: document.getElementById('completed').value,
      inProgress: document.getElementById('inProgress').value,
      views: document.getElementById('views').value
    },
    contact: {
      total: document.getElementById('contact').value,
      thisMonth: document.getElementById('thisMonth').value,
      thisWeek: document.getElementById('thisWeek').value,
      today: document.getElementById('today').value,
      responseRate: document.getElementById('responseRate').value
    }
  };

  const visitorStats = {
    countries: [
      { name: 'United States', visitors: document.getElementById('visitors').value, percentage: 36.6 },
      { name: 'United Kingdom', visitors: document.getElementById('visitors').value, percentage: 18.8 },
      { name: 'Canada', visitors: document.getElementById('visitors').value, percentage: 15.2 },
      { name: 'Germany', visitors: document.getElementById('visitors').value, percentage: 12.5 },
      { name: 'Australia', visitors: document.getElementById('visitors').value, percentage: 9.9 },
      { name: 'Others', visitors: document.getElementById('visitors').value, percentage: 7.1 }
    ],
    devices: [
      { type: 'Desktop', visitors: document.getElementById('visitors').value, percentage: 54.4 },
      { type: 'Mobile', visitors: document.getElementById('visitors').value, percentage: 35.7 },
      { type: 'Tablet', visitors: document.getElementById('visitors').value, percentage: 9.9 }
    ],
    browsers: [
      { name: 'Chrome', visitors: document.getElementById('visitors').value, percentage: 45.5 },
      { name: 'Safari', visitors: document.getElementById('visitors').value, percentage: 27.7 },
      { name: 'Firefox', visitors: document.getElementById('visitors').value, percentage: 14.3 },
      { name: 'Edge', visitors: document.getElementById('visitors').value, percentage: 7.1 },
      { name: 'Others', visitors: document.getElementById('visitors').value, percentage: 5.5 }
    ]
  };

  const pagePerformance = [
    { page: 'Home', views: document.getElementById('views').value, uniqueVisitors: document.getElementById('uniqueVisitors').value, avgTime: '2:34', bounceRate: 23.4 },
    { page: 'About', views: document.getElementById('views').value, uniqueVisitors: document.getElementById('uniqueVisitors').value, avgTime: '3:12', bounceRate: 18.7 },
    { page: 'Projects', views: document.getElementById('views').value, uniqueVisitors: document.getElementById('uniqueVisitors').value, avgTime: '4:23', bounceRate: 15.2 },
    { page: 'Services', views: document.getElementById('views').value, uniqueVisitors: document.getElementById('uniqueVisitors').value, avgTime: '2:56', bounceRate: 22.1 },
    { page: 'Contact', views: document.getElementById('views').value, uniqueVisitors: document.getElementById('uniqueVisitors').value, avgTime: '1:45', bounceRate: 28.9 }
  ];

  const recentActivity = [
    { type: 'visit', message: 'New visitor from United States', time: '2 minutes ago', icon: <FaUsers /> },
    { type: 'download', message: 'Resume downloaded by visitor', time: '15 minutes ago', icon: <FaDownload /> },
    { type: 'contact', message: 'New contact form submission', time: '1 hour ago', icon: <FaEnvelope /> },
    { type: 'project', message: 'Project page viewed 5 times', time: '2 hours ago', icon: <FaCode /> },
    { type: 'github', message: 'GitHub profile accessed', time: '3 hours ago', icon: <FaGithub /> }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check for demo (in real app, use proper authentication)
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const renderOverview = () => (
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
            <span className="stat-growth positive">+{analyticsData.visitors.growth}%</span>
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
            <span className="stat-growth positive">+{analyticsData.pageViews.growth}%</span>
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
                {visitorStats.countries.map((country, index) => (
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
                {visitorStats.devices.map((device, index) => (
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

  const renderAnalytics = () => (
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
          {pagePerformance.map((page, index) => (
            <motion.div 
              key={index} 
              className="table-row"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="page-name">{page.page}</span>
              <span className="page-views">{page.views}</span>
              <span className="page-unique">{page.uniqueVisitors}</span>
              <span className="page-time">{page.avgTime}</span>
              <span className="page-bounce">{page.bounceRate}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {recentActivity.map((activity, index) => (
            <motion.div 
              key={index} 
              className="activity-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="activity-icon">
                {activity.icon}
              </div>
              <div className="activity-content">
                <p className="activity-message">{activity.message}</p>
                <span className="activity-time">{activity.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

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
