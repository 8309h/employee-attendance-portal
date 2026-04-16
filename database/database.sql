-- ===============================
-- Employee Attendance Portal DB
-- ===============================

-- Drop existing tables (for clean setup)
DROP TABLE IF EXISTS "Leaves" CASCADE;
DROP TABLE IF EXISTS "Attendances" CASCADE;
DROP TABLE IF EXISTS "Users" CASCADE;

-- ===============================
-- Users Table
-- ===============================
CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'EMPLOYEE',
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===============================
-- Attendance Table
-- ===============================
CREATE TABLE "Attendances" (
    id SERIAL PRIMARY KEY,
    "UserId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    check_in TIMESTAMP,
    check_out TIMESTAMP,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_date UNIQUE ("UserId", date)
);

-- ===============================
-- Leaves Table
-- ===============================
CREATE TABLE "Leaves" (
    id SERIAL PRIMARY KEY,
    "UserId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    start_date DATE,
    end_date DATE,
    type VARCHAR(50),
    reason TEXT,
    status VARCHAR(20) DEFAULT 'PENDING',
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===============================
-- Seed User (Password: 123456)
-- ===============================
INSERT INTO "Users" (username, password, role)
VALUES (
    'harshal_wagh',
    '$2b$10$BUZafE838e9ofV8ozj.i3eikxDIDve5O/cvkQdo755UcuxM6stTV2',
    'EMPLOYEE'
);

