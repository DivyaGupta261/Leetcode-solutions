/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let value = root.val;
    let queue = [root];
    let uni = true;
    while(queue.length) {
        const node = queue.shift();
        if (node.val != value) {
            uni = false;
            break;
        }
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return uni;
    
    
};
