// grab our USER model
var User = require('./models/user');

module.exports = function(app) {
  //This is where the server routes go
  //can be anything from API calls, to authentication routes

  app.get('/search', function(req, res) {
    User.find( function(err, tags) {
      err ? res.send(err) : res.json(tags); // refactoring of above
    });
  });

  app.get('*', function(req, res) {
    // send the index html because  this is a single pageapp
      // other routes will just be for data and such.
    res.sendfile("./public/views/index.html")
  });
}