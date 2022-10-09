
/* 先序遍历 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
   return rserialize (root, '');
};

const rserialize = (root, str) => {
     if (root === null) {
        str += "None,";
    } else {
        str += root.val + '' + ",";
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const dataArray = data.split(',');
    return rdeserialize(dataArray);
};

const rdeserialize = (dataList) => {
    if(dataList[0]==='None'){
        dataList.shift();
        return null;
    }
    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);
    return root;
}

/* 层序遍历 */


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if ( root === null ) return JSON.stringify([]);
   let queue = [root];
   let ans = [];
   
   while(queue.length){
       let node = queue.shift();

        if(node ===null) {
            ans.push(null);
            continue;
        }else{
            ans.push(node.val);
            node.left? queue.push(node.left):queue.push(null);
            node.right? queue.push(node.right):queue.push(null);
        }
   }
   return JSON.stringify(ans);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
 
    data = JSON.parse(data);
    if(data.length === 0) return null;
    let index = 1;
    let root = new TreeNode(data[0]);
    let queue = [root];
    while(queue.length) {
        const node = queue.shift(); 
        if(data[index]!==null){
            node.left = new TreeNode(data[index]);
            queue.push(node.left);
        }else {
            node.left= null;
        }
        index++;
        if(data[index]!==null){
            node.right = new TreeNode(data[index])
            queue.push(node.right);
        }else {
             node.right = null;
        }
        index++;
    }
    return root;
};
