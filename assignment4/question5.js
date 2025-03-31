const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
/*
let sum = 0;

for (let i = 0; i < disneyData.length; i++) {
    sum += parseFloat(disneyData[i].close);
}

const averageClose = (sum / disneyData.length);
*/

const averageClose = disneyData.reduce((status, stock) => status + parseFloat(stock.close), 0) / disneyData.length;

console.log("Average closing price of Disney is", (Math.round(averageClose * 100) / 100).toFixed(2));