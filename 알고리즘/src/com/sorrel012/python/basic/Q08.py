n = int(input())

a = list(map(int, input().split()))


def reverse(x):
    res = 0
    while x > 0:
        t = x % 10
        res = res * 10 + t
        x = x // 10
    return res
    
def isPrime(x):
    a = [0]*(x+1)
    
    for i in range(2, x) :
        if(x%i == 0):
            return False       
                         
    return True

for x in a:
    if(reverse(x) != 1 & isPrime(reverse(x)) == True):
        print(reverse(x), end=' ')