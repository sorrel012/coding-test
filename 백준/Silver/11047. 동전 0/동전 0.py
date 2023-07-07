import sys

N, K= map(int, sys.stdin.readline().split())
a = []

for _ in range(N):
    a.append(int(sys.stdin.readline()))
    
cnt = 0

for i in reversed(range(N)):
    cnt += K//a[i] 
    K = K%a[i] 

print(cnt)
