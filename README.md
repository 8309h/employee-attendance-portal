# Employee Attendance Portal

## 📌 Overview

This is a full-stack Employee Attendance Portal built using **React.js, Node.js, and PostgreSQL**.
The application allows employees to:

* Login securely
* Mark daily check-in and check-out
* View attendance history (timesheet)
* Apply for leave and track status

---

## 🛠 Tech Stack

### Frontend

* React.js (Vite)
* Material UI
* Axios
* React Router

### Backend

* Node.js
* Express.js
* Sequelize ORM
* JWT Authentication

### Database

* PostgreSQL

---

## 🚀 Features

* 🔐 Secure login with JWT authentication
* ⏱ Check-in / Check-out system
* 📊 Timesheet with working hours
* 📝 Leave application & history
* ⌛ Auto logout after 15 minutes (token expiry)
* 📅 One check-in allowed per day

---

## 📂 Project Structure

```
employee-attendance-portal/
│
├── frontend/   (React App)
├── backend/    (Node API)
├── database.sql
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside **backend/** folder:

```
PORT=5000
DB_NAME=attendance_db
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=supersecret
```

---

## 🗄 Database Setup (PostgreSQL)

### Step 1: Create Database

Open pgAdmin or terminal and run:

```sql
CREATE DATABASE attendance_db;
```

---

### Step 2: Run SQL Script

Use the provided file:

```
database.sql
```

Run it in pgAdmin → Query Tool

This will:

* Create all tables
* Insert sample data (if included)

---

### Step 3: Verify Tables

Ensure these tables exist:

* Users
* Attendances
* Leaves

---

## ▶️ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## ▶️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User logs in with username & password
2. Backend returns JWT token
3. Token stored in localStorage
4. Token expires after **15 minutes**
5. On expiry → user redirected to login page

---

## 📊 API Endpoints

### Auth

* `POST /api/auth/login`
* `POST /api/auth/signup`

### Attendance

* `POST /api/attendance/checkin`
* `POST /api/attendance/checkout`
* `GET /api/attendance/today-status`
* `GET /api/attendance/timesheet`

### Leaves

* `POST /api/leaves/apply`
* `GET /api/leaves`

---

## 🧪 Testing the Application

1. Signup a new user
2. Login
3. Check-in
4. Check-out
5. View timesheet
6. Apply leave

---

## 👨‍💻 Author

Harshal Wagh
Software Engineer

---
