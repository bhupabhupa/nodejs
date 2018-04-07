var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/expensedb');

var expenseSchema = new mongoose.Schema({
   expenseDate: Date,
   category: String,
   expenseType: String,
   amount: Number
});

var ExpenseDB = db.model('expense', expenseSchema);

//module.exports = db.model('expense', expenseSchema);


module.exports = {
    ExpenseDB: ExpenseDB
};