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
var maxPathSum = function(root) {
    let maxNum = -Infinity;
    // 返回当前节点为根时的最大路径和
    const dfs = (root) => {
        if(root ===null ){
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        // 左节点为根的最大路径和+右节点为根的最大路径和+根节点的值
        const innerSum = left + right +root.val;
        maxNum = Math.max(innerSum, maxNum);

        const outputNum = root.val+ Math.max(left,right);
        return outputNum<0? 0: outputNum;
    }
    dfs(root);
    return maxNum;
};