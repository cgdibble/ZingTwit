// ============     modules   =============
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// ============     configuration   =============
// config files
var db = require('./config/db');

// set the port to use
var port = process.env.PORT || 8080;

// connect to our monboDB database
  // this is uncommon once you have entered in own credentials in config/db.js
// mongoose.connect(db.url);

//get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({extended: true}));

// override witht eh XHTTPMethodOVERRIDE header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img wil be /img for users
app.use(express.static(__dirname + '/public'));

// ===========      ROUTES    =============

require('./app/routes')(app); //configure our routes

// ===========    start up app   =========
app.listen(port); // localhost:8080

//log to console to verify running and port
console.log("Running on port: " + port);

//expose app
exports = module.exports = app;

