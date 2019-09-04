/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sumList = new ListNode();
    let carry = 0;
    let currentNode = sumList;
    while((l1 && l1.val != undefined) || (l2 && l2.val!= undefined)) {
        let sum = carry + (l1 && l1.val ? l1.val : 0) + (l2 && l2.val ? l2.val : 0);
        let prevNode = currentNode;
        prevNode.val = sum%10;
        carry = Math.floor(sum/10);
        l1 = (l1 && l1.next) ? l1.next : null;
        l2 = (l2 && l2.next) ? l2.next : null;
        if (l1 || l2) {
            currentNode = new ListNode();
            prevNode.next = currentNode;
        }
    }
    
    if (carry ) {
        currentNode.next = new ListNode();
        currentNode.next.val = carry;
    }
    return sumList;
};
