// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem

function reverse(llist) {
    // Write your code here
    if (llist === null || llist.next === null) {
        return llist;
    } else {
        let current = llist;
        let next = current.next;
        let prev = null;
          
        while (current.next !== null) {
            current.next = prev; 
            prev = current; 
            current = next; 
            next = current.next; 
        }
        
        current.next = prev;
        return current;
    }
}