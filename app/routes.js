// grab our USER model
var Query = require('./models/query');

module.exports = function(app) {
  //This is where the server routes go
  //can be anything from API calls, to authentication routes

  app.get('/', function(req, res) {
    console.log("In /query request");
    res.write("hello")
    res.sendfile("./public/views/index.html")
    // Query.find( function(err, query) {
    //   err ? res.send(err) : res.json(query); // refactoring of above
    // });
  });

  // app.get('*', function(req, res) {
  //   // send the index html because  this is a single pageapp
  //     // other routes will just be for data and such.
  //   res.sendfile("./public/views/index.html")
  // });
}