// grab our Query model
var Query = require('./models/query');
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key : process.env.CONSUMER_KEY,
  consumer_secret : process.env.CONSUMER_SECRET,
  access_token_key : process.env.ACCESS_TOKEN,
  access_token_secret : process.env.ACCESS_TOKEN_SECRET
});   // Need to add these values from twitter account but hidden in a DOTENV

module.exports = function(app) {
  //This is where the server routes go
  //can be anything from API calls, to authentication routes

  app.get('/', function(req, res) {
    // console.log("In / request");
    res.sendfile("./public/views/index.html")
    // Query.find( function(err, query) {
    //   console.log(query);
    //   err ? res.send(err) : res.json(query); // refactoring of above
    // });
  });

  app.put('/search', function(req, res) {
    // This route should take the data passed to it, parse it out properly such that it can then query
    //    the twitter db for users
    // take the data Twitter returns, parse out what is needed (followers, followed, tweets, retweets)
        // send back as JSON to Angular.
    var q = "THIS IS FROM THE SERVER /search";
    res.json(q);
  });



  // app.get('*', function(req, res) {
  //   // send the index html because  this is a single pageapp
  //     // other routes will just be for data and such.
  //   res.sendfile("./public/views/index.html")
  // });
}