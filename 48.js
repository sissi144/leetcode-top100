/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 // 先沿着斜线镜像 然后沿着中间线镜像
var rotate = function(matrix) {
    let n= matrix.length;
    for(let i = 0;i<n;i++){
        for(let j = 0;j<n-i;j++){
            [matrix[i][j],matrix[n-j-1][n-i-1]] =  [matrix[n-j-1][n-i-1],matrix[i][j]]; 
        }
    }
    for(let i = 0;i<Math.floor(n/2);i++){
        [matrix[i],matrix[n-i-1]] = [matrix[n-i-1],matrix[i]];
    }
    return matrix;
};