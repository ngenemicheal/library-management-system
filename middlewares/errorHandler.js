function errorHandler(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500).json({ message: err.message });
}

// function errorHandler(err, req, res, next) {
//     console.error(err.message); // Log the error message

//     // Handle Mongoose Validation Errors
//     if (err.name === "ValidationError") {
//         const messages = Object.values(err.errors).map(
//             (error) => error.message
//         );
//         return res.status(400).json({
//             success: false,
//             message: "Validation Error",
//             errors: messages,
//         });
//     }

//     // General Error Handling
//     res.status(err.status || 500).json({
//         success: false,
//         message: err.message || "Internal Server Error",
//     });
// }

module.exports = errorHandler;
