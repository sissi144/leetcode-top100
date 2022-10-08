/**
 * @param {number[]} nums
 * @return {number}
 */
 // 二分法，
var findDuplicate = function(nums) {
    let l = 0, r= nums.length-1;
    while(l<r){
        let count=0;
       const mid = Math.floor((l+r)/2)
       for(let i=0;i<nums.length;i++){
           if(nums[i]<=mid){
               count++;
           }
       }
       if(count<=mid){
           l= mid+1;
       }else{
           r=mid;
       }
    }
    return r;
};