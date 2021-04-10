var fs = require('fs');
var file = 'sum.txt';

fs.readFile(file,'utf-8',function(err,contentFile){
    if(err){
        throw err;
    }
    var numbers=contentFile.split(" ").map(function(num){
        return parseInt(num);
    });
    var sum = numbers.reduce(function(a,b){
        return a+b;
    });

    console.log(`Sum: ${sum}`);
})