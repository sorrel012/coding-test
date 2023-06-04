l = int(input())
a = list(map(int, input().split()))
m = int(input())

maxIndex=0
minIndex=l-1
for _ in range(m):
    for i in range(l):
        if a[i] > a[maxIndex]:
            maxIndex = i
        if a[i] < a[minIndex]:
            minIndex = i
    a[maxIndex] -= 1
    a[minIndex] += 1
    print()
    
print(max(a) - min(a))
