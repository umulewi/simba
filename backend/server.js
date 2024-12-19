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
app.use('/uploads/about', express.static(path.join(__dirname, 'uploads/about')));
app.use('/uploads/team', express.static(path.join(__dirname, 'uploads/team')));
app.use('/uploads/product', express.static(path.join(__dirname, 'uploads/product')));

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
//
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadDir;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
            //add landing
        if (req.originalUrl.includes('/upload/landing')) {   
            uploadDir = path.join(baseUploadDir, 'landing');   
        } 
        //update landing
        else if (req.originalUrl.includes('/update_landing')) {
            uploadDir = path.join(baseUploadDir, 'landing');
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
        //add about us
        else if (req.originalUrl.includes('/upload/about')) {
            uploadDir = path.join(baseUploadDir, 'about');
        }    
        //update about
        else if (req.originalUrl.includes('/update_about')) {
            uploadDir = path.join(baseUploadDir, 'about');
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
        //add team
        else if (req.originalUrl.includes('/upload/team')) {   
            uploadDir = path.join(baseUploadDir, 'team');   
        } 
        //update team
        else if (req.originalUrl.includes('/update_team')) {   
            uploadDir = path.join(baseUploadDir, 'team');   
        } 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
      else if (req.originalUrl.includes('/upload/product')) {   
        uploadDir = path.join(baseUploadDir, 'product');   
    } 
    //update
    else if (req.originalUrl.includes('/update_product')) {   
        uploadDir = path.join(baseUploadDir, 'product');   
    } 

//////////////////////////////////////////////////////////////////////////////////////////////////////////
        else {
            // Default directory if necessary
            uploadDir = path.join(baseUploadDir, 'default');
        }

        // Ensure the directory exists
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LANDING PAGE APIS

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


/// update landing page
app.put('/update_landing/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    let imageName = req.file ? req.file.filename : null;

    // Only update image if new image is uploaded, otherwise use current image.
    const query = 'SELECT image FROM landing_page WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        
        const currentImage = result[0]?.image;
        if (!imageName) {
            imageName = currentImage; // Keep the old image if no new one is uploaded
        }

        const updateQuery = 'UPDATE landing_page SET title = ?, description = ?, image = ? WHERE id = ?';
        db.query(updateQuery, [title, description, imageName, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating data' });
            res.json({ message: 'Landing page updated successfully', imagePath: `/uploads/landing/${imageName}` });
        });
    });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ABOUT US APIS
// insert about us content
app.post('/upload/about', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const imageName = req.file ? req.file.filename : null;

    if (!imageName || !description ) {
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

// select landing page
app.get('/select_about', (req, res) => {
    const query = 'SELECT * FROM about_us';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});

//delete about us page
app.delete('/delete_about/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM about_us WHERE id = ?';
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

//update about_us page
app.put('/update_about/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    let imageName = req.file ? req.file.filename : null;
    // Only update image if new image is uploaded, otherwise use current image.
    const query = 'SELECT image FROM about_us WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        
        const currentImage = result[0]?.image;
        if (!imageName) {
            imageName = currentImage; // Keep the old image if no new one is uploaded
        }
        const updateQuery = 'UPDATE about_us SET image = ?, description = ? WHERE id = ?';
        db.query(updateQuery, [imageName,description, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating data' });
            res.json({ message: 'about us page updated successfully', imagePath: `/uploads/about/${imageName}` });
        });
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//add team page
app.post('/upload/team', upload.single('image'), (req, res) => {
    const { name, position } = req.body;
    const imageName = req.file ? req.file.filename : null;

    // Validate input
    if (!name || !position || !imageName) {
        return res.status(400).json({ message: 'All fields are required, including the image' });
    }

    // Insert into the database
    const query = 'INSERT INTO team (name, position, image) VALUES (?, ?, ?)';
    db.query(query, [name, position, imageName], (err) => {
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).json({ message: 'Error saving data' });
        }
        res.json({ 
            message: 'Team member added successfully', 
            imagePath: `/uploads/team/${imageName}` 
        });
    });
});

// Fetch team page Route
app.get('/select_team', (req, res) => {
    const query = 'SELECT * FROM team';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});

//delete team
app.delete("/delete_team/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM team WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "Team member deleted successfully!" });
    });
  });


//update team

app.put('/update_team/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { name, position } = req.body;
    let imageName = req.file ? req.file.filename : null;
    // Only update image if new image is uploaded, otherwise use current image.
    const query = 'SELECT image FROM team WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        const currentImage = result[0]?.image;
        if (!imageName) {
            imageName = currentImage; // Keep the old image if no new one is uploaded
        }
        const updateQuery = 'UPDATE team SET name = ?, position = ?, image = ? WHERE id = ?';
        db.query(updateQuery, [name, position, imageName, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating data' });
            res.json({ message: 'team page updated successfully', imagePath: `/uploads/team/${imageName}` });
        });
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PRODUCT ROUTES

//add  new producr
app.post('/upload/product', upload.single('image'), (req, res) => {
    const { name, description } = req.body;
    const imageName = req.file ? req.file.filename : null;
    if (!name || !description || !imageName) {
        return res.status(400).json({ message: 'All fields are required, including the image' });
    }
    const query = 'INSERT INTO product (name, description, image) VALUES (?, ?, ?)';
    db.query(query, [name, description, imageName], (err) => {
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).json({ message: 'Error saving data' });
        }
        res.json({ 
            message: 'New product added successfully', 
            imagePath: `/uploads/product/${imageName}` 
        });
    });
});

//fetch product
app.get('/select_product', (req, res) => {
    const query = 'SELECT * FROM product';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});



// delete product
app.delete("/delete_product/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM product WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "Team member deleted successfully!" });
    });
  });

//update
app.put('/update_product/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    let imageName = req.file ? req.file.filename : null;
    // Only update image if new image is uploaded, otherwise use current image.
    const query = 'SELECT image FROM product WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        const currentImage = result[0]?.image;
        if (!imageName) {
            imageName = currentImage; // Keep the old image if no new one is uploaded
        }
        const updateQuery = 'UPDATE product SET name = ?, description = ?, image = ? WHERE id = ?';
        db.query(updateQuery, [name, description, imageName, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating data' });
            res.json({ message: 'product updated successfully', imagePath: `/uploads/product/${imageName}` });
        });
    });
});






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
