
var fs = require('fs');
fs.writeFile('t1.txt', 'hey ho lets go', function (err) {

        if (err) throw err;

        console.log('It\'s saved! in same location.');
})
