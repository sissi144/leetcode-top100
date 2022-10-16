/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum=function(root, targetSum){
    // map 表示 前缀和其对应的路径条数 前缀和指当前到根结点的距离，要找到符合的路径，两个节点作差即可。
    let map = new Map();
    let ans =0;
    dfs(root, 0);

    // 我们只用遍历整颗树一次，记录每个节点的前缀和，并查询该节点的祖先节点中符合条件的个数作差，将这个数量加到最终结果上。
    // 找到root节点开始前缀和为presum
    function dfs(root,presum){
       if (!root) return 0;
       map.set(presum, (map.get(presum)||0)+1);
       let target = presum + root.val;
       ans+=map.get(target-targetSum)||0;
       // 继续寻找
       dfs(root.left,target);
       dfs(root.right,target);
       //回溯 撤销选择
       map.set(presum, map.get(presum)-1)
    }
    return ans;
}