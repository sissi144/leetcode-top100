/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, r= nums.length-1;
    // 先找右边界
    while(l<=r) {
        let mid = (l+r)>>1;
        if(nums[mid]===target){
            l=mid+1;
        }else if(nums[mid]<target){
            l=mid+1;
        }else {
            r=mid-1;
        }
    }
    let right = l;
    if(r>=0&& nums[r]!==target) return [-1,-1];
    // 再找左边界
    l=0,r= nums.length-1;
    while(l<=r) {
        let mid = (l+r)>>1;
        if(nums[mid]===target){
            r=mid-1;
        }else if(nums[mid]<target){
            l=mid+1;
        }else {
            r=mid-1;
        }
    }
    let left = r;
    if(right-left<=1) return [-1,-1];
    return [left+1, right-1]
};