# employee-attendance-portal
This is web-based Employee Attendance Portal for a small company. The application allows an employee to log in, record their daily check-in and check-out, view their timesheet, and apply for leave.


// backend
backend/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── config.js
│   │
│   ├── models/
│   │   ├── index.js
│   │   ├── user.model.js
│   │   ├── attendance.model.js
│   │   └── leave.model.js
│   │
│   ├── migrations/
│   ├── seeders/
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── attendance.controller.js
│   │   └── leave.controller.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── attendance.routes.js
│   │   └── leave.routes.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── role.middleware.js   # for future roles
│   │
│   ├── services/   # 🔥 IMPRESSIVE (business logic layer)
│   │   ├── auth.service.js
│   │   ├── attendance.service.js
│   │   └── leave.service.js
│   │
│   ├── utils/
│   │   ├── token.util.js
│   │   └── time.util.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── sequelize-cli.json



backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── index.js
│   │   ├── user.model.js
│   │   ├── attendance.model.js
│   │   └── leave.model.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── attendance.controller.js
│   │   └── leave.controller.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── attendance.routes.js
│   │   └── leave.routes.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── utils/
│   │   └── token.util.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json