# Deployment Guide - DevSpark Live

## 🚀 Quick Deployment to Vercel

### Prerequisites
- GitHub account (free)
- Vercel account (free - sign up with GitHub)

### Step 1: Push to GitHub

```bash
cd d:\website\devspark-solution

# Initialize git if not done
git init
git add .
git commit -m "DevSpark - Ready for deployment"

# Add GitHub remote
git remote add origin https://github.com/yourusername/devspark-solution.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to **https://vercel.com**
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste: `https://github.com/yourusername/devspark-solution.git`
5. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** (leave empty)
   - **Install Command:** `npm install`
   - **Output Directory:** public

6. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `SMTP_HOST`: smtp.gmail.com
   - `SMTP_PORT`: 587
   - `SMTP_USER`: your-email@gmail.com
   - `SMTP_PASS`: your-gmail-app-password

7. Click "Deploy"

### Step 3: Get Your Live URL

After deployment completes, Vercel will provide:
```
Your live site: https://devspark-solution.vercel.app
```

---

## 📋 Environment Variables Needed

Create `.env` file locally with:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devspark
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ayushsinghrajput643@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx (Gmail app password)
NODE_ENV=production
PORT=3000
```

---

## ✅ Verification Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] Landing page loads: `https://your-domain.vercel.app/`
- [ ] Admin login works: `https://your-domain.vercel.app/admin-login.html`
- [ ] Contact form sends emails
- [ ] Admin dashboard displays messages

---

## 🔗 Live Links After Deployment

**Main Site:** https://your-domain.vercel.app/
**Admin Login:** https://your-domain.vercel.app/admin-login.html
**Admin Dashboard:** https://your-domain.vercel.app/admin.html

---

## 🛠️ Troubleshooting

### Build Failed
- Check `package.json` dependencies
- Verify `server/server.js` exists
- Check for syntax errors

### Environment Variables Not Working
- Verify in Vercel Settings → Environment Variables
- Restart deployment after adding variables

### MongoDB Connection Error
- Check MongoDB connection string
- Ensure IP whitelist includes Vercel IPs (0.0.0.0/0)

### Emails Not Sending
- Use Gmail app password (not regular password)
- Enable "Less secure app access" or use app passwords
- Check Vercel logs: `vercel logs`

---

## 📞 Support

For issues, check:
- Vercel Dashboard: https://vercel.com/dashboard
- Build Logs in project settings
- MongoDB Atlas dashboard
- Gmail security settings
