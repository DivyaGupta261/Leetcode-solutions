/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var treeTilt = 0;
var findTilt = function(root) {
    treeTilt = 0;
    traverse(root);
    return treeTilt;
};

var traverse = function(root) {
    if (!root) return 0;
    let leftSum = traverse(root.left);
    let rightSum = traverse(root.right);
    let nodeTilt = Math.abs(leftSum - rightSum);
    treeTilt += nodeTilt;
    return leftSum + rightSum + root.val ;
    
}
