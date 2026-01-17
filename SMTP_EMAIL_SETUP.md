# 📧 SMTP Email Setup & Configuration Guide

## ✅ Email System Status

Your DevSpark project has a **complete email system** built-in and ready to use!

### System Components
✅ **Nodemailer** - Email sending library
✅ **Gmail SMTP** - Pre-configured for Gmail
✅ **Admin Notifications** - Auto-notify on form submissions
✅ **User Confirmations** - Auto-send confirmation emails
✅ **HTML Templates** - Professional email formatting
✅ **Error Handling** - Graceful fallbacks

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Create Gmail App Password

1. Go to: **https://myaccount.google.com/apppasswords**
2. Sign in with your Gmail account
3. Select: **App: Mail**, **Device: Windows Computer**
4. Click: **Generate**
5. Copy the **16-character password** (Gmail provides)

### Step 2: Update .env File

Edit `.env` in your project root:

```env
# Email Configuration (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ayushsinghrajput643@gmail.com
SMTP_PASS=your_16_char_app_password
FROM_EMAIL=ayushsinghrajput643@gmail.com
ADMIN_EMAIL=ayushsinghrajput643@gmail.com
```

**Replace**:
- `your_16_char_app_password` → Your Gmail App Password (from Step 1)
- Email addresses → Your actual email

### Step 3: Test the Email System

```powershell
cd d:\website\devspark-solution
npm start

# Visit: http://localhost:5000
# Fill out the contact form
# Check your email for notifications!
```

**Done!** Emails will now be sent! ✅

---

## 📧 Email System Features

### What Happens When Someone Submits the Form

1. **Admin Gets Notified**
   - Receives email with full submission details
   - Includes: Name, email, phone, service, message
   - Professional HTML formatted
   - Timestamp included

2. **User Gets Confirmation**
   - Receives thank you email
   - Confirms their message was received
   - Shows service they inquired about
   - Professional branding

3. **Database Storage**
   - Message saved to MongoDB
   - Viewable in admin dashboard
   - Can mark as read/unread
   - Can delete or manage

### Email Templates

**Admin Notification Email**:
```
┌─ DevSpark New Contact Submission ─┐
│                                    │
│ Name: [User Name]                  │
│ Email: [User Email]                │
│ Phone: [User Phone]                │
│ Service: [Service Type]            │
│                                    │
│ Message:                           │
│ [Full Message Text]                │
│                                    │
│ Time: [Timestamp]                  │
└────────────────────────────────────┘
```

**User Confirmation Email**:
```
┌─ Thank You for Contacting DevSpark ─┐
│                                      │
│ Hi [User Name],                      │
│                                      │
│ We have received your message and    │
│ will get back to you soon.           │
│                                      │
│ Service: [Service Type]              │
│ Submitted: [Timestamp]               │
│                                      │
│ Thank you!                           │
│ DevSpark Team                        │
└──────────────────────────────────────┘
```

---

## 🔧 Configuration Options

### For Gmail (Recommended)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### For Other Email Providers

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
```

#### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your_email@yahoo.com
SMTP_PASS=your_password
```

#### Custom SMTP Server
```env
SMTP_HOST=your.smtp.server.com
SMTP_PORT=587  # or 465 for SSL
SMTP_USER=your_username
SMTP_PASS=your_password
```

---

## 🧪 Test Email Sending

### Using curl to Test API
```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    phone = "1234567890"
    service = "Web Development"
    message = "This is a test message"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/api/contact" `
    -Method POST `
    -Body $body `
    -ContentType "application/json"
```

### Expected Response
```json
{
  "success": true,
  "message": "Contact message sent successfully",
  "data": {
    "id": "...",
    "name": "Test User",
    "email": "test@example.com",
    "createdAt": "2024-01-17T..."
  }
}
```

### Check Email
- ✅ Admin email received notification
- ✅ User email received confirmation
- ✅ Database has new entry

---

## 🎯 Email Sending Workflow

```
User Submits Form
    ↓
Frontend Validation
    ↓
Send to /api/contact endpoint
    ↓
Backend Receives Request
    ├─ Validate input
    ├─ Check email format
    ├─ Save to MongoDB
    └─ Send emails
        ├─ Admin notification (SMTP)
        ├─ User confirmation (SMTP)
        └─ Log status
            ├─ Success: Both emails sent ✅
            ├─ Partial: DB saved, email failed ⚠️
            └─ Full failure: Error returned ❌
    ↓
Response to Frontend
    ├─ Success: Show confirmation
    ├─ Error: Show error message
    └─ Log: Server console shows details
```

---

## ✅ Verify Setup

### Check 1: Environment Variables
```powershell
# Make sure .env exists in project root
cd d:\website\devspark-solution
cat .env

# Should show Gmail SMTP settings
```

### Check 2: Dependencies Installed
```powershell
# nodemailer should be installed
npm list nodemailer

# Expected: nodemailer@6.9.1 (or similar)
```

### Check 3: Server Running
```powershell
npm start

