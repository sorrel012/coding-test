n, x = map(int,input().split())
num_list = list(map(int,input().split()))
result_list = []

for i in range(n):    
    if  num_list[i] < x :
        result_list.append(num_list[i])

for i in result_list :
    print(i, end = " ")
