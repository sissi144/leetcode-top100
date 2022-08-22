/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 /*dfs+回溯 需要维护一个数组来表示元素是否被访问过*/
var permute = function(nums) {
    let ans = [];
    let visit = [];
    function dfs(path) {
        if(path.length===nums.length){
            ans.push([...path]);
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(visit[i]) continue;
            path.push(nums[i]);
            visit[i] = true;
            dfs(path);
            path.pop();
            visit[i] = false;
        }
    }
    dfs([]);
    return ans;
};