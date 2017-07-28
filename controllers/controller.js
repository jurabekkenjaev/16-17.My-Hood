//Create all the functions that will do the routing for app, and the logic of each route.

var express = require('express');

//Import the model (model) to use its database functions.
//-------------

//Export routes to server.js

module.exports = function(app) {
//Create all our routes and set up logic within those routes where required.
app.get('/', function (req, res) {
	console.log("Route found!");
	res.send("Test Successful!!");
});

app.get('/info/:name', function (req, res) {
		console.log("Info route found!");
		res.send('User requested route found: ' + req.params.name);
	});

app.post('/info/create', function (req, res) {
	console.log("Post route found!");
		res.rend('/');
	});

}
