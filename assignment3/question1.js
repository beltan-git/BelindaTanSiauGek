const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below

// Alternative calculation
//var total = 0;
//for(var i = 0; i < msftData.length; i++) {
//    total += msftData[i];
//}
//var msftAvg = total / msftData.length;

//console.log(msftAvg);

// Calculate the sum of all the prices and then divided by the number of days (length of the array)
const averagePrice = (msftData.reduce((sum, price) => sum + price, 0)) / msftData.length

//const averagePrice = tot / msftData.length;
console.log(averagePrice)