/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let len = nums.length;
    let min = nums[len-1];
    let max = nums[0];
    let begin = 0 , end = -1;
    // 不断更新max 最后一个小于max的就是end;
    for(let i=0;i<len;i++){
        if(nums[i]<max){
            end = i;
        }else {
            max = nums[i];
        }
    }
    // 不断更新min， 最后一个大于min的就是begin
    for(let i=len-1;i>=0;i--){
        if(nums[i]>min){
            begin = i;
        }else {
            min = nums[i];
        }
    }
    return end-begin+1;
};