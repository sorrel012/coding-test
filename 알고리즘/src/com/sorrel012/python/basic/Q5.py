n, m = map(int, input().split())
 
sum = []
 
for i in range(1, n+1):
    for j in range(1, m+1):
        sum.append(i+j)

res = set()
max = -1

for x in sum:
    if sum.count(x) > max:
        max = sum.count(x)


for x in sum:
    if sum.count(x) == max :
        res.add(x)

        
res = list(res)
res.sort()

for x in res:
    print(x, end=' ')