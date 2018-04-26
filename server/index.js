const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let textYouCanUpdate = 'Hi! You can change this text with a put endpoint';
// THis line creates an array with 25 spots (all undefined)
// then fills each spot with a 0
// then replaces each 0 with a number between 1-25. (i+1 in the map)
let cards = Array(25).fill(0).map((v,i) => i+1);
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
// DO NOT CHANGE ANY CODE ABOVE THIS LINE!!!!!!
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
// ---------------------------------------- \\

// Step 1-server endpoint: 
// create a test endpoint that sends simple text
app.get('/api/test', function(req, res) {
  res.status(200).send('The test works!!!!! 😄 🌵');
})


// Step 2-server endpoint: 
// create a get endpoint that sends the cards array
app.get('/api/cards', function(req, res) {
  res.status(200).send(cards);
})


// Step 3-server endpoint:
// create a get endpoint that sends the textYouCanUpdate variable
app.get('/api/update', function(req, res) {
  res.status(200).send(textYouCanUpdate);
})


// Step 4-server endpoint:
// create a get endpoint that sends the string "This button has been clicked"
app.get('/api/clicked', function(req, res) {
  res.status(200).send("This button has been clicked");
})


// Step 5-server endpoint:
// create a post endpoint that receives a string and sends it back
// after adding 👏 on the end
// (copy that emoji to make it easier)
app.post('/api/input', function(req, res) {
  let { input } = req.body;
  res.status(200).send(input);
})


// Step 6-server endpoint:
// create a put endpoint that receives a new string on req.body
// and updates the variable "textYouCanUpdate" found on line 7
// then sends the new text back
app.put('/api/update', function(req, res) {
  textYouCanUpdate = req.body.text
  res.status(200).send(textYouCanUpdate);
})

// Step 7-server endpoint:
// create a delete endpoint that receives an index and removes that item from the 
// cards array (hint: use a url param like '/:id')
app.delete('/api/delete/:id', function(req, res) {
  let { id } = req.params;
  cards.splice(id, 1);
  res.status(200).send(cards);
})


app.listen(3001, console.log('Docked at 3001'));