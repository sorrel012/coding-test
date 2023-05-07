def check(a):
    for i in range(9):
        chRow = [0]*10
        chCol = [0]*10
        for j in range(9):
            chRow[a[i][j]] = 1
            chCol[a[j][i]] = 1
        if sum(chRow) != 9 or sum(chCol) != 9:
            return False
    
    for i in range(3):
        for j in range(3):
            chGroup = [0]*10
            for k in range(3):
                for s in range(3):
                    chGroup[a[i*3+k][j*3+s]] = 1
                
            if sum(chGroup) != 9:
                return False
    
    return True
            
a = [list(map(int, input().split())) for _ in range(9)]

if check(a):
    print("YES")
else:
    print("NO")