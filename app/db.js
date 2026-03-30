const mysql = require('mysql2');

let db;

function connectDB() {
  db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });

  db.connect((err) => {
    if (err) {
      console.log('Waiting for MySQL...');
      setTimeout(connectDB, 3000);
    } else {
      console.log('MySQL Connected');

      db.query(
        'CREATE TABLE IF NOT EXISTS bookings (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(100), desk VARCHAR(50), slot VARCHAR(50), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
      );
    }
  });
}

connectDB();

module.exports = () => db;