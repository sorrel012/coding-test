n = int(input())
a = list(map(int, input().split()))

max = -2147000000
num = 0
for x in a:
    sum = 0
    tmp = x
    while(x > 0):
        sum += x%10
        x = int(x/10)
    if sum > max:
        max = sum
        num = tmp
        
print(num)