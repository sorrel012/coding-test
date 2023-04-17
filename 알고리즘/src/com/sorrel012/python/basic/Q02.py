t = int(input())

for i in range(1, t+1):
    n, s, e, k = map(int, input().split())
    a = list(map(int, input().split()))
    slice_a = a[s-1:e]
    slice_a.sort()
    res = slice_a[k-1]
    
    print("#", end='')
    print(i, res)
    print()