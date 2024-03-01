# https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem

def has_cycle(head):
    if head is None or head.next is None:
        return 0
        
    visitedNode = set()
    node = head
    while node is not None:
        if node in visitedNode:
            return 1
        else:
            visitedNode.add(node)
            node = node.next
    return 0