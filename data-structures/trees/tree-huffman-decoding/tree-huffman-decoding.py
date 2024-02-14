# https://www.hackerrank.com/challenges/tree-huffman-decoding/problem

def decodeHuff(root, s):
	#Enter Your Code Here
    current = root
    result = ""
    for char in s:
        if char == '0':
            current = current.left
        else:
            current = current.right
        if current.left is None and current.right is None:
            result += current.data
            current = root
    print(result)