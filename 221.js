
 /* 动态规划 dp[i][j]表示以i-1,j-1为右下角的最大正方形，受限于左边，上边和左上三个模块 */
var maximalSquare = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    let dp = Array.from({length:n+1},()=>new Array(m+1).fill(0));
    let max =0;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(matrix[i-1][j-1]==='1'){
                dp[i][j]= Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
                max = Math.max(max,dp[i][j]);
            }else {
                dp[i][j] = 0
            }
        }
    }
    return max*max;
};
