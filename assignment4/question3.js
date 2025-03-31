const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
const sumOfAmdPrice = amdPrices.reduce((sum, price) => sum + price, 0);
const sma7d = sumOfAmdPrice / amdPrices.length;

const daysAboveSMA = amdPrices.filter(price => price > sma7d).length;

console.log("Number of days AMD was above the 7-day SMA is:", daysAboveSMA);