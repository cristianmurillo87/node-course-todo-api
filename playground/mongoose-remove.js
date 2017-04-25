const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
    console.log(result);
});*/


Todo.findByIdAndRemove('58fbd2356e68f7838b087f34').then((result) => {
    console.log(result);
});