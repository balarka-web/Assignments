var express=require('express');
var app=express();
app.get('/year?:age',function(req,res){
    res.send('1984');
});
app.listen(3000);