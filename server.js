var express = require('express');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var path = require('path'); //pathing - for universal app.get(*)

var app = express();

app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


app.get('/_ah/health', function(req, res) {
  res.status(200).send('ok');
});

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});
app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

// Start the server
// listen (start app with node server.js) ======================================
var port = process.env.PORT;
if (port === '' || port === undefined){
    port = 8081;
}
app.listen(port);
console.log("App listening on port " + port);
