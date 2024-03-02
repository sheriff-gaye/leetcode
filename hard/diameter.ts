class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function diameterOfBinaryTree(root: TreeNode | null): number {

    let diameter = 0;

    const height = (node: TreeNode | null): number => {
        if (!node) return 0;

        let left = height(node.left);
        let right = height(node.right);

        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }
    height(root);

    return diameter

}

console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)))); // 3