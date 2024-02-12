# https://www.hackerrank.com/challenges/queries-with-fixed-length/problem

import collections 

def solve(arr, queries):
    # Write your code here
    n = len(arr)
    result = []
    for d in queries:
        q = collections.deque()
        min_max = float('inf')
        for i in range(n):
            while q and q[0] < i - d + 1:
                q.popleft()
                
            while q and arr[q[-1]] < arr[i]:
                q.pop()
                
            q.append(i)
            
            if i >= d - 1:
                min_max = min(min_max, arr[q[0]])
        result.append(min_max)
        
    return result