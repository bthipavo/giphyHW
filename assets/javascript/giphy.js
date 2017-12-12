
$(document).ready(function() {
	
	$('#addAnimal').on('click', animalFunctions.moreAnimal);
	$('#animal-input').bind('keyup', function (e) {
		 var key = e.which;
		 if(key == 13)  // the enter key code
		  {
		    $('#addAnimal').click(); 
		  }
		});  
	// $('.animals').on('click', animalFunctions.printAnimal);
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
			animalDiv.attr('id', animalArray[i]);
			animalDiv.text(animalArray[i]);
			animalDiv.on('click', animalFunctions.printAnimal);
			animalButtons.append(animalDiv);

		}
		$("#animalButtons").append(animalButtons);
		
	// $('#addAnimal').on('click', animalFunctions.moreAnimal);
	console.log(counter);
	},

	moreAnimal: function() {
		animalArray.push($('#animal-input').val().trim());
		console.log($('#animal-input').val());
		console.log(animalArray);
		console.log("test");
		animalFunctions.createButtons();
		$('#animal-input').val("");
	},

	printAnimal: function() {
		console.log("animal name " + this.id);
		var animal = this.id;

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";
		$.ajax({
		url: queryURL,
		method: "GET"
		})
		//function - after the info is pulled from API, it will run this function
		.done(function(response) {
			console.log(response);
			var results = response.data;
			for (var i = 0; i < results.length; i++) {

			// Creating and storing a div tag
				var animalDiv = $("<div>");

				// Creating a paragraph tag with the result item's rating
				var p = $("<p>").text("Rating: " + results[i].rating);

				// Creating and storing an image tag
				var animalImage = $("<img>");
				// Setting the src attribute of the image to a property pulled off the result item
				animalImage.attr("src", results[i].images.fixed_height_still.url);
				animalImage.attr("data-state", "still");
				animalImage.attr("data-still", results[i].images.fixed_height_still.url);
				animalImage.attr("data-animate", results[i].images.fixed_height.url )
				animalImage.on('click', animalFunctions.animateAnimal);

				// Appending the paragraph and image tag to the animalDiv
				animalDiv.append(p);
				animalDiv.append(animalImage);

				// Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
				$("#results").prepend(animalDiv);
			}


		});
	},

	animateAnimal: function() {
		console.log('running animals');
		var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      	if (state === "still") {
	        $(this).attr("src", $(this).attr("data-animate"));
	        $(this).attr("data-state", "animate");
      } else {
	        $(this).attr("src", $(this).attr("data-still"));
	        $(this).attr("data-state", "still");
      }

	}
};

