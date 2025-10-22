# Contact Form - Quick Start Guide

Your contact form now has email integration and Excel download functionality! 🎉

## What's Been Added

### 1. Email Integration (Resend)
- Form submissions are sent directly to **storm.organisers@gmail.com**
- Free tier: 100 emails/day, 3,000/month
- Professional email service with better deliverability

### 2. Excel Download
- All submissions are saved locally in the browser
- Download button appears after first submission
- Excel file includes all form fields + timestamp

### 3. User Feedback
- Success message when email is sent
- Error message if sending fails
- Loading state while submitting

## Setup Instructions (5 minutes)

### Step 1: Get Resend API Key

1. Sign up at [Resend.com](https://resend.com/signup) (free)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy the key

### Step 2: Configure Environment

1. Open `project/.env`
2. Add your API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Step 3: Start Both Servers

Open **two terminals**:

**Terminal 1 - Backend:**
```bash
cd project
npm run server
```

**Terminal 2 - Frontend:**
```bash
cd project
npm run dev
```

## Testing

1. Make sure both servers are running (see Step 3 above)

2. Open browser to `http://localhost:5173`

3. Scroll to contact section

4. Fill out and submit the form

5. Check email at storm.organisers@gmail.com

6. Click "Excel" button to download submissions

## Excel File Details

The downloaded Excel file contains:
- Name
- Email
- Phone
- Company
- Message
- Timestamp (ISO format)

File naming: `contact-submissions-YYYY-MM-DD.xlsx`

## Features

✅ Real-time email notifications
✅ Form validation
✅ Success/error feedback
✅ Loading states
✅ Local data persistence
✅ Excel export with timestamp
✅ Responsive design
✅ Accessible form fields

## Troubleshooting

**"Failed to send message" error?**
- Check your Resend API key in `.env`
- Restart the server (`npm run server`)
- Check server terminal for errors

**Server won't start?**
- Make sure you're in `project` directory
- Run `npm install` first
- Check if port 3001 is available

**Excel button not showing?**
- Submit at least one form first
- Check browser localStorage is enabled

**Emails not arriving?**
- Check spam folder
- Verify API key is correct
- Check server logs for errors

## Need More Help?

See `RESEND_SETUP.md` for detailed instructions.

## Production Deployment

For production, deploy your backend to:
- Vercel (serverless functions)
- Railway/Render (Node.js hosting)
- Netlify Functions

Update `VITE_API_URL` in `.env` to your production API URL.
