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
    // take the data Twitter returns, parse out what is needed

                  // (followers, followed, tweets, retweets)
    var userData;

    client.get('users/search', { q: req.body.query }, function (err, data, response) {
      console.log(req.body.query);
      // console.log(data[0].screen_name);
      // console.log(data[0].followers_count);
      // console.log(data[0].friends_count);
      // console.log(data[0].statuses_count);
      // console.log(data[0].status.retweet_count);
      userData = {
        screen_name : data[0].screen_name,
        followers_count : data[0].followers_count,
        friends_count : data[0].friends_count,
        statuses_count : data[0].statuses_count,
        status_retweets : data[0].status.retweet_count
      }
      console.log(userData)
    res.json(userData);
    })
  });



  // app.get('*', function(req, res) {
  //   // send the index html because  this is a single pageapp
  //     // other routes will just be for data and such.
  //   res.sendfile("./public/views/index.html")
  // });
}