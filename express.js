var express = require('express');
var Webtask = require('webtask-tools');

var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

module.exports = Webtask.fromExpress(app);