# Should show: "Server running on http://localhost:5000"
```

### Check 4: Test Form Submission
1. Visit: `http://localhost:5000`
2. Fill contact form
3. Submit
4. Check console for logs:
   - ✅ "Email sent successfully to admin@email.com"
   - Or ⚠️ "Email sending failed: [reason]"

---

## 🐛 Troubleshooting

### Problem: "SMTP authentication failed"
**Cause**: Wrong password or app password
**Solution**:
1. Go to: https://myaccount.google.com/apppasswords
2. Generate new app password
3. Update .env file
4. Restart server

### Problem: "Connection timeout"
**Cause**: Port blocked or network issue
**Solution**:
1. Check internet connection
2. Try different port (465 vs 587)
3. Check firewall settings
4. Verify SMTP_HOST is correct

### Problem: "Email sent but not received"
**Cause**: Marked as spam or wrong recipient
**Solution**:
1. Check spam folder
2. Verify recipient email in .env
3. Whitelist sender email
4. Check email logs

### Problem: "Module not found: nodemailer"
**Cause**: Not installed
**Solution**:
```powershell
npm install nodemailer
```

### Problem: ".env file not found"
**Cause**: File doesn't exist
**Solution**:
1. Check file exists in project root
2. Not in subdirectory
3. Run: `ls -la .env`
4. Create if missing

### Problem: "Cannot read SMTP_HOST"
**Cause**: .env not loaded
**Solution**:
1. Make sure dotenv is installed: `npm install dotenv`
2. Check server.js requires dotenv at top
3. Restart server

---

## 📊 Email History

### View Submitted Messages
1. Go to: `http://localhost:5000/admin.html`
2. Login: `admin` / `admin123`
3. See all contact submissions
4. Can mark as read/unread
5. Can delete messages

### Check Email Logs
Server console shows:
```
✅ Email sent successfully to ayushsinghrajput643@gmail.com
```

Or:
```
⚠️ Email sending failed: [Error details]
```

---

## 🔒 Security Notes

### Email Credentials
- **Never commit** `.env` to Git (it's in .gitignore)
- **Use app passwords** not account passwords
- **Rotate passwords** periodically
- **Monitor email account** for unusual activity

### Email Content
- Emails include timestamp (prevents replay)
- User data is validated before sending
- HTML is sanitized
- No executable code in emails

### Rate Limiting
Consider implementing for production:
- Limit emails per hour
- Throttle repeated requests
- Verify email addresses

---

## 🚀 Production Deployment

### For Vercel Deployment
1. Add environment variables in Vercel dashboard
2. Go to: Project Settings → Environment Variables
3. Add each variable from .env
4. Deploy automatically gets them

### For Other Hosting
1. Set environment variables on hosting platform
2. Or add .env file to server
3. Restart application

### Email Provider for Production
Consider professional email services:
- **SendGrid** - High volume, reliable
- **Mailgun** - Developer friendly
- **Amazon SES** - Scalable
- **Twilio SendGrid** - Enterprise

---

## 📚 Files Involved

### Email Configuration
- `server/config/mail.js` - Email sending setup
- `.env` - Credentials (gitignored)

### Email Processing
- `server/controllers/contactController.js` - Email logic
- `server/routes/contactRoutes.js` - API endpoint
- `server/models/Contact.js` - Database storage

### Frontend
- `public/js/script.js` - Form submission
- `public/index.html` - Contact form UI
- `public/css/style.css` - Form styling

---

## 💡 Tips & Tricks

### Gmail App Password Setup
- Only works if 2FA is enabled
- Password is one-time visible
- Different from Gmail password
- Can revoke anytime

### Testing Without Real Email
```javascript
// Modify server/config/mail.js for testing
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',  // Ethereal test service
    port: 587,
    auth: {
        user: process.env.TEST_EMAIL_USER,
        pass: process.env.TEST_EMAIL_PASS,
    },
});
```

### Custom Email Templates
Edit in `server/controllers/contactController.js`:
- Change colors (gradient colors)
- Add company logo
- Modify text and messaging
- Add additional fields

### Multiple Email Recipients
Change ADMIN_EMAIL:
```env
# Send to multiple addresses (comma-separated)
ADMIN_EMAIL=admin1@email.com,admin2@email.com
```

Then modify controller:
```javascript
to: process.env.ADMIN_EMAIL.split(',').map(e => e.trim())
```

---

## ✨ Summary

### Email System is:
✅ **Installed** - Nodemailer ready
✅ **Configured** - Gmail SMTP pre-setup
✅ **Integrated** - API endpoint ready
✅ **Templated** - Professional HTML emails
✅ **Tested** - Error handling included
✅ **Documented** - This guide

### To Use It:
1. Add Gmail App Password to .env
2. Run `npm start`
3. Test with contact form
4. Check email inbox

### Status: ✅ Ready to Use

Your email system is fully functional and ready for production use with proper SMTP configuration!

---

**Questions?** See `DOCUMENTATION_INDEX.md` for more guides.

**Date**: January 17, 2026
**Status**: ✅ SMTP Email System Active
