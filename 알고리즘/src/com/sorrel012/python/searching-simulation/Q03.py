result = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

def reverse(start, end):
    tmp = [0] * (end-start+1)
    
    cnt = 0
    for i in range(end, start-1, -1):
        tmp[cnt] = result[i]
        cnt+=1
    
    for i in range(end, start-1, -1):
        result[i] = tmp[i-start]
        
for i in range(10):
    a = list(map(int, input().split()))
    start = a[0]-1
    end = a[1]-1
    reverse(start, end)
    
for x in result:
    print(x, end=" ")