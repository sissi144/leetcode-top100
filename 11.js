/**
 * @param {number[]} height
 * @return {number}
 */
 /* 状态的改变 所有的排列组合可能有很多种，
    移动短边，可能得到比当前结果大的或小的或相等的，
    如果移动长边，则只能得到比当前结果小的或者相等的， 这种状态不需要
    所以移动短边即可。
 */
var maxArea = function(height) {
    let l = 0, r = height.length-1;
    let ans = 0;
    while(l<r){
        let area = Math.min(height[l],height[r])*(r-l);
        ans = Math.max(area, ans);
        if(height[l]<height[r]) l++;
        else r--;
    }
    return ans;
};