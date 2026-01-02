# Task Manager Demo

**TaskFlow** is a full-stack MERN (MongoDB, Express, React, Node) application developed as a technical assessment for the Backend Developer Intern position. The project focuses on building a secure, modular, and documented REST API, accompanied by a functional React frontend.

## 🔗 Live Links
- **Frontend (UI):** [https://task-manager-nine-ecru.vercel.app/]
- **Backend (API):** [https://sample-task-manager.onrender.com]
- **API Documentation (Swagger):** [https://sample-task-manager.onrender.com/api-docs]

---

## 🛠️ Tech Stack & Architecture

### **Backend (Core Focus)**
* **Environment:** Node.js & Express.js
* **Database:** MongoDB Atlas with Mongoose ODM
* **Authentication:** JWT (JSON Web Tokens) & bcryptjs for password hashing
* **Documentation:** Swagger UI (OpenAPI 3.0)
* **Architecture:** Modular Route-Controller-Model pattern for scalability

### **Frontend**
* **Library:** React.js (JSX)
* **Styling:** Tailwind CSS (Responsive Design)
* **API Client:** Axios (with Interceptors for automatic JWT handling)

---

## ✨ Features Implemented

### **1. Security & Authentication**
* **Password Hashing:** Implemented `bcryptjs` with 10 salt rounds to ensure user password security.
* **Stateful Authorization:** JWT-based login system where the token is securely stored and sent in the `Authorization` header for protected routes.
* **RBAC (Role-Based Access Control):** Custom middleware to distinguish between `user` and `admin` roles, protecting sensitive endpoints.

### **2. Task Management (CRUD)**
* **Create:** Logged-in users can add tasks specifically linked to their account.
* **Read:** Users can only view tasks they have created (data isolation).
* **Update/Delete:** Full lifecycle management of task entities with proper status code responses.

### **3. Professional Engineering Practices**
* **API Versioning:** All endpoints are prefixed with `/api/v1` to allow for future updates without breaking existing integrations.
* **Centralized Error Handling:** Global middleware to manage exceptions and provide consistent JSON error responses.
* **Database Optimization:** Use of Mongoose schema validation and unique indexing for emails.

---

## 📂 Project Structure

```text
/backend
├── src/
│   ├── config/       # Database & Env configurations
│   ├── controllers/  # Request handling logic
│   ├── docs/         # Swagger UI definitions
│   ├── middlewares/  # Auth & Error handling
│   ├── models/       # Mongoose Schemas (User, Task)
│   ├── routes/       # API v1 Route definitions
│   ├── app.js        # Express middleware setup
│   └── server.js     # Entry point & DB connection

/frontend
├── src/
│   ├── pages/        # Dashboard, Login, Register views
│   ├── api.js        # Axios instance with JWT interceptors
│   ├── App.jsx       # Routing & Protected Routes logic
│   └── main.jsx      # React entry point
