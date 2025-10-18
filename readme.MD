# Zerodha Clone - Stock Trading Platform

A full-stack web application replicating Zerodha's trading platform functionality, featuring user authentication, portfolio management, and real-time stock trading capabilities.

## 🚀 Project Overview

This project is a comprehensive clone of Zerodha, India's largest stock brokerage platform. It provides users with the ability to create accounts, manage their stock holdings, track positions, and place orders through an intuitive web interface.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### User Authentication

- **Secure Registration**: User signup with bcrypt password hashing (12 salt rounds)
- **JWT Authentication**: Token-based authentication with HTTP-only cookies
- **Session Management**: Persistent login sessions with token verification middleware
- **Protected Routes**: Middleware-based route protection

### Portfolio Management

- **Holdings Dashboard**: View all stock holdings with real-time pricing
- **Position Tracking**: Monitor open positions with profit/loss calculations
- **Order Management**: Place buy/sell orders with quantity and price specifications
- **Dynamic Updates**: Real-time portfolio value calculations

### Landing Pages

- **Home Page**: Hero section, awards, statistics, pricing, and education
- **About Page**: Company information and mission
- **Products Page**: Platform features and offerings
- **Pricing Page**: Transparent fee structure
- **Support Page**: Help and documentation

## 🛠️ Tech Stack

### Backend

- **Runtime**: Node.js (v20+)
- **Framework**: Express.js 4.21.2
- **Database**: MongoDB with Mongoose ODM 8.12.1
- **Authentication**:
  - JWT (jsonwebtoken 9.0.2)
  - Bcrypt.js 3.0.2 for password hashing
  - Passport.js 0.7.0 with passport-local-mongoose 8.0.0
- **Middleware**:
  - CORS for cross-origin requests
  - Cookie-parser for cookie handling
  - Body-parser for request parsing
- **Development**: Nodemon 3.1.7 for hot reloading

### Frontend

- **Library**: React 19.0.0
- **Routing**: React Router DOM 7.4.0
- **HTTP Client**: Axios 1.8.3
- **UI Notifications**: React Toastify 11.0.5
- **Testing**: Jest, React Testing Library
- **Build Tool**: React Scripts 5.0.1

### Database Models

- **Users**: Full name, email, hashed password
- **Holdings**: Stock name, quantity, average price, current price, net P&L, day P&L
- **Positions**: Product type, stock name, quantity, average, price, net, day, loss indicator
- **Orders**: Stock name, quantity, price, mode (BUY/SELL)

## 📁 Project Structure

```
zerodha-clone/
│
├── backend/
│   ├── controllers/
│   │   ├── AuthController.js      # Signup logic
│   │   └── LoginController.js     # Login logic
│   ├── middlewares/
│   │   └── AuthMiddleware.js      # JWT verification
│   ├── models/
│   │   ├── UsersModel.js          # User model
│   │   ├── HoldingsModel.js       # Holdings model
│   │   ├── PositionsModel.js      # Positions model
│   │   └── OrdersModel.js         # Orders model
│   ├── schemas/
│   │   ├── UsersSchema.js         # User schema
│   │   ├── HoldingsSchema.js      # Holdings schema
│   │   ├── PositionsSchema.js     # Positions schema
│   │   └── OrdersSchema.js        # Orders schema
│   ├── AuthRoute.js               # Authentication routes
│   ├── SecreteToken.js            # JWT token generation
│   ├── index.js                   # Main server file
│   ├── package.json
│   └── .env                       # Environment variables
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── landing_page/
    │   │   ├── about/             # About page components
    │   │   ├── context/
    │   │   │   └── AuthContext.js # Global auth state
    │   │   ├── home/
    │   │   │   ├── Hero.js
    │   │   │   ├── Awards.js
    │   │   │   ├── Stats.js
    │   │   │   ├── Pricing.js
    │   │   │   ├── Education.js
    │   │   │   └── HomePage.js
    │   │   ├── login/
    │   │   │   └── Login.js       # Login component
    │   │   ├── signup/
    │   │   │   └── Signup.js      # Signup component
    │   │   ├── pricing/           # Pricing page
    │   │   ├── products/          # Products page
    │   │   ├── support/           # Support page
    │   │   ├── Navbar.js
    │   │   ├── Footer.js
    │   │   ├── NotFound.js
    │   │   └── OpenAccount.js
    │   ├── index.js               # React entry point
    │   └── index.css
    └── package.json
```

