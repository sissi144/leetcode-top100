/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;
    let tmp = invertTree(root.right);
    root.right = invertTree(root.left);
    root.left = tmp;
    return root;
};