module = require('./makeItModular(Module).js');

module(process.argv[2],process.argv[3],function(err, data) {
  if (err) {
    console.log(err);
  }
  data.forEach(function(element) {
    console.log(element);
  });
});
