# Library Management System

## Description

A simple library management system built with Node.js, Express, and MongoDB. The API allows users to perform basic operations such as adding, borrowing, returning, and viewing books. The project follows RESTful API design principles and uses Swagger for API documentation.

---

## Features

-   Add new books to the library
-   Borrow and return books
-   View book details by ID

---

## Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org) (v14 or later)
-   [MongoDB](https://www.mongodb.com) (local or cloud instance)
-   [npm](https://www.npmjs.com)

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
PORT=3000
MONGO_URI=
```

### 4. Start the Server

```bash
npm start
```

The server will run on http://localhost:3000.

---

## API Documentation

The API is documented using [Swagger](http://swagger.io) and can be accessed at:

http://localhost:3000/api-docs

---

## Endpoints

### **POST /api/books**

-   **Description**: Add a new book to the library
-   **Request Body**:
    ```json
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald"
    }
    ```
-   **Response Body**:
    ```json
    {
        "message": "Book added successfully",
        "data": {
            "id": "60d71b9f08f39b37e8d3e4f2",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "status": "available"
        }
    }
    ```

### **GET /api/books**

-   **Description**: Retrieve all books in the library
-   **Response Body**:
    ```json
    {
        "message": "Books retrieved successfully",
        "data": [
            {
                "id": "60d71b9f08f39b37e8d3e4f2",
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "status": "available"
            },
            {
                "id": "60d71b9f08f39b37e8d3e4f3",
                "title": "1984",
                "author": "George Orwell",
                "status": "borrowed"
            }
        ]
    }
    ```

### **GET /api/books/:id**

-   **Description**: Retrieve details of a book by its ID
-   **Response Body**:
    ```json
    {
        "message": "Book retrieved successfully",
        "data": {
            "id": "60d71b9f08f39b37e8d3e4f2",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "status": "available"
        }
    }
    ```

### **POST /api/books/:id/borrow**

-   **Description**: Borrow a book by its ID
-   **Response Body**:
    ```json
    {
        "message": "Book borrowed successfully",
        "data": {
            "id": "60d71b9f08f39b37e8d3e4f2",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "status": "borrowed"
        }
    }
    ```

### **POST /api/books/:id/return**

-   **Description**: Return a borrowed book by its ID
-   **Response Body**:
    ```json
    {
        "message": "Book returned successfully",
        "data": {
            "id": "60d71b9f08f39b37e8d3e4f2",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "status": "available"
        }
    }
    ```
