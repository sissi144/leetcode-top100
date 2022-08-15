/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 /*双指针遍历*/
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0);
    let pre = head;
    while(list1 && list2) {
        if(list1.val<list2.val) {
            pre.next = list1;
            list1 = list1.next;
        } else {
            pre.next = list2;
            list2 = list2.next;
        }
        pre = pre.next;
    }
    
    if(list1) pre.next = list1;
    if(list2) pre.next = list2;
    return head.next
};