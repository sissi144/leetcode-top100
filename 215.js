/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /* 第k个最大的元素，等于从后往前数第k个 快速排序*/
var findKthLargest = function(nums, k) {
    if(nums.length<1) return nums;
    let mid = Math.floor(nums.length/2);
    let pivot = nums.splice(mid,1)[0];
    let left = [],right = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    if(right.length===k-1){
        return pivot;
    }else if(right.length>k-1) return findKthLargest(right,k);
    else return findKthLargest(left,k-right.length-1)
};