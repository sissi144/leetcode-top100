/**
 * @param {string} s
 * @return {boolean}
 */
 /*使用哈希+栈 记得使用map 可以简化写法 */
var isValid = function(s) {
    let map = new Map();
    if(s.length%2!==0) return false;
    map.set(')','(');
    map.set('}','{');
    map.set(']','[');
    let  st = [];
    for(let i = 0;i<s.length;i++){
        let temp = s[i];
        if(map.has(temp)){
            let head = st.pop();
            if(head !== map.get(temp)){
                return false;
            }
        }else {
            st.push(temp);
        }
    }
    if(st.length>0) return false;
    return  true;
};