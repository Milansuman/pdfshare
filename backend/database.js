const mysql = require("mysql2/promise");
const process = require("process");

const pool = mysql.createPool({
	host: "localhost",
	user: process.env.DB_USER,
	database: "pdfshare",
	password: process.env.DB_PASS
});

module.exports = pool;
