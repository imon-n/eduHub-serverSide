# StudyHub Server

StudyHub Server is a backend API for an online learning platform that connects students, tutors, and admins. Built with Node.js, Express, MongoDB, and Firebase, it handles everything from user roles to payments and materials.

---

## 🚀 Features

- ✅ Firebase Authentication (JWT)
- ✅ Role-Based Access Control (`admin`, `tutor`, `user`)
- ✅ Full CRUD Support:
  - Users
  - Courses
  - Notes
  - Rejected Courses
  - Materials
  - Payments
- ✅ Stripe Payment Integration
- ✅ Organized MVC Architecture

---

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** Firebase Admin SDK
- **Payments:** Stripe

---

## ⚙️ Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/studyhub-server.git
   cd studyhub-server


2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   ```env
   PORT=5000
   DB_USER=your_mongo_user
   DB_PASS=your_mongo_password
   PAYMENT_GATEWAY_KEY=your_stripe_secret_key
   ```

4. **Add Firebase Admin SDK:**

   Place `firebase-admin-key.json` in the project root.

5. **Run the server:**

   ```bash
   npm run dev  # for development
   npm start    # for production
   ```

---

## 🔗 API Endpoints (No `/api` prefix)

> All protected routes require `Authorization: Bearer <Firebase ID Token>`

---

### 🔐 Auth

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | `/auth/me` | Get logged-in user info |

---

### 👤 Users

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/users`             | Create/register user   |
| GET    | `/users`             | Get all tutors         |
| GET    | `/users/search`      | Search users by email  |
| GET    | `/users/:email/role` | Get user role by email |
| PATCH  | `/users/:id/role`    | Update user role       |

---

### 📚 Courses

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | `/courses`     | Create a new course |
| GET    | `/courses`     | Get all courses     |
| GET    | `/courses/:id` | Get course by ID    |
| PATCH  | `/courses/:id` | Update course       |
| DELETE | `/courses/:id` | Delete course by ID |

---

### 🗒️ Notes

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/notes`     | Create a new note |
| GET    | `/notes`     | Get all notes     |
| GET    | `/notes/:id` | Get note by ID    |
| PATCH  | `/notes/:id` | Update note by ID |
| DELETE | `/notes/:id` | Delete note by ID |

---

### 🚫 Rejected Courses

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | `/rejected`     | Add rejected course       |
| GET    | `/rejected`     | Get all rejected courses  |
| GET    | `/rejected/:id` | Get rejected course by ID |
| PATCH  | `/rejected/:id` | Update rejected course    |
| DELETE | `/rejected/:id` | Delete rejected course    |

---

### 📦 Materials

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/materials`     | Upload material       |
| GET    | `/materials`     | Get all materials     |
| GET    | `/materials/:id` | Get material by ID    |
| PATCH  | `/materials/:id` | Update material by ID |
| DELETE | `/materials/:id` | Delete material by ID |

---

### 💳 Payments

| Method | Endpoint                 | Description                  |
| ------ | ------------------------ | ---------------------------- |
| POST   | `/payments`              | Record a new payment         |
| GET    | `/payments`              | Get all payments             |
| GET    | `/payments/:id`          | Get payment by ID            |
| PATCH  | `/payments/:id`          | Update payment info          |
| DELETE | `/payments/:id`          | Delete a payment record      |
| POST   | `/create-payment-intent` | Create Stripe payment intent |

---

## 🔐 Auth Middleware

All protected endpoints require Firebase token in headers:

```
Authorization: Bearer <Firebase_ID_Token>
```

---

## 👨‍💻 Author

Made with by [Nur Mohammad Imon](https://github.com/imon-n)

