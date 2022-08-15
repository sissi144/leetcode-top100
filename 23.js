/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 /*两两合并 归并排序*/
var mergeKLists = function(lists) {
    if(!lists.length) return null;
    function mergeTwoLists(l1,l2) {
        let head = new ListNode(0);
        let pre = head;
        while(l1&&l2) {
            if(l1.val<l2.val){
                pre.next = l1;
                l1=l1.next;
            } else {
                pre.next = l2;
                l2 = l2.next;
            }
            pre = pre.next;
        }
        if(l1) { pre.next = l1;}
        if(l2) { pre.next = l2;}
        return head.next;
    }
    function merge(lists, l ,r) {
        if(l===r) return lists[l];
        const mid = (l+r)>>1
        return mergeTwoLists(merge(lists,l,mid),merge(lists,mid+1,r));
    }
    return merge(lists,0,lists.length-1);
    
};