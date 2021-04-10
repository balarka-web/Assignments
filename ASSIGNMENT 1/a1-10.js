var fs = require('fs');
fs.writeFile('mytext.txt', 'hey ho lets go', function (err) {

        if (err) throw err;

        console.log('the file is saved');
})
var fs = require('fs');

fs.readFile('mytext.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});