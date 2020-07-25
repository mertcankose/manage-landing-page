//jshint esversion:6

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + 'index.html');
})

app.listen(1234, function(){
  console.log("Server started on port 1234");
});

