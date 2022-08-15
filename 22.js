/**
 * @param {number} n
 * @return {string[]}
 */
 /*dfs回溯 把状态写在递归式里则不需要额外写pop*/
var generateParenthesis = function(n) {
    let ans = [];
    //左括号的个数 右括号的个数 字符串
    function dfs(left, right, temp) {
        if(temp.length === n*2) {
            ans.push(temp);
            return;
        }
        // 时刻保持 left 大于等于 right
        if(left === right){
             dfs(left+1,right,temp+'(')
        }else if(left > right) {
            if(left<n){
                dfs(left+1 ,right,temp+'(')
            }
            dfs(left,right+1,temp+')');
        }
    }
    dfs(0,0, '')
    return ans;
};