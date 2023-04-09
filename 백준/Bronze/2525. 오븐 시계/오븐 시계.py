h, m = map(int,input().split())
time = int(input())

result = m+time 

if result >= 60 :
    plus_hour = result // 60
    h += plus_hour
    result -= plus_hour * 60

if h >= 24 :
    h -= 24

print(h, result)