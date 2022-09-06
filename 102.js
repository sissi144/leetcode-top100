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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [];
    let ans = [];
    if(!root) return ans;
    queue.push(root);
    while(queue.length){
        let length = queue.length;
        let temp = [];
        while(length){
            let node = queue.shift();
            temp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            length--;
        }
        ans.push(temp);
    }
    return ans;
};