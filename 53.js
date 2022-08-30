/**
 * @param {number[]} nums
 * @return {number}
 */
 /*动态更新最大和 从正数开始*/
var maxSubArray = function(nums) {
    let temp = 0;
    let ans = -Infinity;
    for(let i=0;i<nums.length;i++){
        temp+=nums[i];
        ans= Math.max(temp, ans);
         if(temp<0){
            temp=0;
        }
    }
    return ans;
};