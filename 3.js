/**
 * @param {string} s
 * @return {number}
 */
 /*
 滑动窗口，即右标滑动，不断更新左标使得符合规定，最后比较长度后输出
  */
var lengthOfLongestSubstring = function(s) {
    // i为左标， j为右标
    let i=-1, j=0;
    let map =new Map();
    let ans = 0;
    // 按照右标滑动窗口
    while(j<s.length) {
        // 假如有重复的 更新左标
        if(map.get(s[j])>=i) {
            i = map.get(s[j]);
        }
        map.set(s[j],j)
        j++;
        ans = Math.max(ans, j-i-1);
    }
    return ans;
};