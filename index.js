const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book.route.js");
const errorHandler = require("./middlewares/errorHandler.js");
const dotenv = require("dotenv");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

dotenv.config();
app.use(express.json());
app.use(errorHandler);

const options = {
    definition: {
        openapi: "3.0.0",
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/`,
                description: "Local development",
            },
        ],
        info: {
            title: "Library Management API",
            version: "1.0.0",
            description: "API for managing books in a library",
            contact: {
                name: "Michael Ngene",
                email: "ngenemich@example.com",
            },
        },
    },
    apis: ["./routes/*.js", "./models/*.js"],
};

const swaggerConfig = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use("/api", bookRoutes);

const PORT = process.env.PORT || 3333;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(() => {
        console.error("Error connecting to MongoDB");
        process.exit(1);
    });
