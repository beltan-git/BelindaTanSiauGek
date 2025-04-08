const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function findMax(inputPrice) {
    //let inputPrice = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
    let maxPrice = inputPrice[0];

    for (let price of inputPrice) {
        if (price > maxPrice) {
            maxPrice = price;
        }
    }
    return(maxPrice);
}

const outputPrice = findMax(amdPrices);
console.log("AMD 52-week high is", outputPrice)