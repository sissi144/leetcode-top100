/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // dp[n]表示n个元素可以组成的二叉搜索树个数
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i=2;i<=n;i++){
        // 分别选取每个点作为中间点，则二叉搜索树的个数等于左边次数*右边次数 累加
        for(let j=1;j<=i;j++){
            dp[i]+=dp[j-1]*dp[i-j];
        }
    }
    return dp[n];
}