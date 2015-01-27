// grab our Query model
var Query = require('./models/query');

module.exports = function(app) {
  //This is where the server routes go
  //can be anything from API calls, to authentication routes

  app.get('/', function(req, res) {
    console.log("In /query request");
    res.sendfile("./public/views/index.html")
  });

  app.put('/', function(req, res) {
    console.log("POST request data: " + res);
    Query.find( function(err, query) {
      console.log(query);
      err ? res.send(err) : res.json(query); // refactoring of above
    });
    console.log(res.body);
  });

  // app.get('*', function(req, res) {
  //   // send the index html because  this is a single pageapp
  //     // other routes will just be for data and such.
  //   res.sendfile("./public/views/index.html")
  // });
}