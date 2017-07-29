//Create all the functions that will do the routing for app, and the logic of each route.


var express = require('express');
var path = require('path');
//Import the model (model) to use its database functions.
//-------------

//Export routes to server.js

module.exports = function(app) {
//Create all our routes and set up logic within those routes where required.
app.get('/index', function (req, res) {
	console.log("Route found!");
	res.sendFile(path.join(__dirname, "../public/index-2.html"));
	});

app.get('/postVenue', function (req, res) {
		console.log("Info route found!");
		res.sendFile(path.join(__dirname, "/../public/postVenue.html"));
	});

app.get("/test", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/test.html"));
	});
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/index-2.html"));
	});
// app.post('/info/create', function (req, res) {
// 	console.log("Post route found!");
// 		res.rend('/');
// 	});

}
