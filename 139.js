/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/* 动态规划 */
var wordBreak = function(s, wordDict) {
    
    let n = s.length;
    // dp[n]表示前n个单词可以用wordDict字典组成 
    // dp[i] = dp[j] && wordDict.has(s.slice(i, j));
    let dp = new Array(n+1).fill(false);
    dp[0] = true;
    for(let i = 1;i<=n;i++){
        for(let j =0;j<i;j++){
            let temp = s.slice(j,i)
            if(wordDict.indexOf(temp)>=0 && dp[j]===true){
                dp[i] = true;
            }
        }
    }
    return dp[n];
};