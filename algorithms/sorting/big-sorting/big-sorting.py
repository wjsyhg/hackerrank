# https://www.hackerrank.com/challenges/big-sorting/problem

def bigSorting(unsorted):
    # Write your code here
    result = sorted(unsorted, key=lambda x: (len(x), x))
    return result