var isSymmetric = function(root) {
    return isSame(root, root);
};

var isSame = function(A, B){
    if(!A && !B) return true;
    if(!A || !B) return false;
    return A.val === B.val && isSame(A.left ,B.right) &&isSame(A.right,B.left);
}