# https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem

def height(root):
    if root is not None:
        return 1 + max(height(root.left), height(root.right))
    return -1