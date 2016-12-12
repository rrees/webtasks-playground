module.exports = function(context, request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end('{"message": "Hello world"}');
}
