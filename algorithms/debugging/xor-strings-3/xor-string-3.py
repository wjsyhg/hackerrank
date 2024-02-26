# https://www.hackerrank.com/challenges/three-month-preparation-kit-strings-xor/problem

def strings_xor(s, t):
    res = ""
    for i in range(len(s)):
        if s[i] == t[i]: # change from = to ==
            res += '0'; # change from = to +=
        else:
            res += '1'; # change from = to +=

    return res

s = input()
t = input()
print(strings_xor(s, t))

