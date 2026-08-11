class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let price of prices) {
            maxProfit = Math.max(maxProfit, price - minPrice);
            minPrice = Math.min(price, minPrice)

        }


        return maxProfit;
    }
}
