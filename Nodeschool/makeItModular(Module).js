fs = require('fs');
path = require('path');

function modular(dirname, ext, callback) {
  fs.readdir(dirname, function(err, list) {
      if (err) {
        return callback(err,null);
      }
      list = list.filter(function(file) {
        return path.extname(file) === '.'+ext;
      });
    callback(null,list);
  });
}

module.exports = modular;
