/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 归并排序
var sortList = function(head) {
    if(!head || !head.next) return head;
    let fast = head,slow = head;
    let pre = null;
    while(fast && fast.next){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return merge(sortList(head),sortList(slow));
}
// 合并两个有序链表
function merge(l1, l2) {
    let head = new sortList(0);
    let pre = head;
    while(l1 && l2) {
        if(l1.val<l2.val){
            pre.next=l1;
            l1 = l1.next;
        }else {
            pre.next = l2;
            l2= l2.next;
        }
        pre= pre.next;
    }
    if(l1) pre.next = l1;
    if(l2) pre.next = l2;
    return head.next;
}
返回该题