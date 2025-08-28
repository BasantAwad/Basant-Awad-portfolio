const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

class ContactController {
  // Submit contact form
  async submitContact(contactData) {
    try {
      // Create new contact record
      const contact = new Contact({
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message,
        ipAddress: contactData.ipAddress,
        userAgent: contactData.userAgent
      });

      await contact.save();

      // Send email notification
      await this.sendEmailNotification(contactData);

      return {
        id: contact._id,
        timestamp: contact.createdAt
      };
    } catch (error) {
      console.error('Contact submission error:', error);
      throw new Error('Failed to submit contact form');
    }
  }

  // Send email notification
  async sendEmailNotification(contactData) {
    try {
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || 'noreply@basant-portfolio.com',
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission: ${contactData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
          <hr>
          <p><small>Sent from your portfolio website</small></p>
        `
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Email notification error:', error);
      // Don't throw error here as we don't want to fail the contact submission
      // if email fails
    }
  }

  // Get contact information
  async getContactInfo() {
    return {
      email: process.env.CONTACT_EMAIL || 'basant.abdalla@example.com',
      phone: process.env.CONTACT_PHONE || '+1234567890',
      location: process.env.CONTACT_LOCATION || 'Cairo, Egypt',
      social: {
        github: process.env.GITHUB_URL || 'https://github.com/BasantAwad',
        linkedin: process.env.LINKEDIN_URL || 'https://linkedin.com/in/basantabdalla',
        twitter: process.env.TWITTER_URL || 'https://twitter.com/basantabdalla'
      },
      availability: {
        status: 'Available for opportunities',
        responseTime: 'Within 24 hours'
      }
    };
  }

  // Get contact statistics (admin only)
  async getContactStats() {
    try {
      const totalContacts = await Contact.countDocuments();
      const recentContacts = await Contact.countDocuments({
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      });

      return {
        total: totalContacts,
        recent: recentContacts,
        lastSubmission: await Contact.findOne().sort({ createdAt: -1 }).select('createdAt')
      };
    } catch (error) {
      console.error('Get contact stats error:', error);
      throw new Error('Failed to retrieve contact statistics');
    }
  }
}

module.exports = new ContactController();
