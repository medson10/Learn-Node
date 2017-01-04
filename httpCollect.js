var bl = require('bl');
var http = require('http');
var end = process.argv[2];

http.get(end, function(response) {
  response.setEncoding('utf8');

  response.pipe(bl(function(err, data) {
    if(err) {
      console.log(err);
    }
    console.log(data.length);
    console.log(data.toString());
  }));

  response.on('end', function() {
    bl.end();
  });
});
