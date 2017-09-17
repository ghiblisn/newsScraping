// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (location) => {

    console.log(location);

    // Figure out the geolocation
    const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  },

  getNews:() => {
    // axios.get("/scrape").then((response) =>{
    // var result ="";
      return (axios.get("/articles"))
    //   .then((response) =>{
    //     var data = response.data
    //     // For each one
    //     for (var i = 0; i < data.length; i++) {
    //       // Display the apropos information on the page
    //       result+="<p id ='articlesPost' data-id='" + data[i]._id + "'>" + data[i].title + "<button data-id='" + data[i]._id + "' data-title='" + data[i].title + "'data-link='" + data[i].link + "' id='saveArticles' style='position: relative;right: -20px;'>Save</button><br />" + data[i].link + "</p>";
    //     }
    //     console.log(result);
    //     return result;
    //   }))
    // })
  },

  getSavedNews:() => {
  // axios.get("/savedArticles", function(data) {
  //     var result ="";
  //     // For each one
  //     for (var i = 0; i < data.length; i++) {
  //       // Display the apropos information on the page
  //       result.append("<p id ='savedArticlesPost' data-id='" + data[i]._id + "'>" + data[i].title + "<button data-id='" + data[i]._id + "' data-title='" + data[i].title + "'data-link='" + data[i].link + "' id='removeArticles' style='position: relative;right: -20px;'>Remove</button><br />" + data[i].link + "</p>");
  //     }
  //     return result;
  //   });
    return(axios.get("/savedArticles"))
  }



};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
