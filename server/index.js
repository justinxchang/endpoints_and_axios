const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let updatableText = 'Hi! You can change this text with a put endpoint';
let cards = [1, 2, 3, 4, 5];

app.get('/api/test', (req, res) => {
  console.log('testing endpoing hit');
  res.status(200).send('Hit that endpoint!!');
});
app.get('/api/cards', (req, res) => {
  console.log('cards endpoing hit');
  res.status(200).send(cards);
});

app.get('/api/clicked', (req, res) => {
  console.log('clicked endpoint hit');
  res.status(200).send('This button has been clicked!!');
})


app.listen(3001, console.log('Docked at 3001'));