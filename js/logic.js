console.log("No button clicked yet");


var celebArr = ["Emma Watson", "Ariana Grande", " Chrissy Teigan", "Emma Stone","Ryan Gosling","Daniel Radcliffe","Ellen Degeneres","Simon Cowell"];
for(var i = 0; i < celebArr.length; i++)
{
    $("#button-div").append("<button type='button' onclick=(\"" + celebArr[i] + "\")' class='btn btn-primary' value=' " + celebArr[i] + "'> " + celebArr[i] + " </button>");

}

$("button").on("click", function() {
    $("#giphy-div").empty();

    console.log("Button clicked");
    // Grabbing and storing the data-animal property value from the button
    var celeb = $(this).text();


    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      celeb + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var celebDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);
          //var p = $("<button>").text("Hello");


          // Creating and storing an image tag
          var celebImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          celebImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          celebDiv.append(p);
          celebDiv.append(celebImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#giphy-div").prepend(celebDiv);
        }
      });
  });

  $("#add-button").on("click", function(event) {
      console.log("Submit has been pressed");
        var buttontxt = add-more.val().trim();
        console.log(buttontxt);
        var newsubmit = $("<button>").text(buttontxt);
        
  }); 