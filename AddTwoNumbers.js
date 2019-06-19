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
    let node;
    let carry = Math.floor(arguments[2]/10);
    if(l1 || l2) {        
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        let nextN1 = l1 ? l1.next : null;
        let nextN2 = l2 ? l2.next : null;
        let val = carry ? n1 + n2 + carry : n1 + n2;
        node = new ListNode(val % 10);
        node.next = addTwoNumbers(nextN1, nextN2, val);
    } else if(carry){
        node = new ListNode(carry);
        node.next = null;
    }
    
    return node;
};
