// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Include the Main Component
import Main from "./components/Main";

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(<Main />, document.getElementById("app"));

// $(document).on("click", "#savedArticlesPost", function() {
//   // Empty the notes from the note section
//   $("#notes").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/savedArticles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .done(function(data) {
//       console.log(data);
//       // The title of the article
//       $("#notes").append("<h4>" + data.title + "</h4>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });


// When you click the savenote button
// $(document).on("click", "#savenote", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/notes/" + thisId,
//     data: {
//       // Value taken from title input
//       title: $("#titleinput").val(),
//       // Value taken from note textarea
//       body: $("#bodyinput").val()
//     }
//   })
//     // With that done
//     .done(function(data) {
//       // Log the response
//       console.log(data);
//       // Empty the notes section
//       // $("#notes").empty();
//     });

//   // Also, remove the values entered in the input and textarea for note entry
//   // $("#titleinput").val("");
//   // $("#bodyinput").val("");
// });

$(document).on("click", "#saveArticles", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  var thisTitle = $(this).attr("data-title");
  var thisLink = $(this).attr("data-link");


  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/saveArticles/" + thisId,
    data: {
      // Value taken from title input
      title: thisTitle,
      // Value taken from note textarea
      link: thisLink,
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      location.reload();
    });
});

$(document).on("click", "#removeArticles", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  var thisTitle = $(this).attr("data-title");
  var thisLink = $(this).attr("data-link");


  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/removeArticles/" + thisId,
    data: {
      // Value taken from title input
      title: thisTitle,
      // Value taken from note textarea
      link: thisLink,
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      location.reload();
    });
});
