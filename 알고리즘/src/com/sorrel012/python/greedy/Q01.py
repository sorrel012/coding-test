n, m = map(int, input().split())
a = list(map(int, input().split()))

a.sort()

print(a.index(m)+1)