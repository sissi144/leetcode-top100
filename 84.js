var largestRectangleArea = function(heights) {
    let n = heights.length;
    let left = new Array(n).fill(-1);
    let right = new Array(n).fill(n);
    let st = [];
    // 找到左边第一个小于他的和右边第一个小于他的中间的围合面积
    for(let i=0;i<n;i++){
        while(st.length>0&&heights[st[st.length-1]]>=heights[i]){
            right[st[st.length-1]] = i;
            st.pop();
        }
        left[i]= st.length <= 0 ? -1: st[st.length-1];
        st.push(i);
    }
    // st = [];
    // for(let i=n-1;i>=0;--i){
    //  while(st.length&&heights[st[st.length-1]]>=heights[i]){
    //      st.pop();
    //  }
    //  right[i]=(st.length<=0?n:st[st.length-1]);
    //  st.push(i)
    // }
    let ans = 0;
    for(let i=0;i<n;i++){
        ans = Math.max(ans,(right[i]-left[i]-1)*heights[i]);
    }
    return ans;
}