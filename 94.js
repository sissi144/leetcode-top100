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
 * @return {number[]}
 */
 // 左根右
var inorderTraversal = function(root) {
    const res = [];
    const stk = [];
    // 用一个栈来保存
    while(root || stk.length) {
        // 左节点入栈
        while(root){
            stk.push(root);
            root = root.left;
        }
        // 出栈 输出值 放入右节点
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};