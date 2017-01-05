var bl = require('bl');
var http = require('http');
var ends = [];
var result = [];
var cont = 0;

ends.push(process.argv[2]);
ends.push(process.argv[3]);
ends.push(process.argv[4]);

ends.forEach(function(end) {
  http.get(end, function(response) {
    response.setEncoding('utf8');

    response.pipe(bl(function(err, data) {
      if(err) {
        console.log(err);
      }
      result.push(data.toString());
      cont++;

      if (cont === 3) {
        result.forEach(function(element) {
          console.log(element);
        });
      }
    }));
  });
});
