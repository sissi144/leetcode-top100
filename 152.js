
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 /*动态规划 */

var maxProduct = function(nums) {
    let n = nums.length;
    let ans = nums[0];
    let maxDp = new Array(n);
    let minDp = new Array(n);
    maxDp[0] = nums[0];  // 最大
    minDp[0] = nums[0]; // 最小 因为最大乘以负数会变为最小，最小乘以负数会变为最大
    for(let i=1;i<n;i++){
        if(nums[i]<=0){
            maxDp[i]= Math.max(minDp[i-1] * nums[i],nums[i]);
            minDp[i] = Math.min(maxDp[i-1]* nums[i],nums[i])
        }else {
            maxDp[i] = Math.max(maxDp[i-1]*nums[i],nums[i]);
            minDp[i] = Math.min(minDp[i-1]*nums[i],nums[i]);
        }
        ans = Math.max(ans, maxDp[i]);
    }
    return ans;
}
 /*节约空间写法*/

var maxProduct = function(nums) {
    let n = nums.length;
    let ans = nums[0];
    let maxpre = nums[0], minpre = nums[0];
    for(let i=1;i<n;i++){
        if(nums[i]<0){
            [maxpre, minpre] = [minpre, maxpre];
        }
        maxpre = Math.max(maxpre * nums[i],nums[i],);
        minpre = Math.min(minpre * nums[i],nums[i]);
        ans = Math.max(ans, maxpre);
    }
    return ans;
}

