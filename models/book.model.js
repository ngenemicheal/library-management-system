/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of the book,it is automatically generated when creating the book
 *           example: "60d71b9f08f39b37e8d3e4f2"
 *         title:
 *           type: string
 *           description: The title of the book
 *           example: "The Great Gatsby"
 *         author:
 *           type: string
 *           description: The author of the book
 *           example: "F. Scott Fitzgerald"
 *         status:
 *           type: string
 *           enum: [available, borrowed]
 *           description: The current status of the book, the default is "available"
 *           example: "available"
 */

const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a valid book name"],
        },
        author: {
            type: String,
            required: [true, "Please provide a valid author name"],
        },
        status: {
            type: String,
            enum: ["available", "borrowed"],
            default: "available",
        },
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
