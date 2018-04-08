var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var app = express();
var PORT = process.env.PORT || 3030;

//var db         = require('./db.js');
//var mongoose   = require('mongoose');

//var ExpenseDB = db.ExpenseDB;

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    /*res.header("Access-Control-Allow-Headers", "X-Requested-With");*/
    next();
});

app.get('/', function(req, res){
    console.log("Get called");
    res.json({'message':'Todo api list'});
});




app.listen(PORT, function(){
    console.log('Express listing on port ' + PORT + '!');
})