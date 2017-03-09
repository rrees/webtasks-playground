var express = require('express');
var Webtask = require('webtask-tools');

var app = express();

function template(data) {
  const pageTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML test page</title>
      <meta charset="utf-8">
    </head>

    <body>
      <h1>Hello ${data.name}!</h1>
    </body>
  </html>
  `;

  return pageTemplate;
}

app.get('/', function (req, res) {
  res.send(template({name: "World"}));
});

app.get('/hello/:name', function(request, response) {
  response.send(template({name: request.params.name}));
});

module.exports = Webtask.fromExpress(app);
