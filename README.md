# Expense Tracker — Full Stack

A complete full-stack Expense Tracker built with React, Node.js, Express, MongoDB, and JWT authentication.

## Features

- User registration and login
- JWT authentication
- Add income and expenses
- Edit and delete transactions
- Categories
- Dashboard with total income, total expenses, and balance
- Monthly income/expense chart
- Recent transactions
- Search and filters
- Responsive UI
- Protected backend routes
- MongoDB database
- Environment-variable based configuration
- Ready for GitHub and deployment

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Plain CSS

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

## Project Structure

```text
expense-tracker/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── README.md
```

## 1. Requirements

Install:
- Node.js 18+
- MongoDB locally OR a MongoDB Atlas database
- Git

## 2. Backend Setup

```bash
cd server
npm install
```

Copy `.env.example` to `.env` and configure:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

The API runs at:

```text
http://localhost:5000
```

## 3. Frontend Setup

Open a second terminal:

```bash
cd client
npm install
```

Create `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start:

```bash
npm run dev
```

Open the Vite URL shown in the terminal, normally:

```text
http://localhost:5173
```

## 4. API Overview

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Transactions
- `GET /api/transactions`
- `POST /api/transactions`
- `PUT /api/transactions/:id`
- `DELETE /api/transactions/:id`
- `GET /api/transactions/summary`

All transaction endpoints require:

```text
Authorization: Bearer <JWT_TOKEN>
```

## 5. Suggested GitHub Commands

```bash
git init
git add .
git commit -m "Initial full-stack expense tracker"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/expense-tracker.git
git push -u origin main
```

Never commit `.env` files. They are ignored by `.gitignore`.

## 6. Portfolio Description

**Expense Tracker** is a full-stack personal finance management application that allows users to securely record income and expenses, organize transactions by category, filter records, and monitor their financial balance through an interactive dashboard. The application uses JWT authentication and MongoDB for persistent data storage.

## Future Improvements

- Monthly budgets
- Recurring transactions
- Export to CSV/PDF
- Dark mode
- Email reminders
- Spending insights
- Deployment with Vercel + Render
