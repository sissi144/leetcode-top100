/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 /*  链表 两个节点都走a+b+c的长度 就能相遇 */
var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null;
    let p1 = headA, p2= headB;
    while(p1 !== p2) {
        p1 = p1!==null? p1.next:headB;
        p2 = p2!==null ? p2.next: headA;
    }
    return p1;
};