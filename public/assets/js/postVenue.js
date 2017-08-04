

alert("Connection test");

//When user click submit button
$("#postBtn").on("click", function(e) {
	e.preventDefault();

	//Make a whereToGo object
	var category = $("#quest-4");

	var whatToPost = {
		fullName		: $("#fullName").val().trim(),
		location		: $("#location").val().trim(),
		venueName		: $("#venueName").val().trim(),
		chosenCategory	: category.options[category.selectedIndex].innerHTML,
		createAt		: $("#----")

	}

	console.log(whatToPost);

	//Send an ajax POST request with jQuery
	$.post("/api/postVenue", whatToPost)
	//On success, run the follwing code
	.done(function() {
		var newDiv = $("<div>");
		newDiv.addClass("wheat-to-post");
		newDiv.append("<p>" + whatToPost.fullName + "</p>");
		newDiv.append("<p>" + whatToPost.location + "</p>");
		newDiv.append("<p>" + whatToPost.venueName + "</p>");
		newDiv.append("<p>" + whatToPost.chosenCategory + "<p>");
		newDiv.append("<p>" + whatToPost.postText + "<p>");

		$("#postDiv").prepend(newDiv);
	})
	//Empty each input box by the value with an empty string
	$("#fullName").val("");
	$("#location").val("");
	$("#venueName").val("");
	$("#quest-4").val("");
	$("#--").val("");
});