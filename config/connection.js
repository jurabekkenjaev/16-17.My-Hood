var mysql = require("mysql");

// Heroku hosted Jaws DB
var connection = mysql.createConnection({
  host: "i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "e9qkycnbin0836a8",
  password: "mxpc6s4b7yfu1o14",
  database: "c48hlfc6dh3pfva"
});

// Connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  start();
});

module.exports = connection;