
$(document).ready(function() {
	
	$('#addAnimal').on('click', function() {
		animalFunctions.moreAnimal();
	});

	animalFunctions.createButtons();
});

// $('#addAnimal').on('click', this.moreAnimal);
var animalArray = [];
var counter = 0;

var animalFunctions = {
	createButtons: function() {
		counter++;
		console.log("creating animals");
		$("#animalButtons").empty();
		var animalButtons = $("<div>");
		for (var i = 0; i<animalArray.length; i++) {
			var animalDiv = $("<button>");
			animalDiv.text(animalArray[i]);
			animalButtons.append(animalDiv);

		}
		$("#animalButtons").append(animalButtons);
		
	// $('#addAnimal').on('click', animalFunctions.moreAnimal);
	console.log(counter);
	},

	moreAnimal: function() {
		animalArray.push($('#animal-input').val());
		console.log($('#animal-input').val());
		console.log(animalArray);
		console.log("test");
		animalFunctions.createButtons();
	}

	// printAnimal: function() {
	// 	var animal = "dog";

	// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
 //        animal + "&api_key=dc6zaTOxFJmzC&limit=10";
	// 	$.ajax({
	// 	url: queryURL,
	// 	method: "GET"
	// 	})
	// 	//function - after the info is pulled from API, it will run this function
	// 	.done(function(response) {
	// 		console.log(response);
	// 	});
	// }
};

