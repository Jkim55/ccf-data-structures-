var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?
var store1Val = store1['2015-01-08'][0][1]
console.log(store1Val)

// How would you access how many 'Mint Wafers' were sold on January 8th?
var store1MintWafers = store1['2015-01-08'][2][2]
console.log(store1MintWafers)

// Produce an array of the date keys in store1's data.
var store1Dates = Object.keys(store1)
console.log(store1Dates);


// *********** LOOPING OVER DATA *********** \\
// Create a loop to read which candies were sold by store1 on Jan 8.
// After simply outputting the data, try creating an array that contains the candy names.
var access0108Obj = store1['2015-01-08']
for (var candy in access0108Obj){
  console.log(access0108Obj[candy][0])
}

var candyFrom0108 = []
var access0108Obj = store1['2015-01-08']
for (var candy in access0108Obj){
  candyFrom0108.push(access0108Obj[candy][0])
}
console.log(candyFrom0108.join(", "))

// Create a loop to count the total number of candies sold on Jan 10 at store1.
// Where do you have to initialize the counter variable? Why?

var totalCandySoldOn0110 = 0
var access0110Obj = store1['2015-01-08']
for(var candy in access0110Obj){
  totalCandySoldOn0110 += access0110Obj[candy][2]
}

console.log(totalCandySoldOn0110)

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
var allStoreDates = Object.keys(store1)
console.log(allStoreDates);

// Iterate over the generated array of dates.
// Use each date to console.log the specific sale data for the day from store1.
for(var dates of allStoreDates){
  console.log(store1[dates])
}

// Use a loop to calculate the total number of candies sold at store1.
var totalCandySold = 0
for (var date in store1) {
  for (var i=0; i < store1[date].length; i++) {
    totalCandySold += store1[date][i][2]
  }
}

console.log(totalCandySold)

// In the previous exercise, where did you have to initialize the counter variable? Why?
// above the for loop

// *********** CHALLENGE *********** \
// Create an array of the candies sold by store1 on January 10th.


function listCandiesSold(date){
  var candiesSold = []
  var key = store1[date]
    for (var i=0; i < key.length; i++) {
      candiesSold.push(key[i][0]);
    }
  return candiesSold.join(", ")
}

var list = listCandiesSold("2015-01-10")
console.log(list)
