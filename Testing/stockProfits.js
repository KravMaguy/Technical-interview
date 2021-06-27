function stockPairs(stocksProfit, target) {
  // Write your code here
  let stockPairs = [];
  for (let i = 0; i < stocksProfit.length - 1; i++) {
    for (let j = i + 1; j < stocksProfit.length; j++) {
      if (stocksProfit[i] + stocksProfit[j] === target) {
        stockPairs.push([stocksProfit[i], stocksProfit[j]]);
      }
    }
  }
  for (let i = 0; i < stockPairs.length - 1; i++) {
    for (let j = i + 1; j < stockPairs.length; j++) {
      if (
        (stockPairs[i][0] === stockPairs[j][0] ||
          stockPairs[i][0] === stockPairs[j][1]) &&
        (stockPairs[i][1] === stockPairs[j][0] ||
          stockPairs[i][1] === stockPairs[j][1])
      ) {
        stockPairs.splice(j, 1);
      }
    }
  }

  return stockPairs.length;
}
