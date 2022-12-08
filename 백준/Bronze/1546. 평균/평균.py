n = int(input())
list = list(map(int,input().split()))
new = 0
for i in list :
    new += i/(max(list))*100

print(new/n)
    
