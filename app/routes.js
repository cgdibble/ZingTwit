// grab our USER model
var Tag = require('./models/tag');

module.exports = function(app) {
  //This is where the server routes go
  //can be anything from API calls, to authentication routes

  app.get('/tags', function(req, res) {
    Tag.find( function(err, tags) {
      // if (err) {
      //   res.send(err);
      // }
      // res.json(tags);  //return all of the users data in JSON
      err ? res.send(err) : res.json(tags); // refactoring of above
    });
  });

  app.get('*', function(req, res) {
    // send the index html because  this is a single pageapp
      // other routes will just be for data and such.
    res.sendfile("./public/views/index.html")
  });
}