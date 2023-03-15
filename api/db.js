'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "Anhkk123",
  database: process.env.DB_NAME || "testdemo"
});

module.exports = db


// CREATE TABLE testdemo.products (
//   id int NOT NULL AUTO_INCREMENT,
//   name varchar(255) DEFAULT NULL,
//   color varchar(255) DEFAULT NULL,
//   price decimal(10, 0) DEFAULT NULL,
//   PRIMARY KEY (id)
// )
// ENGINE = INNODB,
// AUTO_INCREMENT = 4,
// AVG_ROW_LENGTH = 8192,
// CHARACTER SET latin1,
// COLLATE latin1_swedish_ci;