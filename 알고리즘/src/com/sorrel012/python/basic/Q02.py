t = int(input())

for i in range(1, t+1):
    n, s, e, k = map(int, input().split())
    a = list(map(int, input().split()))
    a = a[s-1:e]
    a.sort()
    res = a[k-1]
    
    print("#%d %d" %(i, res))