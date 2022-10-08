/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 /* 递归函数理解为在树中找p q两个节点 */
var lowestCommonAncestor = function(root, p, q) {

    if(root === null || root ===p || root ===q ) return root;
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(left === null) return right;
    if(right === null) return left;
    return root; // 假如左右都有返回 
      
};
