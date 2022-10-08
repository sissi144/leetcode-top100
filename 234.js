var isPalindrome = function(head) {
    if(head.next === null) return true;
    let fast = head;
    let slow = head;
    // 这里的写法要注意， 要找到中间的点应该是这样写
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next
    }
    let first  = head;
    let after = reverse(slow.next);
    while(after && first) {
        if(after.val !== first.val ) return false;
        after = after.next;
        first = first.next;
    }
    // 可以恢复链表
    return true;
};

function reverse(node) {
    let pre = null;
    let cur = node ;
    while(cur) {
        const tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre
}
返回该题
力扣 LeetCode
竞赛
LeetBook