/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 /* 链表 */
var hasCycle = function(head) {
    let fast = head, slow = head;
    while(fast){
        if(fast.next ===null) return false;
        fast = fast.next.next;
        slow = slow.next
         if(fast===slow) return true;
    }
    return false;
};