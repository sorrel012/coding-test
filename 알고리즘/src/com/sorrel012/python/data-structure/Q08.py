n = int(input())

a=[]

for _ in range(n):
    a.append(input())

for _ in range(n-1):
    a.remove(input())
    
print(a[0])
    