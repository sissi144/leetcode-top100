/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 /* 双指针 记得保存头*/
var removeNthFromEnd = function(head, n) {
    let l = new ListNode(0); // 哨兵
    l.next = head
    let newHead = l;
    let r = head;
    while(n -- ) r = r.next;
    while(r) {
        l = l.next
        r = r.next;
    }
    l.next = l.next.next; // 新的指标
    return newHead.next;
};