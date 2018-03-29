const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let updatableText = 'Hi! You can change this text with a put endpoint';
let cards = [1, 2, 3, 4, 5];

// create a test endpoint that sends simple text

// create a get endpoint that sends the cards array

// create a get endpoint that sends the updatableText string

// create a post endpoint that receives a string and sends it back

// create a put endpoint that updates the updatableText string, and then sends the updated string

// create a delete endpoint that receives an index removes that item from the cards array


app.listen(3001, console.log('Docked at 3001'));