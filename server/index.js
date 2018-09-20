const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


// THis line creates an array with 25 spots (all undefined)
// then fills each spot with a 0
// then replaces each 0 with a number between 1-25. (i+1 in the map)
let cards = Array(25).fill(0).map((v,i) => i+1);

// This is bringing in an array of 20 users.
// When instrucitons here talk about users, 
// its talking about this array
let users = require('./users');


///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
//   DO NOT CHANGE ANY CODE ABOVE THIS!!!   \\
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
// ---------------------------------------- \\

/*
example endpoint: 
app.get('/api/friends', function(req, res) {
  res.status(200).send('Friends');
})
Put usually uses a url Parameter which looks like '/:<param>'
app.put('/api/friends/:id', function(req, res) {
  res.status(200).send('Friends');
})
*/

// Step 1-server endpoint: 
// create a test endpoint that sends simple text
app.get('/test', (req, res) => {
  res.status(200).send('A-OK!')
})


// Step 2-server endpoint: 
// create a get endpoint that sends the cards array
app.get('/cards', (req, res) => {
  res.status(200).send(cards)
})


// Step 3-server endpoint:
// create a get endpoint that sends the users variable
app.get('/users', (req, res) => {
  res.status(200).send(users)
})


// Step 4-server endpoint:
// create a get endpoint that sends the string "This button has been clicked"
app.get('/click', (req, res) => {
  res.status(200).send('This button has bene clicked')
})


// Step 5-server endpoint:
// create a post endpoint that receives a string on the body and sends it back
// after adding 👏 on the end
// (copy that emoji to make it easier)
app.post('/typestuff', (req, res) => {
  const {string} = req.body
  const newString = string + ' 👏👏'
  res.status(200).send(newString)
})



// Step 6-server endpoint:
// create a put endpoint that receives an id as a param
// and a name on the body. Find the user in the users 
// array with that id, and update its name properties 
// with those passed in. Then sends the new text back
app.put('/users/:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
  //console.log('id from params', id)             //this will let us check to see if we're matching the right IDs
  let index = users.findIndex(user => {
    //console.log(user._id, id)
    return user._id===Number(id)
  })                //when you destructure something off of req.params, it becomes a string, so you have to convert it back to a number
    //console.log(index)
    users[index].name = name
    res.status(200).send(users)
  })


// Step 7-server endpoint:
// create a delete endpoint that receives an index and removes that item from the 
// cards array (hint: use a url param like '/:id')

app.delete('/byebye/:id', (req, res) => {
  const {id} = req.params
  cards.splice(id, 1)
  res.status(200).send(cards)
})


app.listen(3001, console.log('Docked at 3001'));