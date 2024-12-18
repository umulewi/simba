const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');



const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Static file serving
app.use('/uploads/landing', express.static(path.join(__dirname, 'uploads/landing')));

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simba'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// Create base upload directory
const baseUploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(baseUploadDir)) {
    fs.mkdirSync(baseUploadDir);
}

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(baseUploadDir, 'landing');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const cleanFileName = file.originalname.replace(/\s+/g, '-');
        cb(null, uniqueSuffix + '-' + cleanFileName);
    }
});

const upload = multer({ storage: storage });

// Add Landing Page Route
app.post('/upload/landing', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const imageName = req.file ? req.file.filename : null;

    if (!title || !description || !imageName) {
        return res.status(400).json({ message: 'All fields are required, including the image' });
    }

    const query = 'INSERT INTO landing_page (title, description, image) VALUES (?, ?, ?)';
    db.query(query, [title, description, imageName], (err) => {
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).json({ message: 'Error saving data' });
        }
        res.json({ 
            message: 'Landing page added successfully', 
            imagePath: `/uploads/landing/${imageName}` 
        });
    });
});

// Fetch Landing Pages Route
app.get('/select_landing', (req, res) => {
    const query = 'SELECT * FROM landing_page';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});

//delete landing delete_landing
app.delete('/delete_landing/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM landing_page WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    });
});



app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const query = 'UPDATE  landing_page SET image = ?, title = ?, description = ? WHERE id = ?';
    db.query(query, [name, email, phone, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    });
});


// Login Route (Existing Implementation)
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ message: 'Server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ message: 'Server error' });
            }

            if (!match) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', {
                expiresIn: '1h',
            });

            res.json({ message: 'Login successful', token });
        });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
