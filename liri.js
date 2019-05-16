

require("dotenv").config();
var keys = require("./keys.js")
var inquirer = require("inquirer")
var apis = require("./api.js")
var fs = require("fs");


//console.log(spotify)

inquirer.prompt([
    {
        type: "list",
        message: "Select a command",
        choices: ['concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'],
        name: "command"
    }
]).then(function(response){
    userPick(response);
});


var userPick = function(response) {
    
    switch(response.command){
        case 'concert-this':
            console.log('running: convert-this');
            inquirer.prompt([
                {
                    message: "Which band do you want to search? ",
                    name: "band"
                }
            ]).then(function(response){
                apis.bands(response.band);
            })
            break;
        case 'spotify-this-song':
            console.log('running: spotify-this-song');
            inquirer.prompt([
                {
                    message: "Which song do you want to search? ",
                    name: "song"
                }
            ]).then(function(response){
                apis.songs(response.song);
            })
            break;
        case 'movie-this':
            console.log('running: movie-this');
            inquirer.prompt([
                {
                    message: "Which movie do you want to search? ",
                    name: "movie"
                }
            ]).then(function(response){
                apis.movies(response.movie);
            })
            break;
        case 'do-what-it-says':
            console.log('running: do-what-it-says');
            fs.readFile("random.txt", "utf8", function(error, data) {

                // log error
                if (error) {
                    return console.log(error);
                }
                
                // Then split it by commas (to make it more readable)
                var dataArr = data.split(",");
                
                // We will then re-display the content as an array for later use.
                // console.log(dataArr[0]);
                // console.log(dataArr[1]);

                switch(dataArr[0]){
                    case 'concert-this':
                        console.log('running: convert-this');
                        apis.bands(dataArr[1])
                        break;
                    case 'spotify-this-song':
                        console.log('running: convert-this');
                        apis.songs(dataArr[1])
                        break;
                    case 'movie-this':
                        console.log('running: do-what-it-says');
                        apis.movies(dataArr[1]);
                        break;
                }
            })
            break;
    }
}