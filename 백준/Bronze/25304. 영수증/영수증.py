x = int(input())
n = int(input())

price = 0

for i in range(n) :
    a, b = map(int,input().split())
    price += a*b 
    
if price == x :
    print('Yes')
else :
    print('No')

    