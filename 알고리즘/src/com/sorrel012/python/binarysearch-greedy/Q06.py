n = int(input())

a = [tuple(map(int, input().split())) for _ in range(n)]

a.sort(reverse=True)

max = 0
cnt = 0

for x, y in a:
    if y > max:
        max = y
        cnt += 1
        
print(cnt)