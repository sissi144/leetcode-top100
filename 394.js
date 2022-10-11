/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let st =[];
    let multi = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]===']'){
            let temp = ''
            while(st[st.length-1] !== '['){
                temp = st.pop() + temp;
            }
            st.pop(); //弹出左括号
            let ans = '';
            let num = st.pop(); //弹出数字
            ans = temp.repeat(num);
            st.push(ans); //重新压入
        } else if(s[i]==='['){ //遇到左括号的时候， 数字肯定结束了
            st.push(multi);
            multi = 0;
            st.push('[')
        } else if(s[i]<='9'&&s[i]>=0){ // 遇到数字 统一处理。
            multi = multi *10+ parseInt(s[i]);
        }else { // 字母直接push
            st.push(s[i]);
        }
    }
    return st.join('');
};