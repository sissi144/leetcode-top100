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
 * @return {number}
 */
 // 最大路径就是左边的某个节点左右深度之和 在求节点深度的时候 更新最大的即可。
var diameterOfBinaryTree = function(root) {
    let ans =0;
    function dfs(root){
        if(!root) return 0;
        let leftDep = dfs(root.left);
        let rightDep = dfs(root.right);
        ans = Math.max(leftDep+rightDep, ans);
        return Math.max(leftDep,rightDep)+1;
    }
    dfs(root);
    return ans;
};