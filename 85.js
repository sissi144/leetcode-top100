var maximalRectangle = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = new Array(m).fill(0).map(()=> new Array(n).fill(0));
    /* left 数组记录左边开始的连续高度*/
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==='1'){
                left[i][j]= j===0? 1:left[i][j-1]+1;
            }
        }
    }
    let ret = 0;
    /*然后计算当前点为右下角的矩阵面积 找到最大值*/
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0) continue;
            let width = left[i][j];
            let area = width;
            for(let k=i-1;k>=0;k--){
                width = Math.min(left[k][j],width);
                area = Math.max(area, width * (i-k+1));
            }
            ret = Math.max(ret, area);
        }
    }
    return ret;
}