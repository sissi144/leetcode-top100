/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(const num of nums){
        map.set(num,map.has(num)?map.get(num)+1:1);
    }
    // 得到哈希表，num对应出现的次数
    // 桶排序
    const bucketSort = () => {
        let arr = [];
        let res = [];
        // arr[i]存放频率为i的key数组
        map.forEach((value,key)=>{
            if(!arr[value]) arr[value] = [key];
            else arr[value].push(key);
        })
        for(let i=arr.length-1;i>=0&&res.length<k;i--){
            if(arr[i]) res.push(...arr[i]);
        }
        return res;
    }
    return bucketSort();
}