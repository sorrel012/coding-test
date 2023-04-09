n = int(input())
num_list = list(range(100,n+1))
result_num = []
for i in num_list:
    arith_num=list(str(i)) 
    arith_num=list(map(int,arith_num)) 
    if arith_num[0]- arith_num[1] == arith_num[1]- arith_num[2] :
        result_num.append(i)

if n>=100:
    print(99+len(result_num))
else:
    print(n)
        
    
    
    