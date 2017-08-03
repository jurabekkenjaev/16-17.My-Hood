var db = require("../models");

module.exports = function(app) {
  
  // Find all Users who contributed and return them to the  new user with res.json
  app.get("/api/users", function(req, res) {
    db.Search.findAll({}).then(function(userInDb) {
      res.json(userInDb);
    });
  });

//Find one user in db with the id  (req.params.id)
  app.get("/api/users/:id", function(req, res) {
    db.Search.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(userInDb) {
      res.json(userInDb);
    });
  });

// POST route to create new contributor 
  app.post("/api/users", function(req, res) {
     // Create an user with the data available to us in req.body
    console.log(req.body);
    db.Search.create(req.body).then(function(userInDb) {
      res.json(userInDb);
    });
  });

//DELETE route to delete user
  app.delete("/api/users/:id", function(req, res) {
    // Delete the User with the id available to us in req.params.id
    db.Search.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(userInDb) {
      res.json(userInDb);
    });
  });

};
