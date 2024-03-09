// https://www.hackerrank.com/challenges/tree-postorder-traversal/problem

function postOrder(root) {
	if (root) {
        postOrder(root.left);
        postOrder(root.right);
        process.stdout.write(root.data + " ");
    }
}

