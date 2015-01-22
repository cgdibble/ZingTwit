var express = require('express');
var app = express();

app.use(express.static('./public')); // this allows Node to send static files that are in the public directory AKA CSS

app.get('/', function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.listen(8080);