//Code Here
const express = require('express');
const app = express();
const port = 3000;
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
});
