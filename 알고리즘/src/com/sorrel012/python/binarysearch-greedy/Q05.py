n = int(input())

a = []

for _ in range(n):
    tmp = list(map(int, input().split()))
    a.append(tmp)
a.sort(key=lambda x:(x[1], x[0]))

et = 0
cnt = 0
for b, e in a:
    if b >= et :
        et = e
        cnt += 1 
 
print(cnt)           