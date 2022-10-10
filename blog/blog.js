const express = require('express');
const { MongoClient } = require("mongodb");
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017";
const mongoClient = new MongoClient(mongoUrl);
let collection;

mongoClient.connect().then(() => {
  collection = mongoClient.db('blog').collection('signups');
});

const app = express();
app.use(express.json())

app.get('/signup', (req, res) => {
  console.log('Received GET request');
  console.log(req.query.email);
  collection.insertOne({ email : req.query.email }).then(() => {
    console.log("Email signup request stored in MongoDB");
    res.send('');
  });
});

app.post('/signup', (req, res) => {
  console.log("Received email signup request from front end: " + req.body.email);
  collection.insertOne({ email : req.body.email }).then(() => {
    console.log("Email signup request stored in MongoDB");
    res.send('');
  })
});

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log("Blog Backend is listening on port " + PORT);
});
