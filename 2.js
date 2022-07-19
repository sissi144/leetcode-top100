/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* 
    设立两个指针，相加并记录进位，生成新的节点，如果没有节点则设为0，直到两个节点都为空跳出循环，最后如果还有余位则最后新增节点。
*/
var addTwoNumbers = function(l1, l2) {
    let temp = 0;
    let head = new ListNode(0);
    let pre = head;
    while(l1 !==null || l2 !==null){
        let sum=(l1? l1.val:0 )+(l2? l2.val:0 )+temp;
        temp = Math.floor(sum / 10);
        let node = new ListNode(sum % 10);
        pre.next = node;
        pre = node;
        if(l1 !==null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(temp===1){
        pre.next = new ListNode(1);
    }
    return head.next;
};