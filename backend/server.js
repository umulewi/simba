const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require("nodemailer");



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
app.use('/uploads/outlet', express.static(path.join(__dirname, 'uploads/outlet')));
app.use('/uploads/testimonial', express.static(path.join(__dirname, 'uploads/testimonial')));

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

const transporter = nodemailer.createTransport({
    host: 'mail.sansongrp.com', 
    port: 465, 
    secure: true, 
    auth: {
        user: 'admin@sansongrp.com', 
        pass: 'Administrator-2023'       
    }
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
        //add product
        else if (req.originalUrl.includes('/upload/product')) {   
        uploadDir = path.join(baseUploadDir, 'product');   
        } 
        //update product
        else if (req.originalUrl.includes('/update_product')) {   
        uploadDir = path.join(baseUploadDir, 'product');   
        } 
//////////////////////////////////////////////////////////////////////////////////////////////////////////
        //add outlet
        else if (req.originalUrl.includes('/upload/outlet')) {   
        uploadDir = path.join(baseUploadDir, 'outlet');   
        } 
        //update
        else if (req.originalUrl.includes('/update_outlet')) {   
        uploadDir = path.join(baseUploadDir, 'outlet');   
       } 
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//testimonial
      else if (req.originalUrl.includes('/upload/testimonial')) {   
       uploadDir = path.join(baseUploadDir, 'testimonial');   
       } 
    //update
      else if (req.originalUrl.includes('/update_testimonial')) {   
      uploadDir = path.join(baseUploadDir, 'testimonial');   
      } 

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////blogs 
      else if (req.originalUrl.includes('/upload/blog')) {   
        uploadDir = path.join(baseUploadDir, 'blog');   
        } 
     //update
       else if (req.originalUrl.includes('/update_blog')) {   
       uploadDir = path.join(baseUploadDir, 'blog');   
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PRODUCT ROUTES

//add  new producr
app.post('/upload/product', upload.single('image'), (req, res) => {
    const { name, description, category, isNew } = req.body; // Ensure these are extracted
    const imageName = req.file ? req.file.filename : null;

    if (!name || !description || !imageName || !category || !isNew) {
        return res.status(400).json({ message: 'All fields are required, including the image' });
    }

    const query = 'INSERT INTO product (name, description, image, category, isNew) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, description, imageName, category, isNew], (err) => {
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
    const { name, description, category, isNew } = req.body;
    let imageName = req.file ? req.file.filename : null; // Image file name, if uploaded

    // Fetch the current image from the database
    const query = 'SELECT image FROM product WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });

        const currentImage = result[0]?.image; // Existing image in the database

        // If no new image is uploaded, use the current image
        if (!imageName) {
            imageName = currentImage;
        }

        // Update query to modify product details
        const updateQuery = `
            UPDATE product 
            SET name = ?, description = ?, image = ?, category = ?, isNew = ? 
            WHERE id = ?;
        `;
        db.query(updateQuery, [name, description, imageName, category, isNew, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating data' });

            // Return success response
            res.json({
                message: 'Product updated successfully',
                imagePath: `/uploads/product/${imageName}` // Path to the updated image
            });
        });
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OUTLETS APIS

/// add new outlets

// app.post('/upload/outlet', upload.single('image'), (req, res) => {
//     const { name, description,working_days,working_hours,telephone } = req.body;
//     const imageName = req.file ? req.file.filename : null;
//     if (!name || !description || !working_days || !working_hours || !telephone || !imageName) {
//         return res.status(400).json({ message: 'All fields are required, including the image' });
//     }
//     const query = 'INSERT INTO outlets (name, description,working_days,working_hours,telephone, image) VALUES (?, ?, ?, ?, ?, ?)';
//     db.query(query, [name,description,working_days,working_hours,telephone,imageName], (err) => {
//         if (err) {
//             console.error('Error inserting into database:', err);
//             return res.status(500).json({ message: 'Error saving data' });
//         }
//         res.json({ 
//             message: 'New product added successfully', 
//             imagePath: `/uploads/outlet/${imageName}` 
//         });
//     });
// });

app.post('/upload/outlet', upload.single('image'), (req, res) => {
    const { name, description, working_hours, working_days, telephone } = req.body;
    const image = req.file ? req.file.filename : null;
    if (!name || !description || !working_hours || !working_days || !telephone || !image) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const query = `INSERT INTO outlets (name, description, working_hours, working_days, telephone, image)
                   VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [name, description, working_hours, working_days, telephone, image], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to save outlet.' });
      }
      res.status(200).json({ message: 'Outlet saved successfully!' });
    });
  });
  
  // Serve static files (for images)
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


  ///select
  app.get('/select_outlet', (req, res) => {
    const query = 'SELECT * FROM outlets';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});


///delete 

app.delete("/delete_outlet/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM outlets WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "Outlet content deleted successfully!" });
    });
  });

//update
app.put('/update_outlet/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { name, description,working_days,working_hours,telephone } = req.body;
    let imageName = req.file ? req.file.filename : null;
    
    const query = 'SELECT image FROM outlets WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        const currentImage = result[0]?.image;
        if (!imageName) {
            imageName = currentImage; 
        }
        const updateQuery = 'UPDATE outlets SET name = ?, description = ?, working_days = ?,working_hours = ?,telephone = ?, image = ? WHERE id = ?';
        db.query(updateQuery, [name, description,working_days,working_hours,telephone, imageName, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating data' });
            res.json({ message: 'outlet content updated successfully', imagePath: `/uploads/outlet/${imageName}` });
        });
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TESTIMONIAL APIS

///insert  testimonial

  app.post('/upload/testimonial', upload.single('image'), (req, res) => {
    const { name, position, description, topic } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !position || !topic || !description || !image) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = `INSERT INTO testimonials (name, position, topic, description, image) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [name, position, topic, description, image], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Failed to save testimonial.' });
        }
        res.status(200).json({ message: 'Testimonial saved successfully!' });
    });
});


    ///select
    app.get('/select_testimonial', (req, res) => {
        const query = 'SELECT * FROM testimonials';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching data from database:', err);
                return res.status(500).json({ message: 'Database error' });
            }
            res.json(results);
        });
    });
  

    //delete
    app.delete("/delete_testimonial/:id", (req, res) => {
        const { id } = req.params;
        const query = "DELETE FROM testimonials WHERE id = ?";
        db.query(query, [id], (err, result) => {
          if (err) {
            console.error("Error deleting data:", err);
            return res.status(500).json({ message: "Database error" });
          }
          res.json({ message: "testimonial content deleted successfully!" });
        });
      });

