/**
 * @param {number[]} nums
 * @return {number}
 */
 /* 自小放大 状态转移方程  关注最后一刻的状态*/
var maxCoins = function(nums) {
    let n = nums.length;
    let point = [1,...nums,1];
    let dp = Array.from(new Array(n+2),()=> new Array(n+2).fill(0));
    for(let i=1;i<n+2;i++){
        for(let j=i-1;j>=0;j--){
            for(let k=j+1;k<i;k++ ){
                dp[j][i] = Math.max(dp[j][i],dp[j][k]+dp[k][i]+point[j]*point[i]*point[k]);
            }
        }
    }
    return dp[0][n+1];
};