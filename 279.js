/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n+1);
    dp[1] = 1,dp[0] = 0;
    for(let i=2;i<=n;i++){
        dp[i]=i;
        for(let j=1;j<=Math.floor(Math.sqrt(i));j++){
            dp[i] = Math.min(dp[i-j*j]+1,dp[i])
        }
    }
    return dp[n];
};