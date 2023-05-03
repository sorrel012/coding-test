n, m = map(int, input().split())
a = list(map(int, input().split()))

cnt =  0
for i in range(n):
    sum = 0
    sum += a[i]
    if sum == m:
        cnt += 1
        continue
    for j in range(i+1, n):
        sum += a[j]
        if sum == m:
            cnt += 1
            break
        
print(cnt)
        