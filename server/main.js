// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const routes  = require('./routes');
const prismic  = require('./api/prismic');

// Get our API routes
const app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/../dist');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '/../dist')));



// // Set our api routes
// app.use('/api', api);

app.get('/api/prismic/get/single', function(req, res){
  prismic.getSingle(req, res);
});

app.get('/api/prismic/get/all', function(req, res){
  prismic.getAll(req, res);
});

app.get('/api/prismic/get/type', function(req, res){
  prismic.getType(req, res);
});


// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   // res.sendFile(path.join(__dirname, '/../dist/index.html'));
// });
app.get('*', routes.index);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8081';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
