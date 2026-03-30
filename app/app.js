const express = require('express');
const getDB = require('./db');
const path = require('path');

const app = express();

// ✅ FIX 1: Use built-in JSON parser
app.use(express.json());

// serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ➕ Book Desk
app.post('/book', (req, res) => {
  console.log("Body:", req.body); // ✅ DEBUG

  const { username, desk, slot } = req.body;

  if (!username || !desk || !slot) {
    return res.status(400).send("Missing data");
  }

  // ✅ FIX 2: use getDB()
  getDB().query(
    'INSERT INTO bookings (username, desk, slot) VALUES (?, ?, ?)',
    [username, desk, slot],
    (err) => {
      if (err) {
        console.log("Insert Error:", err);
        return res.status(500).send(err);
      }

      console.log("Data Inserted ✅");
      res.send('Booking saved');
    }
  );
});

// 📖 Get Bookings
app.get('/bookings', (req, res) => {
  getDB().query('SELECT * FROM bookings ORDER BY id DESC', (err, results) => {
    if (err) {
      console.log("Fetch Error:", err);
      return res.status(500).send(err);
    }

    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});