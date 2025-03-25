const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
const low = bacData[0]; // index 0
const high = bacData[1]; // index 1
const open = bacData[2]; // index 2
const close = bacData[3]; // index 3
const volume = bacData[4]; // index 4

// Check the pricing trend based on the conditions
if (close > open) {
  if (volume > 100000) {
    console.log("Strong Bullish");
  } else {
    console.log("Bullish");
  }
} else if (close < open) {
  if (volume > 10000) {
    console.log("Strong Bearish");
  } else {
    console.log("Bearish");
  }
} else {
  console.log("Neutral");
}