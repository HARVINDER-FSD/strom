# Resend Setup Guide - Contact Form Email Integration

Quick and easy setup to receive contact form submissions via email using Resend.

## Why Resend?

- ✅ Simple API, no complex configuration
- ✅ Free tier: 100 emails/day, 3,000 emails/month
- ✅ Better deliverability than EmailJS
- ✅ Professional email service
- ✅ No credit card required for free tier

## Setup Steps (5 minutes)

### Step 1: Create Resend Account

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up with your email (free account)
3. Verify your email address

### Step 2: Get API Key

1. Go to [API Keys](https://resend.com/api-keys)
2. Click **Create API Key**
3. Name it: "STORM Contact Form"
4. Select permissions: **Sending access**
5. Click **Add**
6. **Copy the API key** (you won't see it again!)

### Step 3: Configure Environment

1. Open `project/.env` file
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Step 4: Start the Server

Open **two terminals**:

**Terminal 1 - Backend Server:**
```bash
cd project
npm run server
```

**Terminal 2 - Frontend:**
```bash
cd project
npm run dev
```

### Step 5: Test It!

1. Open your browser to `http://localhost:5173`
2. Scroll to the contact form
3. Fill it out and submit
4. Check your email at **storm.organisers@gmail.com**

## Important Notes

### Free Tier Limitations

- **100 emails per day**
- **3,000 emails per month**
- Emails sent from: `onboarding@resend.dev`

### Custom Domain (Optional)

To send emails from your own domain (e.g., `contact@yourdomain.com`):

1. Go to [Domains](https://resend.com/domains) in Resend
2. Click **Add Domain**
3. Add your domain and verify DNS records
4. Update `server/index.ts` line 35:
   ```typescript
   from: 'Contact Form <contact@yourdomain.com>',
   ```

## Features Included

✅ **Email Notifications** - Receive submissions at storm.organisers@gmail.com
✅ **Excel Download** - Download all submissions as Excel file
✅ **Local Storage** - Submissions saved in browser
✅ **Success/Error Messages** - User feedback
✅ **Form Validation** - Required fields validated
✅ **Professional Emails** - Clean HTML formatted emails

## Email Format

You'll receive emails with:
- Subject: "New Contact Form Submission from [Name]"
- Formatted HTML with all form fields
- Sender's email for easy reply
- Timestamp

## Troubleshooting

### "Failed to send email" error?

1. **Check API key**: Make sure it's correctly set in `.env`
2. **Restart server**: Stop and restart `npm run server`
3. **Check console**: Look for error messages in terminal
4. **Verify account**: Ensure your Resend account is verified

### Server not starting?

```bash
# Make sure you're in the project directory
cd project

# Install dependencies if needed
npm install

# Start server
npm run server
```

### Port already in use?

Change the port in `.env`:
```
PORT=3002
```

And update `.env` for frontend:
```
VITE_API_URL=http://localhost:3002
```

## Production Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Create `api/contact.ts` in your project root:
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Copy the logic from server/index.ts
}
```

2. Update `.env.production`:
```
VITE_API_URL=https://yourdomain.com
```

### Option 2: Deploy to Railway/Render

1. Push your code to GitHub
2. Connect to Railway/Render
3. Set environment variable: `RESEND_API_KEY`
4. Deploy!

### Option 3: Use Serverless Functions

Deploy the API as a serverless function on:
- Netlify Functions
- AWS Lambda
- Cloudflare Workers

## Security Notes

- ✅ API key is stored server-side only
- ✅ Never expose API key in frontend code
- ✅ CORS is configured for security
- ✅ Input validation on server

## Need Help?

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference/emails/send-email)
- Check server logs for detailed errors

## Alternative: Keep Using EmailJS

If you prefer EmailJS, I can switch back. Just let me know!
