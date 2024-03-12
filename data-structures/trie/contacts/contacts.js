// https://www.hackerrank.com/challenges/contacts/problem

function contacts(queries) {
    // Write your code here
    const trie = {};
    const result = [];
    
    for (let i = 0; i < queries.length; i++) {
        let operation = queries[i][0];
        let name = queries[i][1];
        
        if (operation === "add") {
            let node = trie;
            for (let j = 0; j < name.length; j++) {
                let char = name[j];
                if (node[char] === undefined) {
                    node[char] = {};
                }
                
                node = node[char];
                node.count = (node.count || 0) + 1;
            }
        } else {
            let node = trie;
            for (let j = 0; j < name.length; j++) {
                let char = name[j];
                if (node[char] === undefined) {
                    node = null;
                    break;
                }
                node = node[char];
            }
            
            if (node === null) {
                result.push(0);
            } else {
                result.push(node.count);
            }
        }
    }
    
    return result;
}