n = int(input())
num = n

cnt = 0
while True :
    ten = n//10
    one = n%10
    plus_result = ten+one
    new_num = plus_result%10 + one*10
    cnt += 1
    n = new_num
    
    if new_num == num:
        break 
print(cnt) 