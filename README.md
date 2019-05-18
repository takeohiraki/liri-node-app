<h1> liri-node-app </h1>
<hr>

<h2> The liri app allows the user to choose from 4 pieces of functionality: </h2>

<ul>
  <li>Search information about upcoming events for an artist / band</li>
  <li>Search information about a song</li>
  <li>Search information about a movie</li>
  <li>Make one of the searches above based on the contents of a text file</li>
</ul>

<h2> Functionality </h2>
<h3> How to run </h3>
<p> The Liri is a CLI. Pull the repo and setup the following files to handle dependencies and credentials:

<ul>
  <li>.env</li>
  <li>node_modules</li>
</ul>

Once you have setup the files, navigate to liri.js on your command line and type `node liri.js`

You will be prompted to select on of the following:

<ul>
  <li>concert-this: Search information about upcoming events for an artist / band</li>
  <li>spotify-this-song: Search information about a song</li>
  <li>movie-this: Search information about a movie</li>
  <li>do-what-it-says: Make one of the searches above based on the contents of a text file</li>
</ul>

<h3> concert-this </h3>
Input: Will prompt you to input an artist/band
Output: Will output data on venue names, venue city, and time

<h3> spotify-this-song </h3>
Input: Will prompt you to input a song
Output: Will output data on artist name, song name, preview image, and album name

<h3> movie-this </h3>
Input: Will prompt you to input a movie
Output: Will output data on title, year, rating, rotten tomatoes rating, country produced, language, plot, and actors.

<h3> do-what-it-says </h3>
Input: Will read the file called `random.txt`. The first element will be the command, the second element will be the input value (e.g. movie, song, etc.)
Output: Will output whatever the command would usually output.



