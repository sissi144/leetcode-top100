/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = -1;
    let two = nums.length;
    let i = 0;
    while(i<two){
        let tmp;
        if(nums[i]==0){
            zero++;
            [nums[zero],nums[i]] =  [nums[i],nums[zero]]
            i++;
        }else if(nums[i]==2){
            two--;
            [nums[two],nums[i]] =  [nums[i],nums[two]]
        }else {
            i++;
        }
        
    }
    return nums;
};