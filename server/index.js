const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/api/test", (req, res) => {
  console.log('testing endpoing hit');
  res.status(200).send('Hit that endpoint!!');
});

app.listen(3001, console.log("Docked at 3001"));