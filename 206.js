
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 /*链表 迭代 + 递归 */
// var reverseList = function(head) {
//     if(head == null|| head.next==null) return head;
//     let newhead = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return newhead;
// };

var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while(cur!==null){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
