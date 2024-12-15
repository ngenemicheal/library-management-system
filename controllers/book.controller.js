const Book = require("../models/book.model.js");
const { body, validationResult } = require("express-validator");

exports.validateBook = [
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.addBook = async (req, res, next) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({
            message: "Book added successfully",
            data: {
                id: newBook._id,
                title: newBook.title,
                author: newBook.author,
                status: newBook.status,
            },
        });
    } catch (error) {
        next(error);
    }
};

exports.borrowBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        if (book.status === "borrowed") {
            return res
                .status(400)
                .json({ message: "Book is already borrowed" });
        }

        book.status = "borrowed";
        await book.save();

        res.json({
            message: "Book borrowed successfully",
            data: {
                id: book._id,
                title: book.title,
                author: book.author,
                status: book.status,
            },
        });
    } catch (error) {
        next(error);
    }
};

exports.returnBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        if (book.status === "available") {
            return res.status(400).json({
                message: "Book is already available",
            });
        }

        book.status = "available";
        await book.save();

        res.json({
            message: "Book returned successfully",
            data: {
                id: book._id,
                title: book.title,
                author: book.author,
                status: book.status,
            },
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find({});

        res.status(200).json({
            message: "Books retrieved successfully",
            data: books.map((book) => ({
                id: book._id,
                title: book.title,
                author: book.author,
                status: book.status,
            })),
        });
    } catch (error) {
        next(error);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.status(200).json({
                message: "Book retrieved successfully",
                data: {
                    id: book._id,
                    title: book.title,
                    author: book.author,
                    status: book.status,
                },
            });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        next(error);
    }
};
