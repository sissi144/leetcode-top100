/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {

    let len = tasks.length;
    let maxTask = 0; // 单类任务最多 任务数
    let arr = new Array(26).fill(0);
    let countMaxTask = 0; // 最多任务数的并列任务类数
    for(const task of tasks){
        arr[task.charCodeAt('')-'A'.charCodeAt('')]++;
        maxTask = Math.max(arr[task.charCodeAt('')-'A'.charCodeAt('')],maxTask);
    }
    // 计算有多少个最多任务数的任务
    for(let i=0;i<26;i++){
        if(arr[i]==maxTask){
            countMaxTask++;
        }
    }
    // (maxTask-1)*(n+1) 前面的桶子  countMaxTask 最后一行 
    // 如果空闲时间都被填满了 那一定是tasks.length
    return Math.max(tasks.length,(maxTask-1)*(n+1)+countMaxTask);

};