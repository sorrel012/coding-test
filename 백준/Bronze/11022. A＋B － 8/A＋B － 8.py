t = int(input())

import sys

for i in range(1, t+1):
    A,B = map(int,sys.stdin.readline().split())
    
    print("Case #%d: %d + %d = %d" %(i,A, B, A+B))