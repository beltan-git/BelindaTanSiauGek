const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
const closingPrices = msftData.map(day => day[3]); // Get the close prices which is index 3
const averageClose = closingPrices.reduce((sum, price) => sum + price, 0) / closingPrices.length; // sum up the close prices and then average out

console.log("Average closing price of MSFT is", averageClose.toFixed(2));