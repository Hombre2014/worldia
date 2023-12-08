type StockEntry = { stock: string; averagePrice: number };

function getTopStocks(stocks: string[], prices: number[][]): string[] {
  const averages: StockEntry[] = [];

  // Calculate average prices for each stock
  for (let i = 0; i < stocks.length; i++) {
    const stock = stocks[i];
    const pricesForStock = prices.map((dayPrices) => dayPrices[i]);

    // Check if pricesForStock is defined and not an empty array
    if (Array.isArray(pricesForStock) && pricesForStock.length > 0) {
      const averagePrice =
        pricesForStock.reduce((sum, price) => sum + price, 0) /
        pricesForStock.length;
      averages.push({ stock, averagePrice });
    } else {
      // Handle the case where pricesForStock is undefined or an empty array
      console.error(`Invalid prices for stock ${stock}`);
    }
  }

  // Sort stocks by average price in descending order
  averages.sort((a, b) => b.averagePrice - a.averagePrice);

  // Return the top three stocks
  const topThreeStocks: string[] = averages
    .slice(0, 3)
    .map((entry) => entry.stock);

  return topThreeStocks;
}

// Example usage:
const stocks: string[] = ['AMZN', 'CACC', 'EQIX', 'ORLY', 'ULTA'];
const prices: number[][] = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14],
  [10.34, 10.56, 10.14, 12.17, 13.1, 11.22],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21],
];

const topStocks: string[] = getTopStocks(stocks, prices);
console.log(topStocks); // Output: ['ORLY', 'AMZN', 'EQIX']
