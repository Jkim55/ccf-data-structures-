// Remember what goes here?
var store4 = require('./store4-data.js')
// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// What is the cost of 'Dark Chocolate Crunchies' from store4?
var costDCC = store4['Dark Chocolate Crunchies']['cost']
console.log(costDCC);
// Set the total number of 'Berry Bites' sold by store4 to a variable.
var salesDataBB = store4['Berry Bites']['sold on']
var salesTotalBB = salesDataBB.length
console.log(salesTotalBB);

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candies that cost more than $2.00
var candyOver2 = []
var candyNames = Object.keys(store4)
for(var i=0;i<candyNames.length;i++){
  var candyCost= store4[candyNames[i]]['cost']
  if(candyCost > 2.00){
    candyOver2.push(candyNames[i])
  }
}
console.log(candyOver2);

// Create a loop to return an object that has the candy name as the key and the cost as the value
var namePricePair = {}
var candyNames = Object.keys(store4)
for(var i=0;i<candyNames.length;i++){
  namePricePair[candyNames[i]] = store4[candyNames[i]]['cost']
}

console.log(namePricePair);

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)


// Determine how much money did store3 make on January 9th.


// Calculate how much store4 made from selling Dark Chocolate Crunchies across all the days.
