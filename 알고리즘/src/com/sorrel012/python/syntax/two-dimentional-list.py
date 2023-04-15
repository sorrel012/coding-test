# a = [0] *10
# print(a)

a = [[0]*3] *3
print(a)
a = [[1]*3 for _ in range(3)] 
print(a)
print()

a[0][1] = 2
a[1][1] = 3
print(a)
print()

for x in a:
    print(x)
print()
    
for x in a:
    for y in x:
        print(y, end = ' ')
    print()