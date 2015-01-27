// grab our Query model
var Query = require('./models/query');

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
    console.log(req.body.q);
    var q = "THIS IS FROM THE SERVER /search";
    res.json(q);
  });

  // app.get('*', function(req, res) {
  //   // send the index html because  this is a single pageapp
  //     // other routes will just be for data and such.
  //   res.sendfile("./public/views/index.html")
  // });
}