//update
app.put('/update_testimonial/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { name, position, description, topic } = req.body;
    let imageName = req.file ? req.file.filename : null;

    // Get current image from the database
    const query = 'SELECT image FROM testimonials WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });

        const currentImage = result[0]?.image;
        if (!imageName) {
            imageName = currentImage; // Retain current image if no new image uploaded
        }

        // Update the testimonial
        const updateQuery = 'UPDATE testimonials SET name = ?, position = ?, topic = ?, description = ?, image = ? WHERE id = ?';
        db.query(updateQuery, [name, position, topic, description, imageName, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating data' });

            res.json({ 
                message: 'Testimonial updated successfully', 
                imagePath: `/uploads/testimonial/${imageName}` 
            });
        });
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// BLOGS APIS

//update
app.post('/upload/blog', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 }
  ]), (req, res) => {
    console.log('Request body:', req.body);
    console.log('Uploaded files:', req.files);
  
    const { name, category, lead_paragraph, content_image1, content_image2, content_image3, closing_paragraph } = req.body;
  
    const image1 = req.files['image1'] ? req.files['image1'][0].filename : null;
    const image2 = req.files['image2'] ? req.files['image2'][0].filename : null;
    const image3 = req.files['image3'] ? req.files['image3'][0].filename : null;
  
    if (!name || !category || !lead_paragraph || !content_image1 || !content_image2 || !content_image3 || !closing_paragraph || !image1 || !image2 || !image3) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const query = `INSERT INTO blogs (name, category, lead_paragraph, content_image1, content_image2, content_image3, closing_paragraph, image1, image2, image3)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(query, [name, category, lead_paragraph, content_image1, content_image2, content_image3, closing_paragraph, image1, image2, image3], (err, result) => {
      if (err) {
        // Log the database error and send a response to the client
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Faileddddd to save blog content.', error: err.message });
      }
      // Success response
      res.status(200).json({ message: 'Blog saved successfully!' });
    });
  });

//////
app.get('/select_blog', (req, res) => {
    const query = 'SELECT * FROM blogs';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});

app.get('/select_blog/:id', (req, res) => {
    const blogId = req.params.id;

    if (isNaN(blogId)) {
        return res.status(400).json({ message: 'Invalid blog ID' });
    }

    const query = 'SELECT * FROM blogs WHERE id = ?';
    const queryParams = [blogId];

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(results[0]); // Return the single blog
    });
});

 //delete
 app.delete("/delete_blog/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM blogs WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "testimonial content deleted successfully!" });
    });
  });


  //update
  app.put('/update_blog/:id', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
  ]), (req, res) => {
    const blogId = req.params.id;
    const { name, category, lead_paragraph, content_image1, content_image2, content_image3, closing_paragraph } = req.body;
  
    const image1 = req.files['image1'] ? req.files['image1'][0].filename : content_image1;
    const image2 = req.files['image2'] ? req.files['image2'][0].filename : content_image2;
    const image3 = req.files['image3'] ? req.files['image3'][0].filename : content_image3;
  
    const query = `UPDATE blogs SET name = ?, category = ?, lead_paragraph = ?, content_image1 = ?, content_image2 = ?, content_image3 = ?, closing_paragraph = ? WHERE id = ?`;
  
    db.query(query, [name, category, lead_paragraph, image1, image2, image3, closing_paragraph, blogId], (err, result) => {
      if (err) {
        console.error('Error updating blog: ', err);
        return res.status(500).json({ message: 'An error occurred while updating the blog.' });
      }
      res.status(200).json({ message: 'Blog updated successfully.' });
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

//send message 
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Email content
    const mailOptions = {
        from: `"${name}" <${email}>`, 
        to: 'admin@sansongrp.com', 
        subject: subject || 'No Subject',
        text: `Message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
            res.status(500).send({ message: 'Failed to send email.' });
        } else {
            console.log('Email sent successfully:', info.response);
            res.status(200).send({ message: 'Message sent successfully!' });
        }
    });
});


