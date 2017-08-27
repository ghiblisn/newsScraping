// Grab the articles as a json
$.get("/scrape", function(data) {
  $.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<p id ='articlesPost' data-id='" + data[i]._id + "'>" + data[i].title + "<button data-id='" + data[i]._id + "' data-title='" + data[i].title + "'data-link='" + data[i].link + "' id='saveArticles' style='position: relative;right: -20px;'>Save</button><br />" + data[i].link + "</p>");

    }
  });
})
// .done(function(data){
//   $.getJSON("/articles", function(data) {
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//       // Display the apropos information on the page
//       $("#articles").append("<p id ='articlesPost' data-id='" + data[i]._id + "'>" + data[i].title + "<button data-id='" + data[i]._id + "' data-title='" + data[i].title + "'data-link='" + data[i].link + "' id='saveArticles' style='position: relative;right: -20px;'>Save</button><br />" + data[i].link + "</p>");

//     }
//   });

// });

// $.getJSON("/articles", function(data) {
//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     // Display the apropos information on the page
//     $("#articles").append("<p id ='articlesPost' data-id='" + data[i]._id + "'>" + data[i].title + "<button data-id='" + data[i]._id + "' data-title='" + data[i].title + "'data-link='" + data[i].link + "' id='saveArticles' style='position: relative;right: -20px;'>Save</button><br />" + data[i].link + "</p>");

//   }
// });

$.getJSON("/savedArticles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#savedArticles").append("<p id ='savedArticlesPost' data-id='" + data[i]._id + "'>" + data[i].title + "<button data-id='" + data[i]._id + "' data-title='" + data[i].title + "'data-link='" + data[i].link + "' id='removeArticles' style='position: relative;right: -20px;'>Remove</button><br />" + data[i].link + "</p>");
  }
});

$(document).on("click", "#savedArticlesPost", function() {
  // Empty the notes from the note section
  $("#notes").empty();
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/savedArticles/" + thisId
  })
    // With that done, add the note information to the page
    .done(function(data) {
      console.log(data);
      // The title of the article
      $("#notes").append("<h4>" + data.title + "</h4>");
      // An input to enter a new title
      $("#notes").append("<input id='titleinput' name='title' >");
      // A textarea to add a new note body
      $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new note, with the id of the article saved to it
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      // If there's a note in the article
      if (data.note) {
        // Place the title of the note in the title input
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body);
      }
    });
});


// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/notes/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      // $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  // $("#titleinput").val("");
  // $("#bodyinput").val("");
});

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
