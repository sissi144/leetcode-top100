/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 /*二分搜索*/
var search = function(nums, target) {
    let l =0,r= nums.length-1;
    while(l<=r){
        let mid = (l+r)>>1;
        if(nums[mid]===target) return mid;
        if(nums[l]<=nums[mid]){ //左边有序 
            if(nums[l]<=target&&target<=nums[mid]){
                r=mid-1;
            }else {
                l=mid+1;
            }
        }else {  //右边有序
            if(nums[mid]<=target&&target<=nums[r]){
                l=mid+1;
            }else {
                r=mid-1;
            }
        }
    }
    return -1;
};