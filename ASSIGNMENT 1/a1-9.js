var fs = require('fs');
var array = fs.readFileSync('t1.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}