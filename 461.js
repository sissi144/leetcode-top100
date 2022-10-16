 // s&s-1可以消掉二进制末尾的1
var hammingDistance = function(x, y) {
   let s = x ^ y, ret = 0;
    while (s != 0) {
        s = s&(s-1);
        ret++;
    }
    return ret;
};