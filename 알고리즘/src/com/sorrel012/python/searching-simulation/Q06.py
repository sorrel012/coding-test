grid = []

n = int(input())


for i in range(n):
    tmp = list(map(int, input().split()))
    grid.append(tmp)        
    
    
rowSum = 0
colSum = 0
diagSum1 = 0
diagSum2 = 0

for i in range(n):
    rowtmp = 0
    coltmp = 0
    for j in range(n):
        rowtmp += grid[i][j]
        coltmp += grid[j][i]
    
    if rowtmp > rowSum:
        rowSum = rowtmp
    if coltmp > colSum:
        colSum = coltmp
        
for i in range(n):
    diagSum1 += grid[i][i]
    
for i in range(n-1, -1, -1):
    diagSum2 += grid[i][i]
    
result = []

result.append((rowSum))
result.append((colSum))
result.append((diagSum1))
result.append((diagSum1))

result.sort(reverse = True)

print(result[0])
