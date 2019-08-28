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
    console.log("Get called changed");
    res.json({'message':'Todo api list'});
});

//POST
app.post('/expense/add/:expense', function(req, res){
    console.log("Add called");
    const body = JSON.stringify(req.params);
    const parseval = JSON.parse(body);
    const expenseJSON = JSON.parse(parseval.expense);

    // var expenseObj = new ExpenseDB();
    // expenseObj.expenseDate = expenseJSON.date;
    // expenseObj.category = expenseJSON.category;
    // expenseObj.expenseType = expenseJSON.type;
    // expenseObj.amount = expenseJSON.amount;

    // expenseObj.save(function(err) {
    //     if(err) {
    //         console.log(err);
    //         return res.status(400).send({ message: 'Unable to save the user' });
    //     }
    // });
    //console.log('Done');
    return res.status(200).end('Success');
});

//GET /todos
app.get('/expense/all', function(req, res){
    // ExpenseDB.find({}, null, function(err, data) {
    //     if(err){
    //         console.log(err);
    //         return res.status(400).send({ message: 'Error while getting expense list' });
    //     } else {
    //         console.log(data);
    //         res.send(data);
    //     }
    // });
    //res.json(todos);
    res.json({ data: "expense all "})
});

// app.get('/expense/perday', function(req, res){
//     ExpenseDB.aggregate([{$group : {_id : { month: { $month: "$expenseDate" }, day: { $dayOfMonth:"$expenseDate" }, year: { $year: "$expenseDate" } },totalAmount: { $sum: "$amount" }}}], function(err, data) {
//         if(err){
//             console.log(err);
//             return res.status(400).send({ message: 'Error while getting expense list' });
//         } else {
//             console.log(data);
//             res.send(data);
//         }
//     });
//     //res.json(todos);
// });



app.listen(PORT, function(){
    console.log('Express listing on port ' + PORT + '!');
})