## 🔧 Installation

### Prerequisites

- Node.js (v20 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Backend Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd zerodha-clone/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the backend directory:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret_key
PORT=3004
```

4. Start the development server:

```bash
npm run dev
```

The backend server will start on `http://localhost:3004`

### Frontend Setup

1. Navigate to frontend directory:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The frontend will start on `http://localhost:3000`

## 🌍 Environment Variables

### Backend (.env)

```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/
TOKEN_KEY=your_secret_jwt_key
PORT=3004
```

## 📡 API Endpoints

### Authentication Routes

#### POST `/signup`

- **Description**: Register a new user
- **Body**:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

- **Response**:

```json
{
  "message": "Signed up successfully",
  "success": true,
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### POST `/login`

- **Description**: Login existing user
- **Body**:

```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

- **Response**:

```json
{
  "message": "User logged in successfully",
  "success": true,
  "token": "jwt_token_here"
}
```

#### POST `/user`

- **Description**: Verify user authentication status
- **Headers**: Cookie with JWT token
- **Response**:

```json
{
  "status": true,
  "user": "John Doe"
}
```

### Portfolio Routes

#### GET `/allHoldings`

- **Description**: Fetch all user holdings
- **Response**: Array of holding objects

#### GET `/allPositions`

- **Description**: Fetch all open positions
- **Response**: Array of position objects

#### POST `/addNewOrder`

- **Description**: Place a new order
- **Body**:

```json
{
  "name": "RELIANCE",
  "qty": 10,
  "price": 2500.5,
  "mode": "BUY"
}
```

- **Response**: `"Order added"`

#### GET `/allOrders`

- **Description**: Fetch all orders
- **Response**: Array of order objects

## 🗄️ Database Schema

### Users Collection

```javascript
{
  fullName: String,
  email: String (unique),
  password: String (hashed)
}
```

### Holdings Collection

```javascript
{
  name: String,      // Stock symbol
  qty: Number,       // Quantity held
  avg: Number,       // Average buy price
  price: Number,     // Current price
  net: String,       // Net P&L
  day: String        // Day P&L
}
```

### Positions Collection

```javascript
{
  product: String,   // Product type (CNC, MIS, etc.)
  name: String,      // Stock symbol
  qty: Number,       // Quantity
  avg: Number,       // Average price
  price: Number,     // Current price
  net: String,       // Net P&L
  day: String,       // Day P&L
  isLoss: Boolean    // Loss indicator
}
```

### Orders Collection

```javascript
{
  name: String,      // Stock symbol
  qty: Number,       // Quantity
  price: Number,     // Order price
  mode: String       // BUY or SELL
}
```

## 🎯 Usage

1. **Register**: Navigate to `/signup` and create a new account
2. **Login**: Use `/login` to authenticate with your credentials
3. **Browse**: Explore the landing pages (Home, About, Products, Pricing, Support)
4. **Dashboard**: Access your portfolio dashboard (when implemented)
5. **Trade**: Place orders, view holdings, and track positions

## 🔐 Security Features

- **Password Hashing**: Bcrypt with 12 salt rounds
- **JWT Tokens**: 3-day expiration with secure secret key
- **HTTP-Only Cookies**: Token stored securely in cookies
- **CORS Protection**: Configured for cross-origin security
- **Input Validation**: Schema validation through Mongoose
- **Pre-save Hooks**: Automatic password hashing before database save

## 🚧 Development Notes

### Known Issues

- Backend URL in frontend hardcoded to Render deployment
- CORS configured to allow all origins (`*`) - should be restricted in production
- No rate limiting implemented
- No input sanitization middleware

### Potential Improvements

- Add input validation middleware (express-validator)
- Implement refresh token mechanism
- Add rate limiting (express-rate-limit)
- Implement WebSocket for real-time price updates
- Add unit and integration tests
- Implement proper error handling middleware
- Add logging system (Winston/Morgan)
- Implement pagination for large datasets
- Add Redis for session management
- Implement 2FA authentication

## 📝 License

This project is for educational purposes only.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any queries or suggestions, please open an issue in the repository.

---

**Note**: This is a learning project and should not be used for actual financial transactions.
