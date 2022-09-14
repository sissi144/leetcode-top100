/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    let min = Infinity;
    //当天卖出的最大收益一定是 当天的价格减去前几天的最低价格
    for(let i=0;i<prices.length;i++){
        min = Math.min(prices[i], min)
        ans = Math.max(ans, prices[i]-min);
    }
    return ans;
};