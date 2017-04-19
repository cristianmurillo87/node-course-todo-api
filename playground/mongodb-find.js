
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

/*    db.collection('Todos').find({
        _id: new ObjectID('58f6d6e6d20375133057bc9a')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/
    /*db.collection('Todos').find({
        _id: new ObjectID('58f6d6e6d20375133057bc9a')
    }).count().then((count) => {
        console.log('Todos');
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/
    db.collection('Users').find({
        name: 'Cristian Murillo'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});