module = require('./makeItModular(Module).js');
var dir = process.argv[2];
var ext = process.argv[3];

module(dir, ext,function(err, data) {
  if (err) {
    console.log(err);
  }
  data.forEach(function(element) {
    console.log(element);
  });
});
