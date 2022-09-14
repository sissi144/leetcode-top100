/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let ans = 0;
    let s = new Set(nums);
    for(const num of nums){
        // 使得内层只会执行n次
        if(!s.has(num-1)){
            let len = 0;
            while(s.has(num+len)){
                len++;
            }
            ans = Math.max(len, ans);
        }
    }
    return ans;
};