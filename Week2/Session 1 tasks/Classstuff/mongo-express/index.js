const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/myDB';


//delete
MongoClient.connect(url,(err, db) =>{
  if (err) throw err;
  let dbo = db.db('myDB');
  let myQuery = {company: 'plymouth uni'}
  dbo.collection('customers').deleteOne(myQuery, (err, res) =>{
    if (err) throw err;
    console.log('1 Doc Deleted');
    db.close();
  });
});






//Create entry
/*MongoClient.connect(url,(err, db) =>{
  if (err) throw err;
  let dbo = db.db('myDB');
  let myData = {name: 'Tom', company: 'plymouth uni'}
  dbo.collection('customers').insertOne(myData, (err, res) =>{
    if (err) throw err;
    console.log('1 Doc inserted');
    db.close();
  });
}); */




//create collection
/* MongoClient.connect(url,(err, db) =>{
  if (err) throw err;
  let dbo = db.db('myDB');
  dbo.createCollection('customers', (err, res) =>{
    if (err) throw err;
    console.log('Good connection');
    db.close();
  });
}); */



//connection
/* MongoClient.connect(url,(err, db) =>{
  if (err) throw err;
  console.log('Good connection');
  db.close();
}); */
