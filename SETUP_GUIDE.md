# DevSpark Setup Guide - Complete Configuration

## 🚀 Quick Start

Your website is running! To make all features work (email notifications, message storage, admin dashboard), follow these steps:

---

## 1️⃣ MongoDB Setup (Database)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new project called "DevSpark"
4. Create a cluster (free tier is fine)

### Step 2: Get Connection String
1. Click "Connect" on your cluster
2. Choose "Drivers" → Node.js
3. Copy the connection string
4. Replace `<username>`, `<password>`, and `<dbname>` with your credentials

### Step 3: Update .env File
Edit `devspark-solution/.env` and update:
```
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/devspark-db
```

---

## 2️⃣ Gmail Setup (Email Notifications)

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification

### Step 2: Create App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer"
3. Google will generate a 16-character password
4. Copy this password (with spaces removed)

### Step 3: Update .env File
Edit `devspark-solution/.env` and update:
```
SMTP_USER=ayushsinghrajput643@gmail.com
SMTP_PASS=YOUR_16_CHARACTER_APP_PASSWORD
```

**Example:**
```
SMTP_PASS=abcd efgh ijkl mnop
```
Remove spaces → `abcdefghijklmnop`

---

## 3️⃣ Restart Server

1. Stop the current server (Press Ctrl+C in terminal)
2. Run the development server:
```bash
npm run dev
```

You should see:
```
✅ Server running on http://localhost:5000
```

---

## ✅ Testing the System

### Test Contact Form Submission:
1. Visit http://localhost:5000
2. Scroll to "Get in Touch" section
3. Fill the contact form:
   - Name: Your Name
   - Email: your.email@gmail.com
   - Phone: Optional
   - Service: Choose an option
   - Message: Your message
4. Click "Send Message"

### Expected Results:
✅ Success message displayed on website
✅ Message saved in MongoDB database
✅ Email sent to admin (ayushsinghrajput643@gmail.com)
✅ Confirmation email sent to user
✅ Message appears in Admin Dashboard

### View Messages in Admin Dashboard:
1. Visit http://localhost:5000/admin.html
2. See all submitted messages
3. Mark as read/unread
4. Delete messages
5. Search and filter messages

---

## 🔧 Environment Variables Summary

Create/Update `devspark-solution/.env`:

```env
# Server
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devspark-db

# Email (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ayushsinghrajput643@gmail.com
SMTP_PASS=your_16_char_app_password
FROM_EMAIL=ayushsinghrajput643@gmail.com
ADMIN_EMAIL=ayushsinghrajput643@gmail.com

# Security
JWT_SECRET=devspark_jwt_secret_2024_secure_key
```

---

## 🚨 Troubleshooting

### "Cannot connect to MongoDB"
- Check MONGODB_URI in .env
- Ensure IP is whitelisted in MongoDB Atlas
- Verify username/password is correct

### "Email not sending"
- Check Gmail account 2FA is enabled
- Verify App Password (16 chars) is correct
- Check SMTP_USER and SMTP_PASS in .env
- Remove spaces from App Password

### "Contact form submitting but no response"
- Check browser console (F12 → Console tab)
- Check server logs in terminal
- Ensure /api/contact endpoint is accessible

### "Admin dashboard shows no messages"
- Check MongoDB connection is working
- Messages should appear automatically when submitted
- Try refreshing the admin page

---

## 📊 Features Enabled

After setup, your website will have:

✅ **Contact Form**
- Submit name, email, phone, service type, message
- Real-time validation
- Success/error messages

✅ **Email Notifications**
- Admin receives notification for each submission
- User receives confirmation email
- Professional HTML formatted emails

✅ **Database Storage**
- All messages saved in MongoDB
- Indexed by creation date
- Timestamps automatically added

✅ **Admin Dashboard**
- View all messages
- Search functionality
- Filter by read/unread
- Mark messages as read
- Delete messages
- Auto-refresh every 30 seconds
- Statistics: Total, Unread, Read, Unique Users

---

## 📚 API Endpoints

### Submit Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9369635323",
  "service": "Web Development",
  "message": "I'm interested in building a website"
}
```

### Get All Messages
```bash
GET /api/messages
```

### Health Check
```bash
GET /api/health
```

---

## 🎯 Next Steps

1. ✅ Set up MongoDB
2. ✅ Set up Gmail
3. ✅ Test contact form
4. ✅ Deploy to production (Vercel recommended)

For deployment, push to GitHub and connect with Vercel. Set environment variables in Vercel dashboard.

---

## 💡 Tips

- Keep `.env` file in `.gitignore` (never commit secrets)
- Test email with a real email account first
- Monitor MongoDB usage in Atlas dashboard
- Check spam folder if emails don't arrive
- Enable "Less secure apps" might not be needed with App Password

---

## 📞 Support

For issues:
1. Check error messages in browser console (F12)
2. Check server logs in terminal
3. Check MongoDB Atlas dashboard
4. Check Gmail security settings

Good luck! 🚀
