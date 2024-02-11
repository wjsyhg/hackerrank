# https://www.hackerrank.com/challenges/qheap1/problem

# Enter your code here. Read input from STDIN. Print output to STDOUT
import heapq

def process_queries():
    heap = []
    n = int(input().strip())
    removed = set()
    
    for _ in range(n):
        query = list(map(int, input().strip().split()))
        if query[0] == 1:
            heapq.heappush(heap, query[1])
        elif query[0] == 2:
            removed.add(query[1])
        else:
            while heap[0] in removed:
                removed.remove(heapq.heappop(heap))
            print(heap[0])
            
process_queries()