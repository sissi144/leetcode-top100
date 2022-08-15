/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 /* 回溯就写pus和pop */
var combinationSum = function(candidates, target) {
    let ans = [];
    function dfs(index,sum,temp){
        if(sum>target) return;
        if(sum===target){
            ans.push([...temp]);
            return;
        }
        for(let i=index;i<candidates.length;i++){
            temp.push(candidates[i])
            dfs(i, sum + candidates[i],  temp);
           temp.pop();
        }
    }
    dfs(0,0,[]);
    return ans;
};