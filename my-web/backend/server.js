const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'react_website'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Get Banner Data
app.get('/api/banner', (req, res) => {
    db.query('SELECT * FROM banners WHERE id = 1', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        res.json(result[0]);
      }
    });
  });
  
  // Update Banner Data
  app.post('/api/banner', (req, res) => {
    const { description, link, timer, showBanner } = req.body;
    const query = `
      UPDATE banners 
      SET description = ?, link = ?, timer = ?, showBanner = ?
      WHERE id = 1
    `;
    db.query(query, [description, link, timer, showBanner], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        res.send('Banner updated');
      }
    });
  });
  