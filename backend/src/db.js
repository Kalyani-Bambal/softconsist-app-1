const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "softconsist"
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;

