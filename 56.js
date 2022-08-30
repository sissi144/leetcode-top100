/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   
    let ans = [];
    intervals.sort((a,b)=>a[0]-b[0])
    console.log(intervals);
     let pre = intervals[0];
    for(let i=1;i<intervals.length;i++){
        let temp = intervals[i];
        if(temp[0]<=pre[1]&&pre[1]<=temp[1]){
            pre = [pre[0],temp[1]];
        }else if(temp[0]<=pre[1]&&temp[1]<=pre[1]){
            pre = [pre[0],pre[1]];
        }else {
            ans.push(pre);
            pre = temp;
        }
    }
    ans.push(pre);
    return ans;
};