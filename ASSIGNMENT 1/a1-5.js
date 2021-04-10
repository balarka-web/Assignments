var fs = require('fs');
 var fname = 'test.txt'
 var wordFind = "hi"
 fs.readFile(fname, 'utf8', function(err, contentFile){
     if(err) throw err;
     var wText = contentFile.split(' ');
     var findWords = wText.filter(function(word){
         return word.includes(wordFind);
     })
     console.log('The word "' + wordFind + '" appears ' + findWords.length + " times in the text.");
 });