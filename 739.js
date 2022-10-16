/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 // 单调栈
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length;
    let queue = [];
    let ans = [];
    for(let i=len-1;i>=0;i--){
        while(temperatures[i]>=temperatures[queue[0]]&& queue.length>0){
            queue.shift();
        }
        if(queue.length>0) ans[i] = queue[0]-i;
        else ans[i] = 0;
        queue.unshift(i);
    }
    return ans;
};