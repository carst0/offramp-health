# Google Analytics Setup Guide

This guide will help you set up Google Analytics to track "Find Your Coach" button clicks on your Offramp Health website.

---

## Step 1: Create a Google Analytics Account

1. **Go to Google Analytics**: Visit [analytics.google.com](https://analytics.google.com)
2. **Sign in** with your Google account (create one if needed)
3. **Click "Start measuring"**
4. **Create an account**:
   - Account name: `Offramp Health`
   - Click "Next"

5. **Create a property**:
   - Property name: `Offramp Health Website`
   - Reporting timezone: Select your timezone
   - Currency: USD
   - Click "Next"

6. **Set up your data stream**:
   - Platform: Select **Web**
   - Website URL: `https://offramp.health` (or your Vercel URL during testing)
   - Stream name: `Offramp Health Web`
   - Click "Create stream"

7. **Copy your Measurement ID**:
   - You'll see a "Measurement ID" starting with `G-` (e.g., `G-XXXXXXXXXX`)
   - Copy this ID - you'll need it in the next step

---

## Step 2: Add Google Analytics to Your Website

I've already integrated Google Analytics into your website. You just need to provide the Measurement ID.

### Option A: Using Environment Variables (Recommended)

1. **In the Vercel dashboard**:
   - Go to your `offramp-health` project
   - Click "Settings" → "Environment Variables"
   - Add a new variable:
     - **Name**: `VITE_GOOGLE_ANALYTICS_ID`
     - **Value**: Paste your Measurement ID (e.g., `G-XXXXXXXXXX`)
   - Click "Save"

2. **Redeploy your site**:
   - Go to "Deployments"
   - Click the three dots on the latest deployment
   - Select "Redeploy"
   - Wait for the deployment to complete

### Option B: Direct Update (For Local Testing)

1. **Edit the Home.tsx file**:
   - Find the Google Analytics script section
   - Replace `YOUR_MEASUREMENT_ID` with your actual Measurement ID
   - Commit and push the changes

---

## Step 3: Verify Google Analytics is Working

1. **Go to your website**: Visit `https://offramp.health` (or your Vercel preview URL)
2. **Open Google Analytics**: Go to [analytics.google.com](https://analytics.google.com)
3. **Check Real-time data**:
   - Click "Real-time" in the left menu
   - You should see yourself visiting the site
   - Click a "Find Your Coach" button
   - You should see an event logged

---

## Step 4: Track "Find Your Coach" Button Clicks

The website is already configured to track every "Find Your Coach" button click as a custom event called `find_your_coach_click`.

### View Click Data

1. **In Google Analytics**:
   - Click "Events" in the left menu
   - You'll see `find_your_coach_click` listed
   - Click on it to see detailed metrics:
     - Total clicks
     - Unique users who clicked
     - Which page section they clicked from
     - Device type (mobile, desktop, tablet)
     - Geographic location
     - Traffic source (which ad campaign)

2. **Create a Custom Report**:
   - Click "Reports" → "Create new report"
   - Add dimensions like "Page Title" or "Device Category"
   - Add metrics like "Event Count" or "Users"
   - This shows you which button locations get the most clicks

---

## Step 5: Link Google Analytics to Your Ad Campaigns

To track which ads drive the most clicks:

1. **In Google Ads** (if you're running ads):
   - Go to Settings → Linked accounts
   - Link your Google Analytics property
   - Enable auto-tagging

2. **In Google Analytics**:
   - Go to "Reports" → "Acquisition"
   - You'll see traffic broken down by campaign, source, and medium
   - Track which ads have the highest click-through rate to "Find Your Coach"

---

## Understanding Your Analytics

### Key Metrics to Watch

- **Users**: Unique visitors to your site
- **Sessions**: Number of visits
- **Event Count**: Total "Find Your Coach" clicks
- **Conversion Rate**: Percentage of visitors who click the button
- **Bounce Rate**: Visitors who leave without clicking anything

### Sample Questions You Can Answer

- How many people clicked "Find Your Coach" today?
- Which section's button gets clicked most (hero, pricing, etc.)?
- What's the average number of clicks per visitor?
- Which traffic source (ad campaign) drives the most button clicks?
- Are mobile users more likely to click than desktop users?

---

## Troubleshooting

### Google Analytics Shows No Data

1. **Check the Measurement ID**: Verify you copied it correctly
2. **Wait for data**: It can take 24-48 hours for initial data to appear
3. **Check Real-time**: Go to Real-time view to see if current activity is tracked
4. **Clear browser cache**: Hard refresh your browser (Ctrl+Shift+R)
5. **Check console**: Open browser DevTools (F12) and look for any errors

### Events Not Showing Up

1. **Verify event name**: The event should be named `find_your_coach_click`
2. **Check implementation**: Ensure Google Analytics script is loaded
3. **Wait for processing**: New events can take a few minutes to appear
4. **Test in Real-time**: Click the button and check Real-time view immediately

---

## Next Steps

1. **Set up your Measurement ID** in Vercel environment variables
2. **Redeploy your website**
3. **Verify tracking is working** using Real-time view
4. **Create custom reports** to monitor campaign performance
5. **Link to Google Ads** to see which campaigns drive the most clicks

For questions or to make changes, contact Manus AI anytime!
