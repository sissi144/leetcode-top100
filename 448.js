 // 出现过的位置为负数 最后判断正数和负数即可。
var findDisappearedNumbers = function(nums) {
    let ans = [];
    for(let i=0;i<nums.length;i++){
        nums[Math.abs(nums[i])-1]= -Math.abs(nums[Math.abs(nums[i])-1]);
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0)  ans.push(i+1);
    }
    return ans;
};