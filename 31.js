/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length-1;
    //1.找到递减的临界点 i-1 / i;
    while(nums[i] <= nums[i-1] && i>0) i--;
    if(i===0) return nums.reverse();
    console.log(i);
    let j = nums.length-1;
    // 2.从后面递增序列中找到 大于该递减节点的点并交换位置
    while(nums[j] <= nums[i-1] && i < j) j--;
    [nums[j],nums[i-1]] = [nums[i-1],nums[j]];
    let leng = nums.length
    // 3.递减节点后面的序列保持递增
    while(i<leng){
        [nums[i],nums[leng-1]]=[nums[leng-1],nums[i]];
        i++;
        leng--;
    }
    return nums;
};