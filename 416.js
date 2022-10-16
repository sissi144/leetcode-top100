/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n= nums.length;
    if(n<2) return false;
    let sum = 0;
    sum = nums.reduce((total,cur)=>{return total+cur});
    if(sum%2!==0) return false;
    const target =sum/2;
    const dp = new Array(n).fill(0).map(()=> new Array(target+1,false));
    for(let i=0;i<n;i++){
        dp[i][0] = true;
    }
    dp[0][nums[0]] = true;
    // dp[i][j] 表示i个元素内找到容量为j
    for(let i=1;i<nums.length;i++){
        const num = nums[i];
        for(let j=1;j<=target;j++){
            if(j>=num){
                dp[i][j] = dp[i-1][j] | dp[i-1][j-num]
            }else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[n-1][target];
};