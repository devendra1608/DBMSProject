const mysql = require('mysql');
// require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hemangmishra',
  database: 'dbms_project',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;