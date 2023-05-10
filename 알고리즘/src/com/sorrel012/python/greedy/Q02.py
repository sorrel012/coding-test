def Count(mid):
    cnt = 0
    for x in a:
        cnt += x//mid
    return cnt


k, n = map(int, input().split())

a = []
largest =0

for _ in range(k):
    tmp = int(input())
    a.append(tmp)
    largest = max(largest, tmp)

    
res = -1

lt = 1
rt = largest
while lt <= rt:
    mid = (lt + rt) // 2
    
    if Count(mid) >= n:
        res = mid
        lt = mid+1
    else:
        rt = mid-1
        
        
print(res)