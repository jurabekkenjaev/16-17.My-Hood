var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// LIKE keyword allows us to search row for all words that match
// use jquery selector to grab the userInput in a variable, you must have both that variable and the orm required in the file where you want to use the database info
// orm.selectName(userInput).val()

var orm = {
  selectEmail: function(userInput) {
    var queryString = "SELECT * FROM information WHERE email LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
  selectName: function(userInput) {
    var queryString = "SELECT * FROM information WHERE name LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
  selectLocation: function(userInput) {
    var queryString = "SELECT * FROM information WHERE location LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
  selectVenue: function(userInput) {
    var queryString = "SELECT * FROM information WHERE venue LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
  selectVlocation: function(userInput) {
    var queryString = "SELECT * FROM information WHERE vlocation LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
  selectDescription: function(userInput) {
    var queryString = "SELECT * FROM information WHERE description LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
  selectPicture: function(userInput) {
    var queryString = "SELECT * FROM information WHERE picture LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
  selectVote: function(userInput) {
    var queryString = "SELECT * FROM information WHERE vote LIKE ?";
    connection.query(queryString, [userInput], function(err, result) {
      console.log(result);
    });
  },
};

module.exports = orm;