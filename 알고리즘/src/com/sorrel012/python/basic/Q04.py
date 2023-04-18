n = int(input())
a = list(map(int, input().split()))

avg = int(round(sum(a)/n,0))
min = 2147000000

for idx, x in enumerate(a):
    tmp = abs(x-avg)
    if(tmp < min):
        min = tmp
        score = x
        res = idx + 1
    elif(tmp==min) :
        if x > score:
            score = x
            res = idx + 1
            
print(avg, res)