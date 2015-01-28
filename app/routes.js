// grab our Query model
var Query = require('./models/query');
var Twitter = require('twitter');
var twit = require('twit');
var client = new twit({
  consumer_key : process.env.CONSUMER_KEY,
  consumer_secret : process.env.CONSUMER_SECRET,
  access_token : process.env.ACCESS_TOKEN,
  access_token_secret : process.env.ACCESS_TOKEN_SECRET
});



module.exports = function(app) {

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
    var q;

    // app.get('https://api.twitter.com/1.1/users/search.json?q=cgdibble&page=1&count=3', function(data) {
    //   console.log("hopefully this is twitter user data: " + data);
    // });
    // var q = "THIS IS FROM THE SERVER /search";
    res.json(q);
  });



  // app.get('*', function(req, res) {
  //   // send the index html because  this is a single pageapp
  //     // other routes will just be for data and such.
  //   res.sendfile("./public/views/index.html")
  // });
}