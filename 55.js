/**
 * @param {number[]} nums
 * @return {boolean}
 */
 /*实时维护能到达的最大距离 已知最大距离为当前点加上距离 比较最大距离能否到达当前点 */
var canJump = function(nums) {
    let n=nums.length;
    let rmax = 0;
    for(let i=0;i<n;i++){
        if(i<=rmax){
            rmax= Math.max(rmax,i+nums[i]);
            if(rmax>=n-1){
                return true;
            }
        }else {
            return false;
        }
    }
};
