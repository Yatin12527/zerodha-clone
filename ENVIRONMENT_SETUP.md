# Environment Setup Guide

## 📋 Overview
This guide explains how to set up environment variables for both development and production environments.

## 🔧 Backend Configuration

### Step 1: Create Backend .env file

Navigate to the `backend` folder and create a `.env` file:

```bash
cd backend
```

Copy the contents from `.env.example` and fill in your actual values:

```env
# MongoDB Configuration
MONGO_URL="mongodb+srv://username:password@cluster.mongodb.net/dbname"

# JWT Configuration
TOKEN_KEY="your_super_secret_jwt_key_here"

# Server Configuration
PORT=3004

# Environment
NODE_ENV=development
```

### Important Notes:
- **MONGO_URL**: Your MongoDB connection string (Atlas or local)
- **TOKEN_KEY**: A strong, random secret key for JWT signing (use a password generator)
- **PORT**: Backend server port (default: 3004)
- **NODE_ENV**: Set to "development" for local dev, "production" for deployment

## 🎨 Frontend Configuration

### Step 1: Create Frontend .env file

Navigate to the `frontend` folder and create a `.env` file:

```bash
cd frontend
```

Copy the contents from `.env.example`:

```env
# Backend API URL
# For development (local backend)
REACT_APP_BACKEND_URL=http://localhost:3004

# For production (uncomment when deploying)
# REACT_APP_BACKEND_URL=https://your-backend-deployment-url.com
```

### Important Notes:
- **REACT_APP_BACKEND_URL**: Must start with `REACT_APP_` prefix (Create React App requirement)
- For local development: `http://localhost:3004`
- For production: Your deployed backend URL (e.g., Render, Heroku, etc.)

## 🚀 Running the Application

### Backend (Terminal 1)
```bash
cd backend
npm install
npm run dev
```

The backend will start on `http://localhost:3004`

### Frontend (Terminal 2)
```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`

## 🌍 Switching Between Environments

### Development Mode
Ensure frontend `.env` has:
```env
REACT_APP_BACKEND_URL=http://localhost:3004
```

### Production Mode
Update frontend `.env` to:
```env
REACT_APP_BACKEND_URL=https://your-backend-url.onrender.com
```

**Note**: After changing `.env` files, you must restart the development server!

## 🔐 Security Best Practices

1. **Never commit .env files** - They're in .gitignore for a reason
2. **Use strong TOKEN_KEY** - Generate a random 32+ character string
3. **Different keys for different environments** - Use separate keys for dev/staging/production
4. **Keep .env.example updated** - But without sensitive values

## ✅ Verification Checklist

- [ ] Backend .env file created with all required variables
- [ ] Frontend .env file created with REACT_APP_BACKEND_URL
- [ ] MongoDB connection string is correct
- [ ] JWT TOKEN_KEY is set
- [ ] .env files are in .gitignore
- [ ] Backend server starts without errors
- [ ] Frontend server starts without errors
- [ ] API calls work between frontend and backend

## 🐛 Troubleshooting

### Backend won't connect to MongoDB
- Check MONGO_URL format
- Ensure IP whitelist in MongoDB Atlas includes your IP
- Verify credentials are correct

### Frontend can't reach backend
- Verify backend is running on correct port
- Check REACT_APP_BACKEND_URL matches backend port
- Ensure CORS is enabled on backend

### Environment variables not updating
- Restart the development server (Ctrl+C, then npm start)
- Clear browser cache
- Check for typos in variable names

## 📝 File Structure

```
zerodha-clone/
├── backend/
│   ├── .env                 (Your actual config - not committed)
│   ├── .env.example         (Template - committed to git)
│   └── .gitignore          (Includes .env)
│
└── frontend/
    ├── src/
    │   └── config/
    │       └── api.js       (Reads REACT_APP_BACKEND_URL)
    ├── .env                 (Your actual config - not committed)
    ├── .env.example         (Template - committed to git)
    └── .gitignore          (Includes .env)
```

## 🎯 Benefits of This Setup

✅ **Easy switching** between development and production
✅ **Secure** - No hardcoded credentials in code
✅ **Team-friendly** - .env.example shows required variables
✅ **Deployment-ready** - Just update .env on server
✅ **Prevents accidents** - Can't accidentally push secrets to GitHub

---

**Need Help?** Check the main README.md or open an issue!
