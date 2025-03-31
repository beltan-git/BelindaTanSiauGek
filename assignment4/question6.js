// Modify the code below:

let amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
  
const sortedPrices = amdPrices.sort((a, b) => a - b);

// Get the three lowest prices
const lowest3 = sortedPrices.slice(0, 3);
console.log(`The three lowest prices are ${lowest3[0]}, ${lowest3[1]}, and ${lowest3[2]}`);

// let data = ()
// for price in data:
//	if price < 3:
//    data.push(price)