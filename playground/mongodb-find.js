//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');
/*
    db.collection('Todos').find({_id: new ObjectID("5ab1007a8d3e2b1ba8677025")}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
*/
/*
db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
}, (err) => {
    console.log('Unable to fetch todos', err);
});
*/

db.collection('Users').find({name: "Adrian"}).toArray().then(function (docs) {
    console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
    console.log('Unable to fetch users: ', error);
});

    //client.close();
});
