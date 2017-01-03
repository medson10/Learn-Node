var file = process.argv[2];
var ext = '.'+process.argv[3];
var fs = require('fs');

fs.readdir(file, function(err, list) {
    if (err) {
        console.log(err);
    }
    list.forEach(function(element) {
        if (element.includes(ext)) {
            console.log(element);
        }
    });
});
