grid = []

n = int(input())

a = [list(map(int, input().split())) for _ in range(n)]

rowSum = 0

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
    diagSum2 += gird[i][n-i-1]
    
result = []

result.append((rowSum))
result.append((colSum))
result.append((diagSum1))
result.append((diagSum1))

result.sort(reverse = True)

print(result[0])
