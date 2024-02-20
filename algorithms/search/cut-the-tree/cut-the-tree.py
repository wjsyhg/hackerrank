# https://www.hackerrank.com/challenges/cut-the-tree/problem

import collections

def cutTheTree(data, edges):
    # Write your code here
    n = len(data)
    total = sum(data)
    graph = collections.defaultdict(list)
    for u, v in edges:
        graph[u-1].append(v-1)
        graph[v-1].append(u-1)
    visited = [0] * n
    sums = [0] * n
    stack = [0]
    order = []
    parent = [0] * n

    while stack:
        node = stack.pop()
        order.append(node)
        visited[node] = 1
        for nei in graph[node]:
            if visited[nei] == 0:
                stack.append(nei)
                parent[nei] = node

    for node in order[::-1]:
        sums[node] += data[node]
        if node != 0:
            sums[parent[node]] += sums[node]

    return min(abs(total - 2 * sums[i]) for i in range(n))