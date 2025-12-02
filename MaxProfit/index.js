

// const maxProfit = (prices) => {
//   prices.sort((a, b) => a - b);
//   return prices[prices.length - 1] - prices[0];

// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
// console.log(maxProfit([7, 6, 4, 3, 1])); 


const maxProfit = (prices) => {
    let minPrices = prices[0];
    let maxPrices = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrices) {
            minPrices = prices[i];
        }
        if (prices[i] > maxPrices) {
            maxPrices = prices[i];
        }

    }
    return maxPrices - minPrices;
}
 console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
 console.log(maxProfit([7, 6, 4, 3, 0])); 
