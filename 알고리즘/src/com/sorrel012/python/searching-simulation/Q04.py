n = int(input())
a = list(map(int, input().split()))

m = int(input())
b = list(map(int, input().split()))

a.extend(b)
a.sort()

for x in a:
    print(x, end=" ")