app.post("/change-password", (req, res) => {
    const { current_password, new_password } = req.body;

    // Validate input
    if (!current_password || !new_password) {
        return res.status(400).json({
            success: false,
            message: "Current and new passwords are required.",
        });
    }

    const userId = 1; // Replace this with the actual user ID from your authentication mechanism

    // Get the user's current password hash from the database
    db.query("SELECT password FROM users WHERE id = ?", [userId], async (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({
                success: false,
                message: "An error occurred while accessing the database.",
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        const hashedPassword = results[0].password;

        // Verify the current password
        const isMatch = await bcrypt.compare(current_password, hashedPassword);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Current password is incorrect.",
            });
        }

        // Hash the new password
        const newHashedPassword = await bcrypt.hash(new_password, 10);

        // Update the password in the database
        db.query("UPDATE users SET password = ? WHERE id = ?", [newHashedPassword, userId], (err) => {
            if (err) {
                console.error("Error updating password:", err);
                return res.status(500).json({
                    success: false,
                    message: "Failed to update the password. Please try again later.",
                });
            }

            res.status(200).json({
                success: true,
                message: "Password updated successfully.",
            });
        });
    });
});


app.get("/products/count", (req, res) => {
    const query = "SELECT COUNT(*) AS count FROM product";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ error: "Failed to fetch product count" });
      }
      res.json({ count: result[0].count });
    });
  });


  app.get("/blogs/count", (req, res) => {
    const query = "SELECT COUNT(*) AS count FROM blogs";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ error: "Failed to fetch blog count" });
      }
      res.json({ count: result[0].count });
    });
  });

  app.get("/teams/count", (req, res) => {
    const query = "SELECT COUNT(*) AS count FROM team";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ error: "Failed to fetch team count" });
      }
      res.json({ count: result[0].count });
    });
  });


// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
// app.listen(port, () => {
//     console.log(`https://simba-apis.onrender.com`);
// });

// https://simba-apis.onrender.com

//