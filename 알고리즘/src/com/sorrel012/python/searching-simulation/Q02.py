str = input()
digit = ''

for x in str:
    if(x.isdigit()):
        digit += x
        
num = int(digit)

cnt = 0
for i in range(1, num+1):
    if num%i == 0:
        cnt += 1

print(num)
print(cnt)