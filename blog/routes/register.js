const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this directory exists or change it
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Handling POST request to /CreateBlog
router.post('/', upload.single('img'), (req, res) => {
    // Log the form data and file information
    console.log(req.body);
    console.log(req.file); // The uploaded file information

    // Check if the image file was uploaded
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Respond with a success message
    res.json({ message: 'Blog created successfully' });
});

module.exports = router;
