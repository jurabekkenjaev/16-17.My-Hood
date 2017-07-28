// ******************************** DEPENDENCIES ****************************
//---------------------------------------------------------------------------
var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    path = require("path"),
    mysql = require("mysql");

// ******************************** EXPRESS SET-UP **************************
//---------------------------------------------------------------------------
var app = express();

var PORT = process.env.PORT || 3333;

// * SETS UP THE EXPRESS APP TO HANDLE DATA PARSING**************************
//---------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, './public')))

// ******************************** ROUTES **********************************
//---------------------------------------------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});