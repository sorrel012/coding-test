n, k = map(int, input().split())
li = list(map(int, input().split()))

res = set()

for i in range(n):
    for j in range(i+1, n):
        for l in range(j+1, n):
            sum = li[i] + li[j] + li[l]
            res.add(sum)
            
res = list(res)            
res.sort(reverse=True)

print(res[k-1])