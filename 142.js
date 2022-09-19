/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 /*链表 */
 /* 画图理解 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast != null){
        slow = slow.next;
        if(fast.next!=null){
            fast = fast.next.next;
        }else {
            return null;
        }
        while(fast==slow){
            let ptr= head;
            while(ptr!==slow){
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr
        }
    }
    return null
};