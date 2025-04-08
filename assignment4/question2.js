const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
const sumOfAmdPrice = amdPrices.reduce((sum, price) => sum + price, 0);
const sma7d = sumOfAmdPrice / amdPrices.length;

console.log("The 7-day SMA of AMD is", sma7d.toFixed(2))