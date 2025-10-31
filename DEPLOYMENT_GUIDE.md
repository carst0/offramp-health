# Offramp Health - Deployment Guide

This guide will walk you through deploying your Offramp Health website to Vercel with your custom domain.

---

## Prerequisites

Before deploying, ensure you have:

1. **A Vercel account** - Sign up at [vercel.com](https://vercel.com) if you don't have one
2. **A GitHub account** - Vercel integrates with GitHub for easy deployments
3. **Your custom domain** - `offramp.health` (or your preferred domain)
4. **Domain registrar access** - To update DNS settings (if needed)

---

## Step 1: Push Your Project to GitHub

1. **Initialize a Git repository** (if not already done):
   ```bash
   cd /home/ubuntu/offramp-health
   git init
   git add .
   git commit -m "Initial commit: Offramp Health landing page"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `offramp-health`
   - Click "Create repository"

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/offramp-health.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Deploy to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"

2. **Import Your Repository**:
   - Select "Import Git Repository"
   - Find and select your `offramp-health` repository
   - Click "Import"

3. **Configure Project Settings**:
   - **Project Name**: `offramp-health`
   - **Framework**: Select "Other" (it will auto-detect as Vite)
   - **Root Directory**: Leave as default (`.`)
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install` (or `npm install`)

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - You'll receive a deployment URL like `https://offramp-health.vercel.app`

---

## Step 3: Connect Your Custom Domain

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter `offramp.health`

2. **Update DNS Records**:
   - Vercel will provide DNS records to add to your domain registrar
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records provided by Vercel
   - Wait for DNS propagation (can take up to 48 hours, usually faster)

3. **Verify Domain**:
   - Once DNS is updated, Vercel will automatically verify
   - Your site will be live at `https://offramp.health`

---

## Step 4: Continuous Deployment

After your initial deployment, any changes you push to the `main` branch on GitHub will automatically deploy to Vercel:

1. **Make changes locally**:
   ```bash
   # Edit files as needed
   git add .
   git commit -m "Update: [describe changes]"
   git push origin main
   ```

2. **Vercel automatically deploys**:
   - Your changes will be live within 1-2 minutes
   - You can monitor deployments in the Vercel dashboard

---

## Making Updates to Your Website

### Updating Content

To update text, testimonials, pricing, or FAQs:

1. Edit `client/src/pages/Home.tsx`
2. Make your changes
3. Commit and push:
   ```bash
   git add client/src/pages/Home.tsx
   git commit -m "Update: [describe changes]"
   git push origin main
   ```

### Updating the Logo

To replace the Offramp Health logo:

1. Replace the file at `client/public/logo.png` with your new logo
2. Ensure the file is PNG format
3. Commit and push:
   ```bash
   git add client/public/logo.png
   git commit -m "Update: New logo"
   git push origin main
   ```

### Updating Styling

To modify colors, fonts, or layout:

1. Edit `client/src/index.css` for global styles
2. Or edit the component styles in `client/src/pages/Home.tsx`
3. Commit and push your changes

---

## Monitoring Your Deployment

### View Analytics

In the Vercel dashboard, you can view:
- **Analytics**: Page views, unique visitors, bounce rate
- **Performance**: Page load times and performance metrics
- **Deployments**: History of all deployments with timestamps

### View Logs

To debug issues:
1. Go to your project in Vercel
2. Click "Deployments"
3. Select a deployment
4. Click "Logs" to see build and runtime logs

---

## Troubleshooting

### Domain Not Working

- **Check DNS propagation**: Use [whatsmydns.net](https://whatsmydns.net) to verify DNS records are updated
- **Wait for propagation**: DNS changes can take up to 48 hours
- **Verify DNS records**: Ensure you added all records provided by Vercel

### Build Fails

- **Check build logs**: Go to Deployments → select failed deployment → view logs
- **Verify dependencies**: Ensure all required packages are in `package.json`
- **Check Node version**: Vercel uses Node 18 by default; ensure compatibility

### Site Shows Old Content

- **Clear cache**: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- **Check deployment**: Verify the latest deployment completed successfully
- **Wait for CDN**: Changes can take a few minutes to propagate through Vercel's CDN

---

## Next Steps

1. **Deploy your website** following the steps above
2. **Test all links** to ensure they work correctly
3. **Monitor analytics** to track visitor engagement
4. **Iterate and improve** based on performance data

For questions or to make changes to your website, contact Manus AI anytime.

Good luck with your Offramp Health campaign!
