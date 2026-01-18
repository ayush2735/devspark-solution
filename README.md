# TechSpark - Web Development & Digital Solutions

A modern, full-stack web platform for a web development agency. Features a responsive website with contact form, admin dashboard, and dark mode support.

## Project Structure

```
Techspark-solution/
├── public/                     # Frontend (Client Side)
│   ├── index.html              # Main website (Home, Services, About, Contact)
│   ├── admin.html              # Admin dashboard (view messages)
│   ├── css/
│   │   └── style.css           # All styles (light + dark mode)
│   ├── js/
│   │   └── script.js           # Frontend JS (dark mode, menu, form)
│   ├── images/
│   │   └── logo.png            # Company logo
│   └── favicon.ico             # Website icon
│
├── server/                     # Backend (Server Side)
│   ├── server.js               # Main Express server
│   ├── models/
│   │   └── Contact.js          # Contact form model
│   ├── routes/
│   │   └── contactRoutes.js    # Contact + admin routes
│   ├── controllers/
│   │   └── contactController.js
│   ├── config/
│   │   ├── db.js               # MongoDB connection
│   │   └── mail.js             # Nodemailer setup
│   └── middleware/
│       └── auth.js             # Admin authentication
│
├── .env                        # Environment variables (SECRET)
├── .gitignore                  # Ignore node_modules, .env
├── package.json                # Dependencies & scripts
├── README.md                   # Project documentation
└── vercel.json                 # Vercel deployment config
```

## Features

- ✨ **Responsive Design** - Works on all devices
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📧 **Contact Form** - Collect messages from visitors
- 📬 **Admin Dashboard** - View all contact messages
- 🔐 **Admin Authentication** - Secure admin access (future)
- 📱 **Mobile Menu** - Hamburger menu for mobile devices
- 🚀 **Express Server** - RESTful API backend
- 📦 **MongoDB** - NoSQL database for contact storage
- ✉️ **Email Notifications** - Send emails via Nodemailer
- 🌐 **Vercel Ready** - Easy deployment configuration

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devspark-solution
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devspark-db
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   FROM_EMAIL=noreply@devspark.com
   ADMIN_EMAIL=admin@devspark.com
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. **Update MongoDB Connection**
   - Create a MongoDB account at [mongodb.com](https://www.mongodb.com)
   - Get your connection string
   - Update `MONGODB_URI` in `.env`

5. **Configure Email Service**
   - Use Gmail or any SMTP service
   - Update email credentials in `.env`

## Running the Project

### Development Mode
```bash
npm run dev
```
This uses `nodemon` for auto-restart on file changes.

### Production Mode
```bash
npm start
```

Visit `http://localhost:5000` in your browser.

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Submit a contact form
  - Body: `{ name, email, message }`
  - Returns: Contact document with ID

### Get Messages
- **GET** `/api/messages`
  - Retrieve all contact messages
  - Returns: Array of contact documents

### Health Check
- **GET** `/api/health`
  - Check if server is running
  - Returns: `{ status: 'Server is running' }`

## Technologies Used

### Frontend
- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- JWT (for authentication)
- dotenv

### Deployment
- Vercel (for frontend/full-stack)
- MongoDB Atlas (for database)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | Environment (development/production) |
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port |
| `SMTP_USER` | SMTP username/email |
| `SMTP_PASS` | SMTP password/app password |
| `FROM_EMAIL` | Email sender address |
| `ADMIN_EMAIL` | Admin email for notifications |
| `JWT_SECRET` | Secret key for JWT tokens |

## Features in Detail

### Dark Mode
- Toggle with button in navigation
- Persists across sessions using localStorage
- CSS variables for easy theme switching

### Contact Form
- Client-side validation
- Server-side validation
- Saves to MongoDB
- Email notification to admin
- Success/error messages

### Admin Dashboard
- View all contact messages
- Display sender info and timestamps
- Responsive grid layout

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Optimized for all screen sizes

## Deployment

### Deploy on Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Update Frontend URLs**
   - Update API calls to point to your Vercel domain

## Security Considerations

- ✅ Validate all user inputs
- ✅ Use environment variables for secrets
- ✅ Implement rate limiting (future)
- ✅ Add HTTPS in production
- ✅ Use JWT for admin authentication
- ✅ CORS configuration for security

## Future Enhancements

- [ ] Admin authentication system
- [ ] Message delete/archive functionality
- [ ] Email templates
- [ ] Rate limiting
- [ ] Analytics dashboard
- [ ] Blog section
- [ ] Client portfolio showcase
- [ ] Testimonials section
- [ ] Newsletter subscription

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ by TechSpark Team**
