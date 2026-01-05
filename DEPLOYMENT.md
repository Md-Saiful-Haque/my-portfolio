# Netlify Deployment Guide

This guide will help you deploy your React portfolio to Netlify.

## 🚀 Quick Deployment Options

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Click "Deploy site"

### Option 2: Drag & Drop Deployment

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder to Netlify dashboard
   - Your site will be deployed instantly

### Option 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy:**
   ```bash
   netlify login
   npm run build
   netlify deploy --prod --dir=build
   ```

## 📋 Pre-Deployment Checklist

### ✅ Required Files (Already Created)
- ✅ `netlify.toml` - Netlify configuration
- ✅ `public/_redirects` - SPA routing support
- ✅ `.gitignore` - Git ignore rules
- ✅ `package.json` - Dependencies and scripts

### 📁 Add Your Content
- [ ] Add your resume: `public/resume.pdf`
- [ ] Add project screenshots to `public/images/`:
  - `krishilink-screenshot.png`
  - `scholarstream-screenshot.png`
  - `toytopia-screenshot.png`
  - `heroapps-screenshot.png`

### 🔧 Customize (Optional)
- [ ] Update social media links in components
- [ ] Update contact information
- [ ] Add your actual photo URL in Hero component
- [ ] Update project descriptions and links

## 🌐 Custom Domain (Optional)

1. **Buy a domain** from any registrar
2. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name
   - Follow DNS configuration instructions

## 🔒 Environment Variables (If Needed)

If your project uses environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (e.g., API keys)
3. Redeploy the site

## 📊 Performance Optimization

The deployment includes:
- ✅ Automatic HTTPS
- ✅ CDN distribution
- ✅ Gzip compression
- ✅ Cache headers for static assets
- ✅ Security headers

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`
- Check for TypeScript/ESLint errors

### 404 Errors on Refresh
- Ensure `_redirects` file is in `public/` folder
- Check `netlify.toml` redirect rules

### Images Not Loading
- Ensure images are in `public/images/` folder
- Check image paths start with `/images/`
- Verify image file names match exactly

## 📱 Testing Your Deployment

After deployment, test:
- [ ] All navigation links work
- [ ] Mobile responsiveness
- [ ] Dark mode toggle
- [ ] Contact form submission
- [ ] Project links open correctly
- [ ] Resume download (if added)
- [ ] Social media links

## 🎯 Next Steps

1. **Monitor Performance:** Use Netlify Analytics
2. **SEO Optimization:** Add meta tags and sitemap
3. **Form Handling:** Set up Netlify Forms for contact form
4. **Analytics:** Add Google Analytics or similar

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Test production build locally
npx serve -s build
```

Your portfolio is now ready for deployment! 🎉