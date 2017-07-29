var info = {
	"information": [
	{
		"name":"Nurul",
		"location": "New York",
		"description": "World no.1 city"
	},
	{
		"name":"Alam",
		"location": "New Jersey",
		"description": "Historical citsy"
	}
]}

$(document).ready(function() {
	var source = $("#info-template").html();
	var template = Handlebars.compile(source);
	console.log(template(info.information[1]));
	$(".info-list-container").html(template(info));
});