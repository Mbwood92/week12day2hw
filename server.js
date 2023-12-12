// Load express
const express = require('express');

// express app
const app = express();

// routes on app
app.get('/', function (req, res) {
    res.send('<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>');
  });
  
  app.get("/:number_of_bottles", function (req, res) {
    const bottlesLeft = parseInt(req.params.number_of_bottles);
 
    if (bottlesLeft === 0) {
         res.send(
             `${bottlesLeft} Bottles of beer on the wall.<br><a href="/">Start over</a>`
         );
     } else {
         const nextBottleCount = bottlesLeft - 1;
         res.send(`<h1>${bottlesLeft} Bottle${bottlesLeft !== 1 ? 's' : ''} of beer on the wall</h1>
           <a href="/${nextBottleCount}">Take one down, pass it around</a>
           <br>
           <a href="/">Start over</a>
         `);
     }
 });
  
  

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
