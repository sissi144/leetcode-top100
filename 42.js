/*单调栈*/
var trap = function(height) {
    let ans =0;
    let st = []; //单调递减栈 存储数组下标
    for(let i =0 ;i<height.length;i++){
        while(st.length>0&&height[st[st.length-1]]<height[i]){
            // 当当前元素大于栈顶元素的时候 栈顶元素出栈 
            let temp = st.pop();
            if(st.length==0) break;
            let curwidth = i-st[st.length-1]-1;
            // 计算前一个元素和栈顶元素和当前元素的围合面积
            let curheight= Math.min(height[st[st.length-1]],height[i])-height[temp];
            ans+=curwidth*curheight;
        }
        st.push(i);
    }
    return ans;
}

/**
 * @param {number[]} height
 * @return {number}
 */
 /*每一个圆柱能围合的面积为左边最高的和右边最高中最小的-当前的*/
 /*分别维护两个数组 一个表示i左边最高的，一个表示i右边最高的 然后求积*/
var trap = function(height) {
    let n = height.length;
    let leftMax=new Array(n).fill(0), rightMax = new Array(n).fill(0);
    leftMax[0]=height[0];
    for(let i=1;i<n;i++){
        leftMax[i]= Math.max(height[i],leftMax[i-1]);
    }
    rightMax[n-1]=height[n-1];
    for(let i=n-2;i>=0;i--){
        rightMax[i]= Math.max(height[i],rightMax[i+1]);
    }

    let sum = 0;
    for(let i=0;i<n;i++){
        let t =  Math.min(leftMax[i],rightMax[i])-height[i]
        if(t>0) sum+=t;
    }
    return sum;
};