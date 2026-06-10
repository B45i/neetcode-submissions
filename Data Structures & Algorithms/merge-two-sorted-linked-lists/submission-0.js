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
        const root = new ListNode();
        let r = root;

        while(l1 && l2) {
            if(l1.val <= l2.val) {
                r.next = l1;
                l1 = l1.next
            } else {
                r.next = l2;
                l2 = l2.next;
            }
            r = r.next;
        }

      r.next = l1 || l2;
        return root.next;
    }
}
