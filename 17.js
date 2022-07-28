/* 经典回溯 注意回溯和return的条件*/

var letterCombinations = function(digits) {
    let arr = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let ans = [];
    if(!digits) return [];
    function dfs(res, index){
        if(index === digits.length){
            ans.push(res);
            return;
        }
        let temp = parseInt(digits[index]);
        for(let i=0;i<arr[temp-2].length;i++){
            res+=arr[temp-2][i]; //push
            dfs(res,index+1);
            res = res.slice(0,-1); // pop
        }
    }
    dfs('',0);
    return ans;
};