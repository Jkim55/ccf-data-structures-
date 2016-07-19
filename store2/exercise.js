var store2 = require('./store2-data.js');
//
// /////////// ACCESSING DATA ///////////
//
// // Set the sale dates for 'Banana Bunches' from store2 to a variable.
// var saleDates = store2['sale dates']['Banana Bunches']
// console.log(saleDates)
//
// // What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
// console.log(saleDates.length)
//
// /////////// UPDATING DATA ///////////
//
// // Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value.
// // When you update your new variable, does the price in the store2 data change? Why or why not?
// var mintWafersPrice = store2['inventory prices']['Mint Wafers']
// mintWafersPrice = 0.89
// console.log(mintWafersPrice);
// console.log(store2['inventory prices']['Mint Wafers']);
// // price in Store2 does not change because of variable scope.
//
// // Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.
// var pbbpSaleDates = store2['sale dates']['Peanut Butter Buttered Peanuts']
// console.log(pbbpSaleDates);
//
// console.log(store2['sale dates']['Caramel Twists'])
// var ctDates = store2['sale dates']['Caramel Twists'].pop()
//
// console.log(ctDates);
// console.log(store2['sale dates']['Caramel Twists']);
//
// /////////// LOOPING OVER DATA ///////////
//
// // Iterate over the store2 sale dates for Caramel Twists. Use this to create an object
// // containing dates as the key and the value as the quantity sold on that day.
// // FYI: each date represents one single sale of one single quantity
// // {'date':# of 'times date occurs'}
//
// // iterate thru the array.
// // check if the key for that date exists
// // if it doesn't create a new key with that date and assign it a value of 1
// // // if it does exist, then add one to the existing array
// //
// var dateSalePair = {}
// var dateArr = store2['sale dates']['Caramel Twists']
// for(var date in dateArr){
//   var datekey = dateArr[date]
//   if(!dateSalePair[datekey]){
//     dateSalePair[datekey]= 1;
//   } else {
//     dateSalePair[datekey] += 1;   // is it breaking here??
//   }
// }
// console.log(dateSalePair);


// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?
var largest_sale_date = {}
var dateSalePair = {'2015-01-07': 1, '2015-01-08': 2, '2015-01-09': 2, '2015-01-10': 3};
var dateSaleKeys = Object.keys(dateSalePair);

for(var i=0; i<dateSaleKeys.length;i++){
  if(dateSalePair[dateSaleKeys[i]]> dateSalePair[dateSaleKeys[i+1]]){
    eval(require("locus"))
    largest_sale_date=dateSalePair[dateSaleKeys]
  } else {
    largest_sale_date={dateSalePair[dateSaleKeys[i+1]]}
  }
}
console.log(largest_sale_date)
// If date_of_largest_sale is empty, assign dateSalePair to date_of_largest_sale
// else if the value of dateSalePair is larger than value of date_of_largest_sale, assign the value to date_of_largest_sale
// else do nothing
// return the date (key) of the sale date. key of date_of_largest_sale

/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.
