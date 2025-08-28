# Portfolio Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages and Vercel.

## 🚀 Quick Deploy Options

### Option 1: GitHub Pages (Recommended for beginners)

#### Prerequisites:
- GitHub account
- Repository named `portfolio` under your GitHub username

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on push to main branch

3. **Your site will be available at:**
   ```
   https://basantawad.github.io/portfolio
   ```

#### Manual Deployment (if needed):
```bash
npm run deploy
```

### Option 2: Vercel (Recommended for advanced users)

#### Prerequisites:
- Vercel account (free at vercel.com)
- GitHub repository

#### Steps:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings:**
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `frontend/build`
   - Install Command: `npm install`

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

4. **Your site will be available at:**
   ```
   https://your-project-name.vercel.app
   ```

### Option 3: Netlify (Alternative)

#### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `frontend/build` folder
3. Or connect your GitHub repository for automatic deployments

## 🔧 Configuration Files

### GitHub Pages
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `package.json` - Build and deploy scripts

### Vercel
- `vercel.json` - Vercel configuration

### Netlify
- `netlify.toml` - Netlify configuration

## 📝 Environment Variables

If you need to add environment variables later:

### Vercel:
- Go to Project Settings → Environment Variables
- Add variables like:
  ```
  REACT_APP_API_URL=https://your-api.com
  ```

### Netlify:
- Go to Site Settings → Environment Variables
- Add the same variables

## 🔄 Continuous Deployment

All platforms support automatic deployments:

- **GitHub Pages**: Deploys on every push to main branch
- **Vercel**: Deploys on every push to main branch
- **Netlify**: Deploys on every push to main branch

## 🎨 Custom Domain Setup

### GitHub Pages:
1. Go to repository Settings → Pages
2. Add custom domain in "Custom domain" field
3. Add CNAME record in your DNS:
   ```
   CNAME: yourdomain.com → basantawad.github.io
   ```

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS instructions provided by Vercel

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (use 16+)
   - Run `npm install` locally first
   - Check for missing dependencies

2. **404 errors on refresh:**
   - This is normal for SPAs
   - Vercel and Netlify configs handle this automatically
   - GitHub Pages needs the `vercel.json` routing rules

3. **Assets not loading:**
   - Check `homepage` field in `package.json`
   - Ensure all paths are relative

### Debug Commands:
```bash
# Test build locally
npm run build

# Test locally
npm start

# Check for issues
npm run lint
```

## 📊 Performance Optimization

Your build is already optimized with:
- Code splitting
- Minification
- Gzip compression
- Cache headers
- Security headers

## 🔒 Security Features

All deployments include:
- Content Security Policy
- XSS Protection
- Frame Options
- Referrer Policy
- HTTPS enforcement

## 📱 Mobile Optimization

Your portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop
- All modern browsers

## 🎯 Next Steps

1. **Choose your deployment platform**
2. **Follow the steps above**
3. **Test your deployed site**
4. **Set up custom domain (optional)**
5. **Monitor performance**

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review platform-specific documentation
3. Check build logs in your deployment platform
4. Ensure all files are committed to GitHub

---

**Your portfolio is ready to deploy! 🎉**
