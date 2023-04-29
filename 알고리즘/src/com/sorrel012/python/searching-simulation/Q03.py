result = list(range(1, 21))

def reverse(start, end):
    tmp = [0] * (end-start+1)
    
    cnt = 0
    for i in range(end, start-1, -1):
        tmp[cnt] = result[i]
        cnt+=1
    
    for i in range(end, start-1, -1):
        result[i] = tmp[i-start]
        
for _ in range(10):
    start,end = map(int, input().split())
    reverse(start, end)
    
for x in result:
    print(x, end=" ")