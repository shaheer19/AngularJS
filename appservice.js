var express = require('express');
var path = require('path');
var url = require('url');
var app = express();
app.get('/', function (req, res) {
  res.send('hello world');


})

app.get("/world",function(req,res){
  var param =   url.parse(req.url,true).query;
  console.log(param);
  if(param.country == 'india')
  res.send("New Delhi");
})

app.listen(4000);
