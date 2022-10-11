/**
 * @param {number} n
 * @return {number[]}
 */
 // 如果是奇数，那就是从前一个偶数+1来的，如果是偶数，那么1的个数和右移1位去掉尾部的0（除以2） 一致
var countBits = function(n) {
    let dp = new Array(n+1).fill(0);
    for(let i=1;i<=n;i++){
        if(i&1 === 1){
            dp[i]= dp[i-1]+1
        }else {
            dp[i]= dp[i/2]
        }
    }
    return dp;
};