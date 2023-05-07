def check(a):
    for i in range(9):
        chRow = [0]*10
        chCol = [0]*10
        for j in range(9):
            chRow[a[i][j]] = 1
            chCol[a[j][i]] = 1
        if sum(chRow) != 9 or sum(chCol) != 9:
            return False
    
    dx = [-1,0,1,-1,1,-1,0,1,0]
    dy = [1,1,1,0,0,-1,-1,-1,0]
    chGroup = [0]*10
    for i in range(1, 8, 3):
        for j in range(1, 8, 3):
            for k in range(9):
                chGroup[a[i+dy[k]][j+dx[k]]] = 1
            if sum(chGroup) != 9:
                return False
    
    return True
            
a = [list(map(int, input().split())) for _ in range(9)]

if check(a):
    print("YES")
else:
    print("NO")