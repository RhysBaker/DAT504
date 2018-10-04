//Code Here
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const MONGO_URL = 'mongodb://localhost:27017/addressbook';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on(
  'error',
  (error) => console.log("MongoDB error", error)
);

app.get('/', (req, res) =>{
  return response.json({
    'status': 'Secsess',
    'message': 'Hello'
  })
});

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`)
});


const personSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  place: String,
  email: String,
  age: Number,
  hobbies: [String]
});

app.use(bodyParser.json());

const Person = mongoose.model('Person', personSchema);


app.post('/addressbook/', (req, res) =>{
  console.log('body',req.body);
  const newPerson = new Person(req.body);
  newPerson.save(function(error){
    if (error) throw error;
    return res.send(`Saved ${req.body.name} to adressbook`);
  });
 return;
});


app.get('/addressbook/', (req, res)=>{
  Person.find({}, (error, people) =>{
    if (error) throw error;
    return res.json(people);
  })
})



app.put('/addressbook/:personId/', (req, res)=>{
  console.log('user', req.params.personId);
  return res.send('this will be updated soon');
})










/*
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/myDB';
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/www/index.html');
});

app.post('/addQuotes', (req, res) =>{ //links with the /addQuotes in HTML
 db.collection('quotes').insertOne(req.body, (err, result) =>{
   if (err) throw err;
   console.log('Saved');
   res.redirect('/');
 });
});

app.get('/getQuote', (req, res)=>{
  db.collection('quotes').find().toArray((err, result) =>{
    if (err) throw err;
    res.send(result);
  })
});

MongoClient.connect(url , (err, client) =>{
  if(err) throw err;
  console.log('Connection to DB is good');
  db = client.db('MovieQuotes');
})

app.listen(port, ()=>{
  console.log(`connected on ${port}`)
});*/
