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
var jan10SalesPairs = {}    // should this be an array or object?
var jan10Sales = store3[4]["inventory sold"]
// console.log("this is the obj",jan10Sales);

var jan10SalesKeys = Object.keys(jan10Sales)
// console.log(`Use this for keys: ${jan10SalesKeys}`);

for(var i=0; i<jan10SalesKeys.length; i++){
  var key= jan10SalesKeys[i];
  var value= jan10Sales[key]['quantity'];
  jan10SalesPairs[key]=value
  console.log(key)
}

console.log(jan10SalesPairs)
// Create a loop to iterate over the whole store3 variable to find out how many
// Peanut Butter Buttered Peanuts were sold on all dates.



//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th.
