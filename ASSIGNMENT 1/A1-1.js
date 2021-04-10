//  1 

var http=require('http')
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Success im listening from port:3000");
}));
server.listen(3000);

// 2

/*var fs = require('fs');
 
fs.readFile('test.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');*/



