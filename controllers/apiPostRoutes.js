// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
var db = require("../models");
//var path = require("path");

//api routes --------------
module.exports = function(app) {

//GET route for getting all the posts
app.get('/api/postVenues', function (req, res) {
	console.log("Route found!");
	var query = {};
	if (req.query.user_id) {
		query.UserId = req.query.user_id;
	}

	db.Information.findAll({
		where: query
	}).then(function(informationInDb) {
		res.json(informationInDb);
	});
});

//GET route for retriving a single post
app.get("/api/postVenues/:id", function(req, res) {
	db.Information.findOne({
		where: {
			id: req.params.id
		}
	}).then(function(foundOne) {
			res.json(foundOne);
	});
});



// POST route for saving a new post
  app.post("/api/postVenues", function(req, res) {
    db.Information.create(req.body).then(function(informationInDb) {
      res.json(informationInDb);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/postVenues/:id", function(req, res) {
    db.Information.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(informationInDb) {
      res.json(informationInDb);
    });
  });

  // PUT route for updating posts
  app.put("/api/postVenues", function(req, res) {
    db.Information.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(informationInDb) {
        res.json(informationInDb);
      });
  });
};
