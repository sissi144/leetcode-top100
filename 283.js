/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //*l记录非0元素的个数，r用于遍历数组，都缓过来之后，从l开始补零 */
var moveZeroes = function(nums) {
    let l=0,r=0;
    while(r!==nums.length){
        if(nums[r]!==0){
            nums[l] = nums[r];
            l++;
        }
        r++;
    }
    for(let i=l;i<nums.length;i++){
        nums[i] = 0
    }
    return nums;
};