const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern",
  {
    useMongoClient: true
  }
);

//PORT = 8080;

app.get('/', (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);