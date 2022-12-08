import sys
a, b = sys.stdin.readline().split()

result1 = ''
result2 = ''

for i in a :
    result1 = i + result1
    
for j in b :
    result2 = j + result2

a = int(result1)
b = int(result2)

if a > b:
    print(a)
else :
    print(b)
