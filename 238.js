/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let a = new Array(nums.length).fill(1);
    let b = new Array(nums.length).fill(1);
    let ans = new Array(nums.length).fill(1);
    for(let i=1;i<nums.length;i++){
        a[i] = a[i-1]*nums[i-1];
    }
    for(let i=nums.length-2;i>=0;i--){
        b[i] = b[i+1]*nums[i+1];
    }
    for(let i=0;i<nums.length;i++){
        ans[i] = a[i]*b[i];
    }
    return ans;
};