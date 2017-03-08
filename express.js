var express = require('express');
var Webtask = require('webtask-tools');

var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.get('/hello/:name', function(request, response) {
  response.send("<h1>Hello " + request.params.name +"!</h1>");
});

module.exports = Webtask.fromExpress(app);
