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
 * @return {boolean}
 */
 /* 方法一 递归*/
// var isValidBST = function(root) {
//     return helper(root, -Infinity, Infinity);
// };

// const helper = (root,lower, upper) => {
//     if(root === null) return true;
//     if(root.val<=lower || root.val>=upper) {
//         return false;
//     }
//     return helper(root.left,lower,root.val) && helper(root.right,root.val,upper);
// }
/* 方法二 迭代 中序遍历 比较序列值*/
var isValidBST = function(root) {
    let st = [];
    let pre = -Infinity;
    while(st.length || root){
        while(root){
            st.push(root)
            root = root.left
        }
        let temp = st.pop();
        if(pre >= temp.val){
            return false;
        }
        pre = temp.val;
        root = temp.right;
    }
    return true;
};