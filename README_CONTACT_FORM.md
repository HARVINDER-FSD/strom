# Contact Form Setup - Quick Reference

## 🚀 Quick Start

### 1. Get Resend API Key (2 minutes)
- Sign up: [resend.com/signup](https://resend.com/signup)
- Get API key: [resend.com/api-keys](https://resend.com/api-keys)

### 2. Add to .env
```bash
RESEND_API_KEY=re_your_key_here
```

### 3. Run Both Servers

**Terminal 1:**
```bash
cd project
npm run server
```

**Terminal 2:**
```bash
cd project
npm run dev
```

### 4. Test
- Open: http://localhost:5173
- Submit contact form
- Check: storm.organisers@gmail.com

## ✨ Features

- ✅ Email to storm.organisers@gmail.com
- ✅ Excel download of all submissions
- ✅ Local storage backup
- ✅ Success/error messages
- ✅ Form validation

## 📁 Files Changed

- `src/components/Contact.tsx` - Updated form with API call
- `server/index.ts` - New Express server with Resend
- `.env` - API key configuration
- `package.json` - Added server script

## 🔧 Commands

```bash
npm run dev      # Start frontend (port 5173)
npm run server   # Start backend (port 3001)
npm run build    # Build for production
```

## 📖 Full Documentation

- **RESEND_SETUP.md** - Detailed Resend setup guide
- **CONTACT_FORM_GUIDE.md** - Complete feature guide

## 🆓 Free Tier

- 100 emails/day
- 3,000 emails/month
- No credit card required

## 🐛 Troubleshooting

**Email not sending?**
- Check `.env` has correct API key
- Restart server: `npm run server`
- Check terminal for errors

**Port already in use?**
- Change PORT in `.env`
- Update VITE_API_URL accordingly

## 🚀 Production

Deploy backend to:
- Vercel (serverless)
- Railway/Render
- Netlify Functions

Update `VITE_API_URL` to production URL.
