const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58f8260289c17b018c41e107';

if(ObjectID.isValid(id)){
    User.find({
        _id: id
    }).then((users) => {
        console.log('Users', users);
    });

    User.findOne({
        _id: id
    }).then((user) => {
        console.log('User', user);
    });

    User.findById(id).then((user) => {
        if(!user){
            return console.log('User not found.');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }, (e) => {
        console.log(e);
    }).catch((e) => {
        console.log(e);
    });
} else {
    console.log('Invalid user Id');
}
/*var id = '58fb8d00b1a7251810cd11111';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}*/
/*Todo.find({
   _id: id 
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
   _id: id 
}).then((todo) => {
    console.log('Todo', todo);
});*/

/*Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => {
    console.log(e);
});*/