/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 // 因为窗口的值是固定的，每次都是p的长度，所以只要每次滑动的时候比较窗口内和固定p的是否一样就行
var findAnagrams = function(s, p) {
    const sLen = s.length,pLen = p.length;
    if(sLen<pLen) return [];
    const ans = [];
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    for(let i=0;i<pLen;i++){
        sCount[s[i].charCodeAt()-'a'.charCodeAt()]++;
        pCount[p[i].charCodeAt()-'a'.charCodeAt()]++;
    }
    if(sCount.toString() === pCount.toString()) ans.push(0);
    for(let i=pLen;i<sLen;i++){
        sCount[s[i-pLen].charCodeAt()-'a'.charCodeAt('')]--;
        sCount[s[i].charCodeAt()-'a'.charCodeAt('')]++;
        if(sCount.toString()===pCount.toString()) ans.push(i-pLen+1)
    }
    return ans;
};