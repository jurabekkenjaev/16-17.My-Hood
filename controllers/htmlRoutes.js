

//This file offers a set of routes for sending users to various html pages.

//Dependencies
var path = require('path');
//-------------

//Routes

module.exports = function(app) {

//index route loads home.html
app.get('/', function (req, res) {
	//console.log("Route found!");
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/index', function (req, res) {
	//console.log("Route found!");
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

//postVenue route loads postVenue.html
app.get('/postVenue', function (req, res) {
		//console.log("Info route found!");
	res.sendFile(path.join(__dirname, "/../public/postVenue.html"));
});

//search route loads search.html
app.get("/search", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/search.html"));
});
}
