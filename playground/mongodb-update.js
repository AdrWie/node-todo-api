//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');
/*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5ab13dd6d13cf0ec54982cfb"),

    }, {
        $set: {
            completed: true
        }        
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
*/
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5ab10f97df5739264835bca7"),
    }, {
        $set: {
            name: "Adrian"
        }, 
        $inc: {
            age: 1
        }
    }, { 
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});
