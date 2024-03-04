// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem


function sortedInsert(llist, data) {
    // Write your code here
    const node = new DoublyLinkedListNode(data);
    if (llist === null) {
        return node;
    }
    
    let curr = llist;
    if (data <= curr.data) {
        node.next = curr;
        curr.prev = node;
        return node;
    } else {
        while (curr.next && curr.data < data) {
            curr = curr.next;
        }
        
        if (curr.next) {
            node.prev = curr.prev;
            curr.prev.next = node;
            node.next = curr;
            curr.prev = node;
            return llist;
        } 
        
        if (curr.data < data) {
            curr.next = node;
            return llist;
        } else {
            node.prev = curr.prev;
            curr.prev.next = node;
            node.next = curr;
            curr.prev = node;
            return llist;
        }
        
    }
    
    
}

