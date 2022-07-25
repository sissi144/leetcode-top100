/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 /*dp[i][j]表示前i个s和前j个p匹配 主要根据p[j-1]的情况来进行讨论*/
var isMatch = function(s, p) {
    const len1=s.length;
    const len2=p.length;
    var dp=Array.from(new Array(len1+1),()=>new Array(len2+1).fill(false));
    dp[0][0]=true;
    //dp[x][0]默认false 初始化完毕
    for(let i=1;i<len2;i++){
        if(p[i]=="*"){
            dp[0][i+1]=dp[0][i-1];
        }
    }
    for(let i=1;i<=len1;i++){
        for(let j=1;j<=len2;j++){
            if(s[i-1]==p[j-1]||p[j-1]=='.'){
                dp[i][j]=dp[i-1][j-1]
            }
            if(p[j-1]=='*'){
                if(p[j-2]!==s[i-1]&&p[j-2]!=='.')
                    dp[i][j]=dp[i][j-2];
                else 
                    dp[i][j]=dp[i][j-1]||dp[i-1][j]||dp[i][j-2]
            }
        }
    }
    return dp[len1][len2]
};