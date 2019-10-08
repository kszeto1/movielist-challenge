// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');
// Import axios for our node server
const axios = require('axios');
// Import MovieDB API key
const api_key = process.env.MOVIEDB_API_KEY; 

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 3000;

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));
// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));


app.get('/movies', function(req, res) {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
    })
});