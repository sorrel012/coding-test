n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]

for x in a:
    x.insert(0, 0)
    x.append(0)    

a.insert(0, [0]*(n+2))
a.append([0]*(n+2))

cnt = 0

for i in range(1, n+1):
    for j in range(1, n+1):
        if (a[i][j] > a[i-1][j]) & (a[i][j] > a[i+1][j]) & (a[i][j] > a[i][j-1]) & (a[i][j] > a[i][j+1]):
            cnt +=1 
            
print(cnt)