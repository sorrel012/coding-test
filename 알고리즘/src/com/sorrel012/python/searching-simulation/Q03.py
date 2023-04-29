a = list(range(21))

def reverse(start, end):
    for i in range((end-start+1)//2):
        a[start+i], a[end-i] = a[end-i], a[start+i]
        
for _ in range(10):
    start,end = map(int, input().split())
    reverse(start, end)
    
for x in result:
    print(x, end=" ")