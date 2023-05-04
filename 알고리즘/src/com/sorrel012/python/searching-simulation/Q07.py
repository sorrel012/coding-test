n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]

s = e = n//2
sum = 0

for i in range(n):
    for j in range(s, e+1):
       sum += a[i][j]
       
    if i < n//2 :
        s -= 1
        e += 1
    else:
        s += 1
        e -= 1     

print(sum)