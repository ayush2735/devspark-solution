# DevSpark - Quick Command Reference

## 🚀 Starting the Server

### Development Mode (Recommended)
Auto-restarts when files change:
```bash
npm run dev
```

### Production Mode
Direct Node.js execution:
```bash
npm start
```

### Full Process
```powershell
# 1. Navigate to project
cd d:\website\devspark-solution

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:5000
```

---

## 📝 Quick Setup

### Before First Run

1. **Create MongoDB cluster**
   - https://www.mongodb.com/cloud/atlas
   - Get connection string

2. **Generate Gmail App Password**
   - Enable 2FA on Gmail
   - https://myaccount.google.com/apppasswords
   - Get 16-character password

3. **Update .env file**
   ```env
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/devspark-db
   SMTP_PASS=your16charapppassword
   ```

4. **Start server**
   ```bash
   npm run dev
   ```

---

## 🌐 Accessing Your Website

### Main Website
http://localhost:5000

### Admin Dashboard
http://localhost:5000/admin.html

### API Health Check
http://localhost:5000/api/health

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `public/index.html` | Main website |
| `public/admin.html` | Admin dashboard |
| `public/css/style.css` | All styling |
| `public/js/script.js` | Frontend logic |
| `server/server.js` | Express server |
| `server/models/Contact.js` | Database schema |
| `server/controllers/contactController.js` | Business logic |
| `.env` | Configuration |

---

## ✉️ Email Configuration

### Gmail App Password Setup

1. Enable 2-Factor Authentication
   - https://myaccount.google.com/security

2. Generate App Password
   - https://myaccount.google.com/apppasswords
   - Select: Mail + Windows Computer
   - Copy generated password

3. Update `.env`
   ```env
   SMTP_USER=ayushsinghrajput643@gmail.com
   SMTP_PASS=abcdefghijklmnop
   ```

**Note**: Remove spaces from password!

---

## 🗄️ Database Setup

### MongoDB Configuration

1. Create MongoDB Atlas Account
   - https://www.mongodb.com/cloud/atlas

2. Create Cluster
   - Choose free tier
   - Select region close to you

3. Get Connection String
   - Click "Connect"
   - Choose "Drivers"
   - Copy connection string

4. Update `.env`
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devspark-db
   ```

---

## 🧪 Testing

### Test Contact Form

```bash
# 1. Fill form at: http://localhost:5000
# 2. Submit
# 3. Should see success message
# 4. Check email
# 5. Visit admin dashboard
```

### Check Server Health

```bash
# Open in browser
http://localhost:5000/api/health

# Expected response
{"status":"Server is running"}
```

### View All Messages

```bash
# Open in browser
http://localhost:5000/api/messages

# Shows all submitted messages as JSON
```

---

## 🛑 Stop the Server

Press in the terminal:
```
Ctrl + C
```

---

## 🔧 Useful npm Scripts

```bash
# Development with auto-reload
npm run dev

# Production start
npm start

# Install packages
npm install

# Install specific package
npm install package-name

# Remove package
npm uninstall package-name
```

---

## 📊 Project Statistics

- **HTML Lines**: ~500
- **CSS Lines**: ~1700
- **JavaScript Lines**: ~200
- **Backend Routes**: 3
- **API Endpoints**: 3
- **Database Collections**: 1
- **Responsive Breakpoints**: 3

---

## 🎯 Features

✅ Contact form submission
✅ Email notifications
✅ Database storage
✅ Admin dashboard
✅ Search & filter
✅ Dark mode
✅ Mobile responsive
✅ Professional design
✅ Real-time validation
✅ Error handling

---

## 📞 Contact Information

**Email**: ayushsinghrajput643@gmail.com
**Phone**: 9369635323
**Location**: India

---

## 🎓 Learning Resources

- **Express.js**: https://expressjs.com
- **MongoDB**: https://docs.mongodb.com
- **Mongoose**: https://mongoosejs.com
- **Nodemailer**: https://nodemailer.com
- **MDN Web Docs**: https://developer.mozilla.org

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] npm installed
- [ ] MongoDB configured
- [ ] Gmail configured
- [ ] .env file created
- [ ] Dependencies installed (`npm install`)
- [ ] Server running (`npm run dev`)
- [ ] Website accessible (localhost:5000)
- [ ] Contact form working
- [ ] Admin dashboard loaded
- [ ] Emails sending

---

## 🚀 You're Ready!

```bash
npm run dev
```

Visit: **http://localhost:5000**

Enjoy your DevSpark website! 🎉
