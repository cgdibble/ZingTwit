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
    res.sendfile("./public/views/index.html")
  });

  app.put('/search', function(req, res) {
    var userData;

    client.get('users/search', { q: req.body.query }, function (err, data, response) {
      // save each user searched in DB
        // pull the last ~3 ((maybe just last one...sort of an example/benchmark---make it me?)) user datas searched and chart them.
        // if they clear the chart
          // then only add the data as they save it to the DB.....have to keep track of the ones they enter::::an array of queries they make in angular that for each one the necessary functions are called to get the data and chart it.

      userData = {
        screen_name : data[0].screen_name,
        followers_count : data[0].followers_count,
        friends_count : data[0].friends_count,
        statuses_count : data[0].statuses_count,
        status_retweets : data[0].status.retweet_count
      }
      // console.log(userData); // DEVELOPMENT log
      res.json(userData);
    })
  });
}