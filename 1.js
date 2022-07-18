

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /*
    哈希 保存缺少的值和坐标， 在查找的时候查找是否哈希表中已经存在目标值
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0 ;i<nums.length;i++) {
        if(map.has(nums[i])){
            return [map.get(nums[i]), i];
        }
        let temp = target - nums[i];
        map.set(temp, i);
    }
};
