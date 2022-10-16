/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 /*0-1背包 */
var findTargetSumWays = function(nums, target) {
    // 分两部分 一部分正数sum 一部分负数 neg 则 sum+neg= sum sum-neg = target 因此2neg = sum-target
    let sum = 0;
    sum = nums.reduce((total,curr) => {return total+curr});
    const diff = sum-target;
    if(diff<0 || diff%2!==0) return 0;
    // 转化为在数组中找到和为neg的方法 0-1背包
    const n = nums.length, neg = diff/2;
    const dp = new Array(n+1).fill(0).map(()=> new Array(neg+1).fill(0));
    dp[0][0] = 1;
    for(let i=1;i<=n;i++){
        const num = nums[i-1];
        for(let j=0;j<=neg;j++){
            dp[i][j] = dp[i-1][j]; // 都可以不选 
            if(j>=num){ // 假如能选 就+1;
                dp[i][j]+=dp[i-1][j-num];
            }
        }
    }
    return dp[n][neg];
};  