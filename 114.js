/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 /*用栈记录节点顺序  入栈的时候先右节点 再左节点*/
var flatten = function(root) {
    if(root === null) return;
    let st = [];
    let prev = null;
    st.push(root);
    while(st.length) {
        const curr = st.pop();
        if(prev !==null){
            prev.left = null;
            prev.right = curr;
        }
        curr.right && st.push(curr.right);
        curr.left && st.push(curr.left);
        prev = curr;
    }
};
/*当前左节点的最右最下节点是右节点的父节点*/
var flatten = function(root) {
    let curr = root;
    while(curr !==null) {
        if(curr.left !==null){
            const next = curr.left; // 当前节点的下一个节点一定是左子节点
            // 找到左子节点的最右最下节点 作为原右节点的父节点
            let pre = next;
            while(pre.right !== null ){
                pre = pre.right;
            }
            pre.right = curr.right;
            // 把当前节点的左子节点 变为 右节点 左子节点变为空
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right
    }
};
