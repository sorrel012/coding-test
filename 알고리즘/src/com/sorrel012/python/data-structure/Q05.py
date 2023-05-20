n, k = map(int, input().split())

queue = [i for i in range(1, n+1)]

cnt = 1
while len(queue) > 1:    
    if(cnt == k):
        queue.pop(0)
        cnt = 1
    else:
        queue.append(queue.pop(0))
        cnt += 1
        
print(queue[0])