n, c = map(int, input().split())
a = []

for _ in range(n):
    a.append(int(input()))

a.sort()

lt = 1
rt = a[n-1]

def Count(minLen):
    cnt = 1
    ep = a[0]
    
    for i in range(1, n):
        if a[i]-ep >= minLen:
            cnt +=1
            ep = a[i]
    
    return cnt
    
res = 0
while lt <= rt:
    minLen = (lt+rt) // 2
    
    if Count(minLen) >= c:
        res = minLen
        lt = minLen + 1
    else :
        rt = minLen - 1

print(res)