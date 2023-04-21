n = int(input())

cnt = 0

def isPrime(num):
    for i in range(2, num):
        if(num % i == 0):
            return False
    return True
            
cnt = 0
for i in range(2, n+1):
    if(isPrime(i) == True):
        cnt += 1
        
print(cnt)