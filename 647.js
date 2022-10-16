/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(false).map(()=> new Array(n).fill(false));
    let count = 0;
    for(let i = n-1;i>=0;i--){
        for(let j=i;j<n;j++){
            if(j===i){
                dp[i][j]=true;
                count++;
            }else if(j-i==1){
                if(s[i]===s[j]){
                    dp[i][j] = true;
                    count++;
                }
            }else {
                if(s[i]===s[j]&&dp[i+1][j-1]){
                    dp[i][j] = true;
                    count++;
                }
            }
        }
    }
    return count;
}