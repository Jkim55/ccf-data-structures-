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
// set up dateSalePairs for all candies
//

var store2SalesData = store2['sale dates']
// console.log(store2SalesData)
var store2Candies = Object.keys(store2SalesData)
// console.log(store2Candies  )
var allSaleDates = []
for (var i=0;i<store2Candies.length;i++){
  // eval(require("locus"))
  var datesAti= store2SalesData[store2Candies[i]]
  allSaleDates = allSaleDates.concat(datesAti)  // for every object w/in store2SalesData, push date arry into allSaleDates
}
// console.log(allSaleDates)
var dateSalePair = {}
for(var date in allSaleDates){
  var datekey = allSaleDates[date]
  if(!dateSalePair[datekey]){
    dateSalePair[datekey]= 1;
  } else {
    dateSalePair[datekey] += 1;   // is it breaking here??
  }
}
// console.log(dateSalePair);

var consolidatedDates = Object.keys(dateSalePair)
var largestSaleData = {'largestSaleDate': 0, 'largestSaleQuanity': 0}


for (var i=0;i<consolidatedDates.length-1; i++){
  var dateAti = consolidatedDates[i]
  var dateAtiPlus = consolidatedDates[i+1]
  if(dateSalePair[dateAti]>dateSalePair[dateAtiPlus]){
    largestSaleData['largestSaleDate'] = dateAti
    largestSaleData['largestSaleQuanity'] = dateSalePair[dateAti]
    // eval(require("locus"))
  } else {
    largestSaleData['largestSaleDate'] = dateAtiPlus
    largestSaleData['largestSaleQuanity'] = dateSalePair[dateAtiPlus]
  }
}

console.log(largestSaleData);






// var largest_sale_date = {'largestDate': 0, 'largestValue': 0}
// var dateSalePair = {'2015-01-07': 1, '2015-01-08': 2, '2015-01-09': 2, '2015-01-10': 3};
// var dateSaleKeys = Object.keys(dateSalePair);
// // dateSaleKeys ouput === [ '2015-01-07', '2015-01-08', '2015-01-09', '2015-01-10' ]

// for(var i=0; i<dateSaleKeys.length-1;i++){
//   var dateAti = dateSaleKeys[i]
//   var dateAtiPlus= dateSaleKeys[i+1]
//   if(dateSalePair[dateAti]> dateSalePair[dateAtiPlus]){
//     largest_sale_date['largestDate']= dateAti
//     largest_sale_date['largestValue']= dateSalePair[dateAti]
//   } else {
//     largest_sale_date['largestDate']= dateAtiPlus
//     largest_sale_date['largestValue']= dateSalePair[dateAtiPlus]
//
//   }
// }
// console.log(largest_sale_date)

/////////// CHALLENGE ///////////
// Create an object containing the amounts that store2 made by selling each type of candy.
