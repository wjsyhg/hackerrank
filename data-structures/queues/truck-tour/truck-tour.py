// https://www.hackerrank.com/challenges/truck-tour/problem

import collections

def truckTour(petrolpumps):
    q = collections.deque()
    for i in range(len(petrolpumps)):
        q.append((petrolpumps[i][0] - petrolpumps[i][1], i))

    total = 0
    end = 0

    while True:
        total += q[end][0]
        if total >= 0:
            end += 1
            if end == len(q):
                return q[0][1]
        else:
            while q[end][0] < 0:
                q.rotate(-1)
                total = 0
                end = 0






    
        