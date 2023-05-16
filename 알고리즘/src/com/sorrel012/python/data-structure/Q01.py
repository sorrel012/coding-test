n, c = map(int, input().split())
n = list(map(int, str(n)))

stack = []

for x in n:
    while stack and c > 0 and stack[-1]<x:
        stack.pop()        
        c -= 1
    stack.append(x)
    
if c != 0:
    stack=stack[:-c]
    
res = ''.join(map(str, stack))

print(res)