/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    //标记是否访问过
    const used = new Array(m).fill(false).map(()=>new Array(n).fill(false));
    const canFind = (row, col, i) => {
        if(i == word.length) {
            return true;
        }
        if( row<0 || row>=m || col<0 || col>=n) return false;
        if(word[i]!=board[row][col] || used[row][col]) return false;
        //push
        used[row][col] = true;
        if( canFind(row+1, col, i+1)||canFind(row, col+1, i+1) ||canFind(row-1, col, i+1)||canFind(row, col-1, i+1) ) {
            return true
        }
        //pop
        used[row][col] = false;
        return false;
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j]==word[0]&&canFind(i,j,0)){
                return true;
            }
        }
    }
    return false;
};