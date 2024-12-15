const express = require("express");
const router = express.Router();
const {
    addBook,
    borrowBook,
    returnBook,
    getAllBooks,
    getBookById,
    validateBook,
} = require("../controllers/book.controller.js");

/**
 * @swagger
 * tags:
 *   - name: Books
 *     description: API for managing books
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     tags:
 *       - Books
 *     summary: Add a new book
 *     description: Adds a new book to the library collection.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Successfully added book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/books", validateBook, addBook);

/**
 * @swagger
 * /api/books/{id}/borrow:
 *   post:
 *     tags:
 *       - Books
 *     summary: Borrow a book
 *     description: Mark a specific book as borrowed by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to borrow
 *     responses:
 *       200:
 *         description: Successfully borrowed book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */
router.post("/books/:id/borrow", borrowBook);

/**
 * @swagger
 * /api/books/{id}/return:
 *   post:
 *     tags:
 *       - Books
 *     summary: Return a book
 *     description: Mark a specific book as returned by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to return
 *     responses:
 *       200:
 *         description: Successfully returned book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */
router.post("/books/:id/return", returnBook);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     tags:
 *       - Books
 *     summary: Retrieve a specific book
 *     description: Retrieves a specific book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to retrieve
 *     responses:
 *       200:
 *         description: Book retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */
router.get("/books/:id", getBookById);

/**
 * @swagger
 * /api/books:
 *   get:
 *     tags:
 *       - Books
 *     summary: Retrieve all books
 *     description: Retrieves a list of all books in the library.
 *     responses:
 *       200:
 *         description: List of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 */
router.get("/books", getAllBooks);

module.exports = router;
