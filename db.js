const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the database connection
pool.getConnection()
  .then(() => {
    console.log('Connected to MySQL database successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MySQL database:', error.message);
  });

module.exports = pool;
