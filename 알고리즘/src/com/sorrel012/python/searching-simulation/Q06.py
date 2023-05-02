grid = []

n = int(input())

a = [list(map(int, input().split())) for _ in range(n)]

largest = 0

for i in range(n):
    rowtmp = 0
    coltmp = 0
    for j in range(n):
        rowtmp += grid[i][j]
        coltmp += grid[j][i]
    
    if rowtmp > largest:
        largest = rowtmp
    if coltmp > largest:
        largest = coltmp

diagSum1 = 0        
diagSum2 = 0        
for i in range(n):
    diagSum1 += grid[i][i]
    diagSum2 += gird[i][n-i-1]
    
if diagSum1 > largest:
        largest = diagSum1
if diagSum2 > largest:
    largest = diagSum1   

print(largest)
