/**
 * @param {string} s
 * @return {string}
 */
 /* dp[i][j]表示i到j为回文子串 注意遍历的时候要从后往前 因为前面的要用到后面的状态*/

var longestPalindrome = function(s) {
    let res = '';
    let n = s.length;
    var dp=Array.from(new Array(n),()=>new Array(n).fill(0))
    for(let i =n-1; i >=0; i--){
        for(let j=i; j<n; j++){
            if(s[i]===s[j]){
                if(j - i >= 2 && dp[i+1][j-1] !== 0) {
                    dp[i][j] = dp[i+1][j-1] + 2; 
                } else if ( j-i < 2 ) {
                    dp[i][j] = j - i + 1 ;
                }
            }
            if(dp[i][j] > res.length){
                console.log(dp[i][j], i, j);
                res = s.slice(i, j+1);
            }
        }
    }
    return res;
};