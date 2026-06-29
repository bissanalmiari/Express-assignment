# Restaurant POS REST API

## Project Description

This project is a RESTful API for a Restaurant Point of Sale (POS) system developed using Node.js, Express.js, MongoDB, Mongoose, and TypeScript.

The API allows users to manage:

* Customers
* Categories
* Menu Items
* Orders
* Order Items

Each entity supports full CRUD operations (Create, Read, Update, Delete), pagination, input validation, and centralized error handling.

---

## Technologies Used

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* Express Validator
* Dotenv
* Postman

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the project

```bash
npm run dev
```

---

## API Endpoints

### Customers

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/customers     |
| GET    | /api/customers     |
| GET    | /api/customers/:id |
| PUT    | /api/customers/:id |
| DELETE | /api/customers/:id |

### Categories

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /api/categories     |
| GET    | /api/categories     |
| GET    | /api/categories/:id |
| PUT    | /api/categories/:id |
| DELETE | /api/categories/:id |

### Menu Items

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /api/menu-items     |
| GET    | /api/menu-items     |
| GET    | /api/menu-items/:id |
| PUT    | /api/menu-items/:id |
| DELETE | /api/menu-items/:id |

### Orders

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /api/orders     |
| GET    | /api/orders     |
| GET    | /api/orders/:id |
| PUT    | /api/orders/:id |
| DELETE | /api/orders/:id |

### Order Items

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | /api/order-items     |
| GET    | /api/order-items     |
| GET    | /api/order-items/:id |
| PUT    | /api/order-items/:id |
| DELETE | /api/order-items/:id |

---

## Features

* RESTful API
* CRUD Operations
* MongoDB Database
* Mongoose ODM
* Pagination
* Input Validation
* Global Error Handling
* TypeScript Support
