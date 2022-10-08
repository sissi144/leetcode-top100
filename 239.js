/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(k===0) return [];
    if(nums.length===0) return [];
    let queue = [];
    let ans = [];
    for(let i=0;i<k;i++){
        buildQueue(queue,i,nums,k);
    }
    ans.push(nums[queue[0]]);
    for(let i=k;i<nums.length;i++) {
        buildQueue(queue, i, nums,k);
        ans.push(nums[queue[0]]);
    }
    return ans;
};
/**
    最大队列，保存当前窗口内从大到小的递减序列 , 则窗口最大则是队列的头
    index 当前坐标， k 窗口最大长度
 */
function buildQueue(queue, index, nums, k) {
    // 假如 头已经出了窗口，则去掉头
    if(queue[0]+k<=index && queue.length){
        queue.shift();
    }
    // 入队的时候 pop掉小于的
    while(queue.length && nums[queue[queue.length-1]]<nums[index]){
        queue.pop();
    }
    queue.push(index);
}