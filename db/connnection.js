// const util = require("util");
// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   // Your username
//   port: 3306,
//   user: "root",
//   // Your password
//   password: "root",
//   database: "employees"
// });

// connection.connect();

// // Setting up connection.query to use promises instead of callbacks
// // This allows us to use the async/await syntax
// connection.query = util.promisify(connection.query);

// module.exports = connection;

const util = require('util')
const mysql = require('mysql')


require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: 'employees',
})
connection.connect()
connection.query = util.promisify(connection.query)
module.exports = connection;