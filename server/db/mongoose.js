var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://cristian.murillo87:capi1cmu@ds115701.mlab.com:15701/todoapp');

module.exports = {mongoose};