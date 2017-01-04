var http = require('http');
var end = process.argv[2];

http.get(end, function(response) {
  response.setEncoding('utf8');

  response.on('data', console.log);
  response.on('error', console.error);
}).on('error', console.error);
