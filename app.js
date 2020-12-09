const request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// const url = 'https://maps.googleapis.com/maps/api/geocode/json/address=1301%lombard%street%philadelph';

request({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%lombard%street%philadelph',
      json: true
   },(error,response,body) => {
    console.log(body);
});

// app.get('/', (req, res) => {
//     res.send("Farhan");
// });

// app.listen(3000, function(){
//     console.log("Whether app is running");
// });