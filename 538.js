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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let pre =0;
    function dfs(root){
        if(!root) return;
        dfs(root.right);
        root.val = pre+root.val;
        pre = root.val;
        dfs(root.left);
    }
    dfs(root);
    return root;
};