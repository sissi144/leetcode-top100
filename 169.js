/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ans = nums[0],count = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!== ans) count--;
        else count ++;
        if(count===0) {ans = nums[i]; count = 1;}
    }
    return ans;
};