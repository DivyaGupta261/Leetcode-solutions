/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    
    let root;
    if ((t1 && (t1.val != undefined || t1.val != null)) && (t2 && (t2.val != undefined || t2.val != null))) {
        root = new TreeNode(t1.val + t2.val);
    } else if (t1 && (t1.val != undefined || t1.val != null)) {
        root = new TreeNode(t1.val);
    } else if(t2 && (t2.val != undefined || t2.val != null)) {
        root = new TreeNode(t2.val);
    } else {
        return null;
    }
    root.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
    root.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
    return root;
};
