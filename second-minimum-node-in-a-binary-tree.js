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
var findSecondMinimumValue = function(root) {
    let nodes = [];
    const findNodes = function(root) {
        if (!root.left && !root.right){
            nodes.push(root.val);
        } else {
            findNodes(root.left);
            findNodes(root.right);
        }
    }
    findNodes(root);
    console.log(nodes)
    let min = Math.min(...nodes);
    let remaining = nodes.filter(n => n!=min);
    if (!remaining.length) return -1;
    return Math.min(...remaining)
    
};
