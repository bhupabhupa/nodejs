var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', function(req, res){
    console.log("Get called : ", process.env);
    res.json({'message':'Todo api list'});
});

//POST
app.post('/expense/add/:expense', function(req, res){
    console.log("Add called");
    const body = JSON.stringify(req.params);
    const parseval = JSON.parse(body);
    const expenseJSON = JSON.parse(parseval.expense);
    return res.status(200).end('Success');
});

//GET /todos
app.get('/expense/all', function(req, res){
    
    res.json({ data: "expense all "})
});


app.listen(PORT, function(){
    console.log('Express listing on port ' + PORT + '!');
})