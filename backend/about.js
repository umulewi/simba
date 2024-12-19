const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');



// Configure multer for file uploads
const upload = multer({
  dest: 'upload/about/', // Directory to store uploaded files
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
}).single('image'); // Process single file upload

// Post request to handle 'About Us' submission



app.post('/upload/about', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const imageName = req.file ? req.file.filename : null;

    if (!title || !description || !imageName) {
        return res.status(400).json({ message: 'All fields are required, including the image' });
    }

    const query = 'INSERT INTO about_us (image, description) VALUES (?, ?)';
    db.query(query, [imageName,description], (err) => {
        
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).json({ message: 'Error saving data', error: err.message });
          }
        res.json({ 
            message: 'about page added successfully', 
            imagePath: `/uploads/about/${imageName}` 
        });
    });
});





module.exports = router;
