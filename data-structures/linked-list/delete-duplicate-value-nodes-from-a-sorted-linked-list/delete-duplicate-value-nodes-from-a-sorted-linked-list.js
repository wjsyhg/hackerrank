// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

function removeDuplicates(llist) {
    if (llist === null || llist.next === null) {
        return llist;
    }

    let curr = llist;
    const visited = new Set();
    visited.add(curr.data);

    while (curr.next) {
        if (visited.has(curr.next.data)) {
            curr.next = curr.next.next;
            if (curr.next) {
                curr.next.prev = curr;
            }
        } else {
            visited.add(curr.next.data);
            curr = curr.next;
        }
    }

    return llist;

}