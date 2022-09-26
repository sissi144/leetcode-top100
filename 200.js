/**
 * @param {character[][]} grid
 * @return {number}
 */
 /* dfs  每次遍历把相邻的1变为0 计算遍历的次数*/
var numIslands = function(grid) {
    let count = 0;
    let m = grid.length, n = grid[0].length;
    function dfs(i,j){
         if(i<0||i>=m||j<0||j>=n||grid[i][j]==='0') return ;
         grid[i][j]= '0';
         dfs(i+1,j);
         dfs(i-1,j);
         dfs(i,j+1);
         dfs(i,j-1);
     }

     for(let i = 0;i<m;i++){
         for(let j =0;j<n;j++){
             if(grid[i][j]==='1'){
                 dfs(i,j);
                 count++;
             }
         }
     }
     return count;
};