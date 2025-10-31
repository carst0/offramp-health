# Offramp Health - User Guide

**Website URL:** Will be available at `offramp.health` after deployment to Vercel

**Purpose:** A landing page that connects people who have successfully lost weight on GLP-1 medications with certified fitness coaches and nutritionists to help them transition to a sustainable, healthy lifestyle.

**Access:** Public - no login required to view the site. Users click "Find Your Coach" to be redirected to the Kickoff coaching platform.

---

## Powered by Manus

This website is built with modern, cutting-edge technology to deliver a fast, responsive experience:

- **Frontend:** React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui components
- **Styling:** Custom purple branding matching the Offramp Health identity
- **Performance:** Optimized for fast page loads with smooth scroll navigation
- **Deployment:** Auto-scaling infrastructure with global CDN via Vercel

The site is fully responsive, working seamlessly on desktop, tablet, and mobile devices.

---

## Using Your Website

### Main Navigation

The header contains navigation links that smoothly scroll to key sections:

- **"How It Works"** - Explains the 4-step process for getting matched with a coach
- **"Pricing"** - Shows the affordable $3/day pricing model with monthly, 6-month, and yearly options
- **"Gifts"** and **"Blog"** - Placeholder links for future content

### Key Features

**1. Hero Section**
The landing page opens with a compelling headline: "You've Lost the Weight. Now Find Your Offramp." This immediately communicates the value proposition to visitors who have completed their weight loss journey.

**2. Comparison Section**
A side-by-side comparison shows why Offramp Health is better than traditional in-person training:
- In-person trainers cost $100+ per session
- Offramp Health costs just $3 per day
- Both offer the same benefits: accountability, integrated nutrition, on-demand access, no contracts, and FSA/HSA eligibility

**3. How It Works**
A 4-step visual guide shows the journey:
1. Complete a 15-point quiz to match with the perfect coach
2. Have a video call to align on a custom plan
3. Do personalized workouts while optimizing nutrition
4. Stay accountable with daily check-ins and optional calls

**4. Pricing Section**
Users can toggle between three billing options:
- **Monthly:** $95/month ($3/day)
- **6 Months:** Save 10% with upfront billing
- **Yearly:** Save 20% with upfront billing

All plans include the same comprehensive features: 1-on-1 coaching calls, custom exercise and nutrition programs, daily accountability, unlimited workouts, live video sessions, and personalized nutrition coaching. All plans are FSA/HSA eligible.

**5. Testimonials**
Real client stories highlight the transformation and confidence people feel after working with a coach. Each testimonial includes a 5-star rating and the source (Google Play Store, Apple App Store, or Product Hunt).

**6. Coach Profiles**
A showcase of certified coaches with their credentials and specialties, demonstrating the quality and expertise available to users.

### Call-to-Action

The "Find Your Coach" button appears in multiple locations throughout the page and redirects users to: `https://www.trainwithkickoff.com/client-sign-up?questionId=219`

This is where users fill out their information and get matched with a coach on the Kickoff platform.

---

## Managing Your Website

### Dashboard & Settings

After deployment, you can manage your website through the Management UI:

- **Settings Panel:** Update website name, logo, and visibility settings
- **Domains Panel:** Bind your custom domain `offramp.health` or modify the auto-generated domain
- **Dashboard:** Monitor analytics and traffic (UV/PV metrics)

### Updating Content

To modify the website content, you can edit the following file:

- **`client/src/pages/Home.tsx`** - Contains all page sections, text, testimonials, FAQs, and pricing information

Common updates you might make:
- Change testimonials or add new ones
- Update coach profiles
- Modify FAQ questions and answers
- Adjust pricing or billing options
- Update contact information in the footer

### Customizing the Logo

Your Offramp Health logo is stored at `client/public/logo.png`. To update it:

1. Replace the image file with your new logo
2. Ensure the new image is in PNG format for best quality
3. The logo will automatically update on the next deployment

### Managing Navigation Links

The main navigation links in the header can be updated in the Home.tsx file:
- "How It Works" links to the `#how-it-works` section
- "Pricing" links to the `#pricing` section
- "Gifts" and "Blog" are placeholder links that can be updated to point to future pages or external URLs

---

## Next Steps

Talk to Manus AI anytime to request changes or add features to your website. Whether you want to:

- Add new sections or testimonials
- Update pricing or plans
- Modify the design or branding
- Add email capture or contact forms
- Integrate analytics or tracking
- Deploy to your custom domain

Simply describe what you need, and Manus will implement it for you.

**Ready to launch?** Once you're satisfied with the website, click the **Publish** button in the Management UI to deploy it to Vercel. After deployment, you can bind your custom domain `offramp.health` through the Domains panel to make it live for your ad campaigns.

Good luck with your GLP-1 off-ramp marketing campaign!
