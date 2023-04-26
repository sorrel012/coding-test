n = int(input())
a = list(map(int, input().split()))

cnt = 0
score = 0

for x in a:
    if x == 0:
        cnt = 0
    else :
        cnt += 1
        score += cnt
    
print(score)