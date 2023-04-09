import sys

n = int(sys.stdin.readline())
init = 0

for i in range(1, n+1):        
    a = list(map(int, str(i)))
    m = i + sum(a)              
    if m == n:
        init = i                   
        break

print(init)