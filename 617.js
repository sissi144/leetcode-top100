/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // 判空这里
    if(!root1) return root2;
    if(!root2) return root1;
    let node = new TreeNode(root1.val +root2.val);
    node.left = mergeTrees(root1.left,root2.left);
    node.right = mergeTrees(root1.right,root2.right);
    return node;
};