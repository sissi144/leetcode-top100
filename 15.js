/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 /* 
    排序 去重 
    双指针指向左右两侧，
    根据sum的值进行缩进和及时舍弃 

 */
var threeSum = function(nums) {
    let ans =[];
    let len =nums.length;
    if(len<3) return ans;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<len;i++){
        let L= i+1;
        let R=len-1;
        if(nums[i]>0) break; //减少复杂度
        if(i>0&&nums[i]===nums[i-1]) continue; // 去重l1
        while(L<R){
            let sum = nums[i]+nums[L]+nums[R];
            if(sum ===0) {
                ans.push([nums[i],nums[L],nums[R]]);
                while(nums[L]===nums[L+1]) L++; // 去重l2
                while(nums[R]===nums[R-1]) R--; // 去重l3
                L++;
                R--;
            }else if(sum<0) { 
                L++;
            }else if(sum>0) {
                R--;
            }
        }
    }
    return ans;
};