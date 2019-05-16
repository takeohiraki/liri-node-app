var axios = require("axios");

var apis = {
    bands: function (band) {
        
        // Create variables
        var url = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp"

        // Call API
        axios.get(url).then(
            function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    console.log("Venue Name: " + response.data[i].venue.name 
                    + "\nVenue City: " + response.data[i].venue.city
                    + "\nEvent Time: " + response.data[i].datetime + "\n"); //// need to use moment to format as "MM/DD/YYYY"
                }
            }
        );
    },
    songs: function (song) {

        // Create variables and requirements for calling the API with logic for handling no user input
        require("dotenv").config();
        var keys = require("./keys.js")
        var Spotify = require("node-spotify-api");
        var spotify = new Spotify({
            id: keys.spotify.id,
            secret: keys.spotify.secret
        });
        var url = 'https://api.spotify.com/v1/search?q=track:' + (song  || 'The Sign Ace of Base') + '&type=track&limit=10'

        // Call API
        spotify
            .request(url)
            .then(function(data) {
                console.log("Artist name: " + data.tracks.items[0].artists[0].name
                + "\nSong name: " + data.tracks.items[0].name
                + "\nPreview: " + data.tracks.items[0].preview_url
                + "\nAlbum name: " + data.tracks.items[0].album.name);
            })
            .catch(function(err){
                console.error('Error occurred: ' + err)
            });
    },
    movies: function (movie) {

        // Create variables with logic for handling no user input
        var url = "http://www.omdbapi.com/?t=" + (movie || "Mr. Nobody") + "&y=&plot=short&apikey=trilogy"

        // Call API
        axios.get(url).then(
            function(response) {
                    console.log("Title: " + response.data.Title
                    + "\nYear: " + response.data.Year
                    + "\nRating: " + response.data.Ratings.Source  /////////////
                    + "\nRotten Tomatoes Rating: " + response.data.Ratings[2]   //////
                    + "\nCountry Produced: " + response.data.country
                    + "\nLanguage: " + response.data.Language
                    + "\nPlot: " + response.data.Plot
                    + "\nActors: " + response.data.Actors
                    + "\n"); 
            }
        );
    }
}

// Export object with API calls
module.exports = apis;