# Deployment Guide for Vercel

This project is configured and ready to deploy on Vercel. Follow the steps below to deploy your application.

## Prerequisites

1. A GitHub, GitLab, or Bitbucket account
2. A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Import your project to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click on **"Add New..."** → **"Project"**
   - Import your Git repository
   - Vercel will automatically detect it as a Vite project

3. **Configure build settings** (usually auto-detected)
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click **"Deploy"**
   - Vercel will build and deploy your application
   - You'll receive a deployment URL (e.g., `your-project.vercel.app`)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   vercel
   ```
   
   For production deployment:
   ```bash
   vercel --prod
   ```

4. **Follow the prompts**
   - Link to existing project or create a new one
   - Confirm build settings
   - Wait for deployment to complete

### Option 3: Deploy via Git Integration (Automatic)

1. **Connect your repository to Vercel**
   - Go to Vercel Dashboard → Settings → Git
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

2. **Automatic deployments**
   - Every push to your main branch triggers a production deployment
   - Pull requests get preview deployments automatically

## Configuration

The project includes a `vercel.json` file with the following configuration:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **Routing**: Configured for React Router client-side routing

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain (e.g., `menemragab.com`)
4. Follow the DNS configuration instructions
5. Vercel will automatically provision SSL certificates

## Environment Variables

If you need to add environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add your variables (e.g., API keys, service URLs)
3. They will be available in your build and runtime

## Build Optimization

The current build configuration:
- Outputs optimized production bundles
- Includes code splitting and tree shaking
- Generates compressed assets (gzip/brotli)

## Troubleshooting

### Build fails
- Check the build logs in Vercel Dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version (Vercel uses Node 18.x by default)

### Routes not working (404 errors)
- Ensure `vercel.json` includes the rewrites configuration
- Verify React Router is correctly configured

### Assets not loading
- Check that all assets are in the `public` folder
- Verify paths are correct (should start with `/` not `./`)

## Support

For more information, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
