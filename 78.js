/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = []
    let path = [];
    function dfs(startIndex){
        ans.push([...path]);
        for(let i=startIndex;i<nums.length;i++){
            path.push(nums[i]);
            /*highlight i+1 */
            dfs(i+1);
            path.pop();
        }
    }
    dfs(0);
    return ans;
};