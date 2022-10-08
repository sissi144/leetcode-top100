/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length , n = matrix[0].length;
    let i=0,j=n-1;
    while(i<m&&j>=0){
        if(matrix[i][j]<target){
            i++
        }else if(matrix[i][j]>target){
            j--;
        }else {
            return true;
        }
    }
    return false;
};