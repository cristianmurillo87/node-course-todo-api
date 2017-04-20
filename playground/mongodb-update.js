
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
/*    db.collection('Todos').findOneAndReplace({ 
        _id: new ObjectID('58f7fbd4d56a12bd24c6c884')
    },{
        $set:{
            completed: true
        }
    },{
        returnOriginal: true
    }).then((result) =>{
        console.log(result);
    });*/
    
    db.collection('Users').findOneAndReplace({ 
        _id: new ObjectID('58f6e9cbd5b39ddead3dcc2f')
    },{
        $set:{
            name: 'Mariana Murillo'
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    });     
    //db.close();
});