/**
 * @param {number[]} prices
 * @return {number}
 */
 // dp[i][j]表示 i天 j状态的最大值 0 表示持有一支股票 1表示不持有但冷冻期 2表示不持有且非冷冻期
var maxProfit = function(prices) {
    let n=prices.length;
    let dp=Array.from(new Array(n),()=>new Array(3).fill(0))
    console.log(dp)
    dp[0][0]=-prices[0]
    for(let i=1;i<n;i++){
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][2]-prices[i])
        dp[i][1]=Math.max(dp[i-1][0]+prices[i])
        dp[i][2]=Math.max(dp[i-1][2],dp[i-1][1])
    }
    return Math.max(dp[n-1][1],dp[n-1][2]);
};