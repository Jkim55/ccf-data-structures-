// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.
var store3 = require('./store3-data.js');

// //()()()()() ACCESSING DATA ()()()()()\\
//
// // Set a variable equal to Berry Bites data for store3 on January 7.
// var berryBitesData = store3[1]['inventory sold']['Berry Bites']
// console.log(berryBitesData)
//
// // Console log how many Mint Wafers were sold on January 9th?
// var mintWafersSold = store3[3]['inventory sold']['Mint Wafers']['quantity']
// console.log(mintWafersSold);
//
// // Set a variable equal to how many dates are included in the dataset.
// var datesInData= store3.length
// console.log(datesInData)
//
// //()()()()() LOOPING OVER DATA ()()()()()\\
//
// // Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.
// var dateArray = []
// for (var i=0;i<store3.length;i++){
//   dateArray.push(store3[i]['date'])
// }
// console.log(dateArray);

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3.
// While iterating over the data, create an object containing each candy's name and price.

var jan10SalesNamePricePairs={}
// should this be an array or object?
var jan10Sales= store3[4]["inventory sold"]  // object of names with nest object of cost & price
// console.log("this is the obj",jan10Sales);
var jan10SalesKeys=Object.keys(jan10Sales)   // array of candy names
// console.log(`Use this for keys: ${jan10SalesKeys}`);
for(var i=0; i<jan10SalesKeys.length; i++){
  var candyName=jan10SalesKeys[i];  // name of each candy
  var candyPrice=jan10Sales[candyName]['cost'];
  jan10SalesNamePricePairs[candyName]= candyPrice
}

console.log(jan10SalesNamePricePairs)

// Create a loop to iterate over the whole store3 variable to find out how many
// Peanut Butter Buttered Peanuts were sold on all dates.

// Loop over each position in store3 array - each position is an object - store3[i]
// Access the object 'inventory sold' - returns an object w a nested array. store3[i]['inventory sold']
// Iternate over each object within 'invetory sold' and find the objects with (key === 'Peanut Butter Buttered Peanuts' aka PBBP)
// Once found, access the 'quantity' key & return the value of quantity key... add to counter 'total PBBP'





//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th.
