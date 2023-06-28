import sys

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))

cnt = 0

for i in range(n):
    num = a[i]

    tmp = 0
    for j in range(1, num+1):
        if num%j == 0 :
            tmp += 1

    if tmp == 2:
        cnt += 1
                
print(cnt)
