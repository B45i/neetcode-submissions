/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;

        if (l1.val <= l2.val) {
            l1.next = this.mergeTwoLists(l1.next, l2)
            return l1;
        } else {
            l2.next = this.mergeTwoLists(l2.next, l1)
            return l2
        }
    }
}
