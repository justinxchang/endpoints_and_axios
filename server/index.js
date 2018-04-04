const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let updatableText = 'Hi! You can change this text with a put endpoint';
// THis line creates an array with 25 spots (all undefined)
// then fills each spot with a 0
// then replaces each 0 with a number between 1-25. (i+1 in the map)
let cards = Array(25).fill(0).map((v,i) => i+1);

// create a test endpoint that sends simple text
app.get('/api/test', (req, res) => {
  res.status(200).send('Test Endpoint Hit!!');
})



// create a get endpoint that sends the cards array
// `/api/cards?filterValue=${filterNum}&filterColor=${color}`
// {filterValue: filterNum}
app.get('/api/cards', (req, res) => {
 // check to see if a query has been passed in, 
 //if so, filter the cards array by that query 
 //before sending them back
  if (req.query.filterValue) {
    //if filterValue exists after the ?,
    // do whatever is inside the if statement
    let valueFromInput = req.query.filterValue
    let filteredArr = cards
      .filter(card => card % valueFromInput === 0)
    res.status(200).send(filteredArr);
  } else {
    // if there are no queries, 
    // return the entire array
    res.status(200).send(cards);
  }
  
})
// create a get endpoint that sends the updatableText string
app.get('/api/update', (req, res) => {
  res.status(200).send(updatableText)
})
// create a get endpoint that sends the string "This button has been clicked"
app.get('/api/click', (req, res) => {
  res.status(200).send('This button has been clicked');
})

// create a post endpoint that receives a string and sends it back
app.post('/api/input', (req, res) => {
  res.status(200).send(req.body.input);
})
// create a put endpoint that updates the updatableText string, and then sends the updated string
app.put('/api/update', (req, res) => {
  updatableText = req.body.input;
  res.status(200).send(updatableText);
})
// create a delete endpoint that receives an index removes that item from the cards array
app.delete('/api/delete/:index', (req, res) => {
  cards.splice(req.params.index, 1);
  res.status(200).send(cards);
})

app.listen(3001, console.log('Docked at 3001'));