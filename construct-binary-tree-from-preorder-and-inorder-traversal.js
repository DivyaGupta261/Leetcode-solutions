/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    
    let root = new TreeNode(preorder[0]);
    
    let index = inorder.findIndex(e => e === preorder[0]);
    
    let preorderLeft = preorder.slice(1, index+1);
    let preorderRight = preorder.slice(index+1, preorder.length);
    let inorderLeft = inorder.slice(0, index);
    let inorderRight = inorder.slice(index+1, inorder.length);
    
    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    
    return root;
};
