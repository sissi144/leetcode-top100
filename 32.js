/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let n = s.length;
    // dp[i]表示以s[i]为结尾的最长有效括号
    let ans = 0;
    let dp = new Array(n).fill(0);
    for(let i=1;i<n;i++){
        if(s[i]===')'){
            if(s[i-1]==='('){
                if(i-2>=0){
                    dp[i] = dp[i-2]+2;
                }else {
                    dp[i] = 2;
                }
            }else {
                if(s[i-dp[i-1]-1]==='('){
                    if(i-dp[i-1]-2>=0){
                        dp[i]= dp[i-1]+2 + dp[i-dp[i-1]-2];
                    }else {
                        dp[i] = dp[i-1]+2
                    }
                }
            }
        }
        ans = Math.max(dp[i],ans);
    }
    return  ans;
};